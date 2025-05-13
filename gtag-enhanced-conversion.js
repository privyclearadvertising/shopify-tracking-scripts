// Replace 'AW-XXXXXXX' and 'AW-XXXXXXX/XXXXXXXXXXX' with your own Google Ads ID and conversion label

// Load gtag script
const script = document.createElement("script");
script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"); // <-- Replace with your Google Ads ID
script.setAttribute("async", "");
document.head.appendChild(script);

// Setup dataLayer and gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-XXXXXXXXX", { allow_enhanced_conversions: true }); // <-- Replace with your Google Ads ID

// Shopify checkout tracking
analytics.subscribe("checkout_completed", async (event) => {
  const enhancedConversionData = {
    email: event.data.checkout.email,
    phone_number: event.data.checkout.phone,
    address: {
      first_name: event.data.checkout.shippingAddress.firstName,
      last_name: event.data.checkout.shippingAddress.lastName,
      street: event.data.checkout.shippingAddress.address1,
      city: event.data.checkout.shippingAddress.city,
      region: event.data.checkout.shippingAddress.provinceCode,
      postal_code: event.data.checkout.shippingAddress.zip,
      country: event.data.checkout.shippingAddress.countryCode,
    },
  };

  const checkoutData = {
    send_to: "AW-XXXXXXXXX/XXXXXXXXXXX", // <-- Replace with your conversion ID and label
    transaction_id: event.data.checkout.order.id,
    currency: event.data.checkout.currencyCode,
    value: event.data.checkout.subtotalPrice.amount,
    items: event.data.checkout.lineItems.map((item) => ({
      id: item.variant.product.id,
      google_business_vertical: "retail",
    })),
  };

  gtag("set", "user_data", enhancedConversionData);
  gtag("event", "conversion", checkoutData);
});
