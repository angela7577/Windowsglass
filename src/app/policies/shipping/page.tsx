export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 13, 2026</p>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Thank you for shopping at WindowGlassWorks.com. We are committed to delivering your orders safely and 
              efficiently. Please read our Shipping Policy carefully to understand how your orders are processed, 
              shipped, and delivered.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Processing Time</h2>
            <p className="text-gray-700 mb-6">
              Orders are typically processed within 1-3 business days of placement. Processing time begins once your 
              payment has been authorized and verified. During peak seasons, holidays, or promotional periods, 
              processing time may be extended. You will receive an email notification once your order has been shipped.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Shipping Methods</h2>
            <p className="text-gray-700 mb-4">
              We offer several shipping options to meet your needs:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping:</strong> 5-7 business days, FREE for orders over $200</li>
              <li><strong>Express Shipping:</strong> 2-3 business days, $24.99 flat rate</li>
              <li><strong>Overnight Shipping:</strong> Next business day, $49.99 flat rate</li>
              <li><strong>White Glove Delivery:</strong> Curbside delivery with professional installation scheduling, 
                available for large window orders</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Shipping Restrictions</h2>
            <p className="text-gray-700 mb-4">
              We currently ship to addresses in the United States only. Unfortunately, we do not ship to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>PO Boxes (except for small accessories)</li>
              <li>International addresses</li>
              <li>US territories and military addresses (APO/FPO/DPO)</li>
              <li>Remote locations that our shipping carriers cannot reach</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Shipping Costs</h2>
            <p className="text-gray-700 mb-4">
              Shipping costs are calculated based on the weight, size of your order, and destination. Costs are 
              displayed during checkout before you confirm your purchase. Free shipping applies to standard shipping 
              only and excludes express and overnight options.
            </p>
            <p className="text-gray-700 mb-6">
              White Glove Delivery includes professional handling of large or fragile items and may include 
              additional fees based on your location and the complexity of the delivery.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Delivery Timeframes</h2>
            <p className="text-gray-700 mb-4">
              Estimated delivery times are as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Standard Shipping: 5-7 business days from date of shipment</li>
              <li>Express Shipping: 2-3 business days from date of shipment</li>
              <li>Overnight Shipping: Next business day from date of shipment</li>
              <li>White Glove Delivery: 5-10 business days from date of shipment</li>
            </ul>
            <p className="text-gray-700 mb-6">
              These timeframes are estimates and not guaranteed. Factors such as weather, carrier delays, and 
              remote destinations may affect delivery times.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tracking Your Order</h2>
            <p className="text-gray-700 mb-6">
              Once your order has shipped, you will receive an email with tracking information. You can also 
              track your order by logging into your account on our website. Tracking information typically becomes 
              available within 24 hours of shipment.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Delivery Information</h2>
            <p className="text-gray-700 mb-4">
              Please ensure that your shipping address is complete and accurate. Deliveries require a signature 
              for orders over $200. If you will not be available to receive your delivery, please provide 
              specific delivery instructions or consider having your order shipped to a location where someone 
              will be available.
            </p>
            <p className="text-gray-700 mb-6">
              For White Glove Delivery, our team will contact you to schedule a convenient delivery time. 
              Please ensure someone 18 years or older is available to receive and inspect the delivery.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Shipping Damaged Items</h2>
            <p className="text-gray-700 mb-6">
              If your order arrives damaged, please contact us immediately within 48 hours of delivery. 
              Do not dispose of the packaging as it may be needed for insurance claims. We will work with 
              you to resolve the issue, which may include sending a replacement or processing a refund.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Backorders</h2>
            <p className="text-gray-700 mb-6">
              Occasionally, items may be out of stock at the time of your order. If this occurs, we will 
              notify you via email with an estimated ship date. You may cancel the backordered item(s) at 
              any time before shipping for a full refund.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">International Shipping</h2>
            <p className="text-gray-700 mb-6">
              At this time, we do not offer international shipping. We only ship to addresses within the 
              United States. We apologize for any inconvenience this may cause.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about our Shipping Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-4">
              <li>By email: shipping@windowglassworks.com</li>
              <li>By phone: +1 (760) 646-8282</li>
              <li>By visiting this page on our website: https://www.windowglassworks.com/policies/shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}