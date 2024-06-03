import {HttpClient} from "@/lib/http-client.interface";
import {KyInstance} from "ky";

export class KyHttpClient extends HttpClient {
    constructor(private readonly apiInstance: KyInstance) {
        super();
    }
    get<T>(url: string): Promise<T> {
        return this.apiInstance.get(url).json();
    }

    delete<T>(url: string): Promise<T> {
        return this.apiInstance.delete(url).json();
    }

    patch<T>(url: string, data: Partial<T>): Promise<T> {
        return this.apiInstance.patch(url, {json: data}).json();
    }

    post<T>(url: string, data: Partial<T>): Promise<T> {
        return this.apiInstance.post(url, {json: data}).json();
    }

    put<T>(url: string, data: Partial<T>): Promise<T> {
        return this.apiInstance.put(url, {json: data}).json();
    }
}