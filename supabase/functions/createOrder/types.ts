export interface Product {
    id: string;     // uuid - required
    quantity: number;       // required, >=1
    price: number;      // required, >=0
}

export interface Order {
    customer_cui?: string | null;       // optional, <=255 chars
    customer_email?: string | null;     // optional, email
    shipping_company_name?: string | null;    // optional  
    
    shipping_first_name: string;        // required, <= 255 chars
    shipping_last_name: string;         // required, <= 255 chars
    shipping_phone: string;             // required, <= 255 chars
    shipping_postcode: string;          // required
    shipping_address: string;           // required, <= 255 chars
    shipping_city: string;              // required, <= 255 chars
    shipping_county: string;           // required, <= 255 chars
    shipping_country: string;           // required

    billing_company_name?: string | null;
    billing_first_name: string;     // required, <= 255 chars
    billing_last_name: string;      // required, <= 255 chars
    billing_phone: string;          // required, <= 255 chars
    billing_postcode: string;       // required
    billing_address: string;        // required, <= 255 chars
    billing_city: string;           // required, <= 255 chars
    billing_county: string;        // required, <= 255 chars
    billing_country: string;        // required
    
    payment_method: "card" | "cod";        // required

    customer_notes?: string | null;         // optional, <= 255 chars
    order_shop_id?: string | null;          // optional, <= 255 chars
    custom_awb?: string | null;             // optional, binary <= 10240 chars
    custom_awb_number?: string | null;      // optional, <= 255 chars

    shipping_cost?: number | null;          // optional, >=0
    discount_cost?: number | null;          // optional, >=0
    total?: number | null;                  // optional, >=0
    currency?: string | null;               // optional
    courier_id?: string | null;             // optional

    shop_id: string;                        // uuid - required
    products: Product[];                    // required
}