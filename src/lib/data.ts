'use server';
import {httpClient} from "@/lib/http-client";
import type {Topic} from "@/types/topics";
import type {Photo} from "@/types/photo";

export const fetchTopics = async () => {
    return httpClient.get<Topic[]>('topics');
}
export const fetchTopic = async (slug: string) => {
    return httpClient.get<Topic>(`topics/${slug}`);
}
export type SearchProps = {
    query: string;
    page: number;
    perPage: number;
    topics: string;
}
export const fetchRandomPhotos = async (searchProps: SearchProps) => {
    const querySearch = new URLSearchParams();
    const topic = searchProps.topics ? await fetchTopic(searchProps.topics) : null;
    querySearch.set('query', searchProps.query);
    if (topic) querySearch.set('topics', topic.id);
    querySearch.set('page', searchProps.page.toString() ?? '1');
    querySearch.set('count', searchProps.perPage.toString());
    querySearch.set('orientation', 'landscape');
    querySearch.set('content_filter', 'high');
    return httpClient.get<Photo[]>(`photos/random?${querySearch.toString()}`);
}