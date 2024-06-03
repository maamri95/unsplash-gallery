'use client';
import {Provider} from "@/components/provider";
import {useInfinitePhotos} from "@/hooks/use-infinite-photos";
import {Photo} from "@/types/photo";
import {GallerySkeleton} from "@/components/ui/gallery-skeleton";
import {PhotoCard} from "@/components/ui/photo-card";
export type GalleryProps = {
    initPhotos?: Photo[];
    topics?: string;
}
export const Gallery = (props: GalleryProps) => {
    const {photos, isFetchingNextPage} = useInfinitePhotos(props);
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    photos?.pages.map((page) => {
                        return page.map((photo) => (
                                <PhotoCard photo={photo} key={photo.id} />
                            )
                        )
                    })
                }
            </div>
            <div id="load-more" className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {isFetchingNextPage && (
                    <GallerySkeleton/>
                )}
            </div>
        </div>
    );
}

export const GalleryWithProvider = (props: GalleryProps) => {
    return (
        <Provider>
            <Gallery {...props}/>
        </Provider>
    )
}