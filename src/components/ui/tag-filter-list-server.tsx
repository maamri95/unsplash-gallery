import {TagFilterListClient} from "@/components/ui/tag-filter-list-client";
import {fetchTopics} from "@/lib/data";

export const TagFilterListServer = async () => {
    const topics = await fetchTopics();
    return (
            <TagFilterListClient topics={topics}/>
    )
}