import { Order } from './types.ts';

export class FulfiloClient {
    private apiKey: string;
    private apiURL: string;

    constructor(apiKey: string, apiURL= 'https://api.fulfilo.tech/api/v1/orders') {
        this.apiKey = apiKey;
        this.apiURL = apiURL;
    }

    async createOrder(orderData: Order) {
        const response = await fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const contentType = response.headers.get('content-type') ?? '';
        const text = await response.text();

        if(!response.ok) {
            if(contentType.includes('application/json')) {
                try {
                    const errJson = JSON.parse(text);
                    throw new Error(`Fulfilo API error: ${JSON.stringify(errJson)}`);
                } catch {
                    throw new Error(`Fulfilo API error (invalid JSON): ${text}`);
                }
            }
            throw new Error(`Fulfilo API error: ${text}`);
        }

        return contentType.includes('application/json') ? JSON.parse(text) : text;
    }
}