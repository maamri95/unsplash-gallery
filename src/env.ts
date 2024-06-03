import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        API_URL: z.string().url(),
        UNSPlASH_KEY: z.string().min(1),
    },
    client: {
    },
    experimental__runtimeEnv: {
    }
});