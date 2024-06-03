'use client';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
const tags = [
    "All",
    "Nature",
    "People",
    "Food",
    "Architecture",
    "Current Events",
    "Experimental",
    "Fashion",
    "Film",
    "Health",
    "Interiors",
];
export const SearchBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentTag = searchParams.get("tag");
    const handleTagChange = (tag: string) => {
        const search = new URLSearchParams(searchParams.toString());
        if (tag === "All") search.delete("tag");
        else search.set("tag", tag);
        router.push(`${pathname}?${search.toString()}`);
    };
    const handleSearch = (query: string) => {
        const searchParams = new URLSearchParams();
        if (query === "") searchParams.delete("query");
        else searchParams.set("query", query);
        router.push(`${pathname}?${searchParams.toString()}`);
    }
    return (
        <div className="flex flex-col items-center justify-between gap-8">
            <div className="w-full flex justify-center">
                <Input
                    type="text"
                    placeholder="Search"
                    className="w-full flex-1"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className="flex justify-center gap-4 mt-4">
                {tags.map((tag) => (
                    <Badge key={tag} variant={currentTag === tag || (!currentTag && tag ==='All') ? 'default' : 'outline'} onClick={() => handleTagChange(tag)}>{tag}</Badge>
                ))}
            </div>
        </div>
    );
}