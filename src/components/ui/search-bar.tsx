import {SearchInput} from "@/components/ui/search-input";
import {TagFilterListServer} from "@/components/ui/tag-filter-list-server";
import {Suspense} from "react";
import {TagFilterSkeleton} from "@/components/ui/tag-filter-skeleton";

export const SearchBar = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-8">
            <SearchInput/>
            <Suspense fallback={<TagFilterSkeleton/>}>
                <TagFilterListServer/>
            </Suspense>
        </div>
    );
}