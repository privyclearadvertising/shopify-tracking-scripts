# Shopify Tracking Scripts

This repo contains custom JavaScript snippets and Google Tag Manager configurations to implement advanced tracking on Shopify storefronts—primarily focused on Google Ads Enhanced Conversions.

## 📦 Included Scripts

### 1. `gtag-enhanced-conversion.js`
A browser script that listens for Shopify’s `checkout_completed` event and sends purchase + enhanced user data to the Google Ads dataLayer via `gtag`.

- Tracks successful purchases
- Pushes enhanced conversions (email, phone, address)
- Supports transaction ID, currency, subtotal, and product IDs

**Usage:** Add to Shopify theme (e.g., in `theme.liquid`) or load via Script Tag App like Google & Youtube or use Custom Events
**Note:** Replace `AW-XXXXXXXXX` and conversion label with your own Google Ads IDs.
