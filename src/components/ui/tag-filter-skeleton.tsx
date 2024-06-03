import {Skeleton} from "@/components/ui/skeleton";

const tagsPlaceholder = Array.from({length: 10}, (_, i) => i);
export const TagFilterSkeleton = () => {
    return (
        <div className="flex justify-center gap-4 mt-4">
            {tagsPlaceholder.map((tag) => (
                <Skeleton key={tag} className="w-24 h-8 rounded-full"/>
            ))}
        </div>
    )
}