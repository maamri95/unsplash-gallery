'use client';
import {Input} from "@/components/ui/input";
import { useRouter, useSearchParams} from "next/navigation";
import {debounce} from "@/lib/utils";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const handleSearch = debounce((query: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (query === "") newSearchParams.delete("query");
        else newSearchParams.set("query", query);
        router.push(`/?${newSearchParams.toString()}`);
    }, 500);
    return (
        <div className="w-full flex justify-center">
            <Input
                type="text"
                placeholder="Search"
                className="w-full flex-1"
                defaultValue={query}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}