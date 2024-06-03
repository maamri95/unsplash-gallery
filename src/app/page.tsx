import Image from "next/image";
import {SearchBar} from "@/components/ui/search-bar";
import {Gallery} from "@/components/ui/gallery";

export default function Home() {
  return (
    <main className="flex max-w-[1448px] m-auto min-h-screen flex-col items-center justify-between gap-8 p-24">
      <SearchBar/>
        <Gallery/>
    </main>
  );
}
