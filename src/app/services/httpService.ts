import { ENV } from "@/environments/environments";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
    method: HttpMethod;
    headers?: HeadersInit;
    body?: BodyInit | null;
}

class HttpService {
    private baseUrl: string = ENV.apiUrl;

    private async request(url: string, options: RequestOptions): Promise<any> {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    public async get(url: string): Promise<any> {
        const options: RequestOptions = {
            method: 'GET',
        };
        return this.request(`${this.baseUrl}${url}`, options);
    }

    public async post(url: string, body: any): Promise<any> {
        const options: RequestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };
        return this.request(`${this.baseUrl}${url}`, options);
    }

    public async put(url: string, body: any): Promise<any> {
        const options: RequestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };
        return this.request(`${this.baseUrl}${url}`, options);
    }

    public async delete(url: string): Promise<any> {
        const options: RequestOptions = {
            method: 'DELETE',
        };
        return this.request(`${this.baseUrl}${url}`, options);
    }
}

export default HttpService;