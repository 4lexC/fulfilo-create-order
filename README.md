# Fulfilo Edge Function - Create Order

This function allows you to send an order to the Fulfilo API using a Supabase Edge Function.

### Notes on the fields:
- `customer_cui` (optional, string, max 255 chars)
- `customer_email` (optional, string, email)
- `shipping_company_name` (optional, string)

- `shipping_first_name` (required, string, max 255 chars)
- `shipping_last_name` (required, string, max 255 chars)
- `shipping_phone` (required, string, max 255 chars)
- `shipping_postcode` (required, string)
- `shipping_address` (required, string, max 255 chars)
- `shipping_city` (required, string, max 255 chars)
- `shipping_country` (required, string, max 255 chars)
- `shipping_country` (required, string)

- `billing_company_name` (optional, string)
- `billing_first_name` (required, string, max 255 chars)
- `billing_last_name` (required, string, max 255 chars)
- `billing_phone` (required, string, max 255 chars)
- `billing_postcode` (required, string)
- `billing_address` (required, string, max 255 chars)
- `billing_city` (required, string, max 255 chars)
- `billing_country` (required, string, max 255 chars)
- `billing_country` (required, string)

- `payment_method` (required, string): `"cash"` or `"cod"`

- `customer_notes` (optional, string, max 255 chars)
- `order_shop_id` (optional, string, max 255 chars)
- `custom_awb` (optional, string<binary>, max 10240 chars)
- `custom_awb_number` (optional, string, max 255 chars)

- `shipping_cost` (optional, number >= 0)
- `discount_cost` (optional, number >= 0)
- `total` (optional, number >= 0)
- `currency` (optional, string)
- `courier_id` (optional, string)

- `shop_id` (required, string, UUID)
- `products` (required, array of objects)
    - `id` (required, string, UUID)
    - `quantity` (required, number, >=1)
    - `price` (required, number, >=0)


### Example raw JSON body:
```json
{
  "customer_cui": null,
  "customer_email": null,
  
  "shipping_company_name": "Transport Co. SRL",
  "shipping_first_name": "John",
  "shipping_last_name": "Doe",
  "shipping_phone": "+40712345678",
  "shipping_postcode": "010101",
  "shipping_address": "Strada Exemplu 1",
  "shipping_city": "Bucharest",
  "shipping_county": "Bucharest",
  "shipping_country": "RO",
  
  "billing_company_name": "Transport Co. SRL",
  "billing_first_name": "John",
  "billing_last_name": "Doe",
  "billing_phone": "+40712345678",
  "billing_postcode": "010101",
  "billing_address": "Strada Exemplu 1",
  "billing_city": "Bucharest",
  "billing_county": "Bucharest",
  "billing_country": "RO",
  
  "payment_method": "card",
  "customer_notes": "Please deliver in the morning",
  "order_shop_id": null,
  "custom_awb": null,
  "custom_awb_number": null,
  "shipping_cost": 10.50,
  "discount_cost": 2.00,
  "total": 28.50,
  "currency": "RON",
  "courier_id": null,
  "shop_id": "55b6a63b-d667-4fb4-9b26-a0a2920e1cc8",
  
  "products": [
    {
      "id": "5453ebe7-cd3a-4866-a063-8d63944e5134",
      "quantity": 2,
      "price": 10.00
    }
  ]
}