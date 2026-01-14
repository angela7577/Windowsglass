'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function TrackOrderLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Track Your Order</h1>
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const tracking = searchParams.get('tracking');
    if (tracking) {
      setTrackingNumber(tracking);
      setSearched(true);
      handleTrackOrder(tracking);
    }
  }, [searchParams]);

  const handleTrackOrder = async (tracking?: string) => {
    const trackNum = tracking || trackingNumber;
    if (!trackNum.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call - in real app, this would fetch from backend
    setTimeout(() => {
      // Check if tracking number exists in localStorage
      const savedOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
      const order = savedOrders.find((o: any) => o.trackingNumber === trackNum);

      if (order) {
        setOrderData(order);
        setError('');
      } else {
        // Generate sample tracking data for demo
        const sampleStatuses = ['processing', 'shipped', 'in-transit', 'out-for-delivery', 'delivered'];
        const randomStatus = sampleStatuses[Math.floor(Math.random() * sampleStatuses.length)];
        
        setOrderData({
          trackingNumber: trackNum,
          orderNumber: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          status: randomStatus,
          orderDate: new Date().toISOString(),
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          currentLocation: 'Distribution Center, Los Angeles, CA',
          items: [
            {
              id: 1,
              name: 'Sample Window Product',
              quantity: 1,
              price: 299.99,
              image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23bae6fd'/%3E%3C/svg%3E"
            }
          ]
        });
        setError('');
      }
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    handleTrackOrder();
  };

  const getStatusDetails = (status: string) => {
    const statusMap: any = {
      'processing': {
        icon: '📦',
        title: 'Order Processing',
        description: 'Your order is being prepared for shipment',
        color: 'blue',
        progress: 20
      },
      'shipped': {
        icon: '🚚',
        title: 'Shipped',
        description: 'Your order has been shipped and is on its way',
        color: 'indigo',
        progress: 40
      },
      'in-transit': {
        icon: '🚛',
        title: 'In Transit',
        description: 'Your package is currently in transit',
        color: 'purple',
        progress: 60
      },
      'out-for-delivery': {
        icon: '📬',
        title: 'Out for Delivery',
        description: 'Your package is out for delivery today',
        color: 'orange',
        progress: 80
      },
      'delivered': {
        icon: '✅',
        title: 'Delivered',
        description: 'Your order has been delivered successfully',
        color: 'green',
        progress: 100
      }
    };
    return statusMap[status] || statusMap['processing'];
  };

  const statusDetails = orderData ? getStatusDetails(orderData.status) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Track Your Order</h1>

          {/* Tracking Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number (e.g., TRK123456789)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Tracking...' : 'Track Order'}
              </button>
            </form>
            {error && (
              <p className="mt-4 text-red-600 text-sm">{error}</p>
            )}
            <p className="mt-4 text-sm text-gray-600">
              Enter your tracking number to see the current status of your order. You can find this in your order confirmation email.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Fetching order details...</p>
            </div>
          )}

          {/* Order Tracking Results */}
          {!loading && orderData && (
            <>
              {/* Status Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{statusDetails.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{statusDetails.title}</h2>
                  <p className="text-gray-600 mb-4">{statusDetails.description}</p>
                  <div className="bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className={`bg-${statusDetails.color}-600 h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${statusDetails.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tracking Number: <span className="font-bold">{orderData.trackingNumber}</span>
                  </p>
                </div>

                {/* Timeline */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Tracking History</h3>
                  <div className="space-y-6">
                    {/* Timeline Item 1 */}
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                      </div>
                      <div className="pb-8">
                        <p className="font-semibold text-gray-800">Order Placed</p>
                        <p className="text-sm text-gray-600" suppressHydrationWarning>{new Date(orderData.orderDate).toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Your order has been received and confirmed</p>
                      </div>
                    </div>

                    {/* Timeline Item 2 */}
                    {['shipped', 'in-transit', 'out-for-delivery', 'delivered'].includes(orderData.status) && (
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                        </div>
                        <div className="pb-8">
                          <p className="font-semibold text-gray-800">Order Shipped</p>
                          <p className="text-sm text-gray-600" suppressHydrationWarning>{new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString()}</p>
                          <p className="text-sm text-gray-500">Package has left our warehouse</p>
                        </div>
                      </div>
                    )}

                    {/* Timeline Item 3 */}
                    {['in-transit', 'out-for-delivery', 'delivered'].includes(orderData.status) && (
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                        </div>
                        <div className="pb-8">
                          <p className="font-semibold text-gray-800">In Transit</p>
                          <p className="text-sm text-gray-600" suppressHydrationWarning>{new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString()}</p>
                          <p className="text-sm text-gray-500">Currently at: {orderData.currentLocation}</p>
                        </div>
                      </div>
                    )}

                    {/* Timeline Item 4 */}
                    {['out-for-delivery', 'delivered'].includes(orderData.status) && (
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className={`w-3 h-3 ${orderData.status === 'delivered' ? 'bg-green-600' : 'bg-blue-600'} rounded-full`}></div>
                          {orderData.status !== 'delivered' && <div className="w-0.5 h-full bg-gray-300 mt-2"></div>}
                        </div>
                        <div className="pb-8">
                          <p className="font-semibold text-gray-800">
                            {orderData.status === 'delivered' ? 'Delivered' : 'Out for Delivery'}
                          </p>
                          <p className="text-sm text-gray-600" suppressHydrationWarning>
                            {orderData.status === 'delivered' 
                              ? new Date().toLocaleString()
                              : 'Expected today'}
                          </p>
                          <p className="text-sm text-gray-500">
                            {orderData.status === 'delivered' 
                              ? 'Your package has been delivered successfully'
                              : 'Your package is out for delivery'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Estimated Delivery */}
                    {orderData.status !== 'delivered' && (
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Estimated Delivery</p>
                          <p className="text-sm text-gray-600" suppressHydrationWarning>{new Date(orderData.estimatedDelivery).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-500">Expected delivery date</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Items</h3>
                <div className="space-y-4">
                  {orderData.items && orderData.items.map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-4 py-3 border-b border-gray-100">
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
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

              {/* Help Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about your order or delivery, please contact our customer support team.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Contact Support
                  </Link>
                  <a
                    href="tel:+17606468282"
                    className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Call: +1 (760) 646-8282
                  </a>
                </div>
              </div>
            </>
          )}

          {/* No Results */}
          {!loading && !orderData && searched && trackingNumber && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📭</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Results Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any order with tracking number: <span className="font-bold">{trackingNumber}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Please check your tracking number and try again. Make sure you've entered the complete tracking number from your order confirmation email.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<TrackOrderLoading />}>
      <TrackOrderContent />
    </Suspense>
  );
}
