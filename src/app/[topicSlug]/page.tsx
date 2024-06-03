import {SearchBar} from "@/components/ui/search-bar";
import {GalleryWithProvider} from "@/components/ui/gallery";

export default function Home({params}: {
    params: {
        topicSlug?: string;
    }
}) {
  return (
          <main className="flex max-w-[1448px] m-auto min-h-screen flex-col items-center justify-between gap-8 p-24">
              <SearchBar/>
              <GalleryWithProvider topics={params.topicSlug}/>
          </main>
  );
}
