import {KyHttpClient} from "@/lib/ky-http-client";
import {KyFactory} from "@/lib/ky.factory";
import {env} from "@/env";

export const httpClient = new KyHttpClient(KyFactory.createInstance({
    prefixUrl: env.API_URL,
    headers: {
            'Authorization': `Client-ID ${env.UNSPlASH_KEY}`
        }
}));