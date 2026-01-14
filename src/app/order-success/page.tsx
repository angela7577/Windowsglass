'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function OrderSuccessLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Get order data from sessionStorage
    const orderData = sessionStorage.getItem('lastOrder');
    if (orderData) {
      setOrderDetails(JSON.parse(orderData));
    } else {
      // If no order data, redirect to home
      router.push('/');
    }
  }, [router]);

  if (!orderDetails) {
    return <OrderSuccessLoading />;
  }

  const estimatedDelivery = new Date(orderDetails.estimatedDelivery || Date.now() + 7 * 24 * 60 * 60 * 1000);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your order. We've received your order and will start processing it shortly.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Your Order Number</p>
              <p className="text-3xl font-bold text-blue-600 mb-2">{orderDetails.orderNumber}</p>
              <p className="text-sm text-gray-600 mb-4">Tracking Number</p>
              <p className="text-2xl font-bold text-gray-800">{orderDetails.trackingNumber}</p>
            </div>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to <span className="font-semibold">{orderDetails.email}</span>
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Shipping Address</h3>
                <p className="text-gray-600">{orderDetails.firstName} {orderDetails.lastName}</p>
                <p className="text-gray-600">{orderDetails.address}</p>
                <p className="text-gray-600">{orderDetails.city}, {orderDetails.state} {orderDetails.zipCode}</p>
                <p className="text-gray-600 mt-2">Phone: {orderDetails.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Order Information</h3>
                <p className="text-gray-600" suppressHydrationWarning>Order Date: {new Date(orderDetails.orderDate).toLocaleDateString()}</p>
                <p className="text-gray-600">Payment Method: {orderDetails.paymentMethod}</p>
                <p className="text-gray-600">Status: <span className="text-green-600 font-semibold">Processing</span></p>
                <p className="text-gray-600 mt-2" suppressHydrationWarning>Estimated Delivery: {estimatedDelivery.toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Items Ordered</h3>
              <div className="space-y-4">
                {orderDetails.items.map((item: any) => (
                  <div key={item.id} className="flex items-center space-x-4 py-3 border-b border-gray-100">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium text-gray-900">${orderDetails.tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">What's Next?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Processing</h3>
                  <p className="text-sm text-gray-600">We'll prepare your items and get them ready for shipment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Shipping Updates</h3>
                  <p className="text-sm text-gray-600">Track your order status using the tracking number provided above.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Delivery</h3>
                  <p className="text-sm text-gray-600">Your order will be delivered within 5-7 business days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/track-order?tracking=${orderDetails.trackingNumber}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Track Your Order
            </Link>
            <Link
              href="/products"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Print Order
            </button>
          </div>

          {/* Customer Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need help with your order?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Contact Support
              </Link>
              <span className="text-gray-400">|</span>
              <a href="tel:+17606468282" className="text-blue-600 hover:text-blue-700 font-semibold">
                Call: +1 (760) 646-8282
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<OrderSuccessLoading />}>
      <OrderSuccessContent />
    </Suspense>
  );
}
