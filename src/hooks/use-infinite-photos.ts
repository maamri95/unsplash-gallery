import {useInfiniteQuery} from "react-query";
import {fetchRandomPhotos} from "@/lib/data";
import {useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";
import {Photo} from "@/types/photo";
export type useInfinitePhotosProps = {
    initPhotos?: Photo[];
    topics?: string;
}
export const useInfinitePhotos = ({initPhotos = [], topics=''}: useInfinitePhotosProps) => {
    const searchParams = useSearchParams();
    const {data: photos, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["photos", {query: searchParams.get('query'), topics: topics}],
        queryFn: async ({ pageParam }) => {
            return await fetchRandomPhotos({
                query: searchParams.get('query') ?? '',
                page: pageParam ?? 1,
                perPage: 9,
                topics: topics,
            });
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined;
            return pages.length + 1;
        },
        refetchOnWindowFocus: false,
        initialData: {pages: [initPhotos], pageParams: [1]},
    })
    const observer = useRef<IntersectionObserver>();
    useEffect(() => {
        const handleObserver = (entities: any[]) => {
            const target = entities[0];
            if (target.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        };

        observer.current = new IntersectionObserver(handleObserver);
        const targetElement = document.querySelector('#load-more');
        if (targetElement) {
            observer.current.observe(targetElement);
        }

        return () => {
            if (observer.current && targetElement) {
                observer.current.unobserve(targetElement);
            }
        };
    }, [fetchNextPage, hasNextPage]);
    return {photos, isFetchingNextPage};
}