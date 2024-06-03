'use client';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";
import {Topic} from "@/types/topics";
export type TagFilterProps = {
    topics: Topic[];
};
export const TagFilterListClient = ({topics}:TagFilterProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const currentTag = pathname.split('/')[1];
    const handleTagChange = (topic: Topic | null) => {
        if (!topic) {
            router.push(`/`);
            return;
        }
        router.push(`/${topic?.slug}`);
    };
    return (
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <Badge className="cursor-pointer hover:bg-primary/50 hover:text-white" variant={!currentTag ? 'default' : 'outline'}
                   onClick={() => handleTagChange(null)}>All</Badge>
            {topics.map((topic) => (
                <Badge className="cursor-pointer hover:bg-primary/50 hover:text-white" key={topic.slug} variant={currentTag === topic.slug? 'default' : 'outline'}
                       onClick={() => handleTagChange(topic)}>{topic.title}</Badge>
            ))}
        </div>
    )
}