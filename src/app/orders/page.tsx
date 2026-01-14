'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from localStorage
    const userOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    setOrders(userOrders.reverse()); // Show newest first
    setLoading(false);
  }, []);

  const getStatusColor = (status: string) => {
    const colors: any = {
      'processing': 'bg-blue-100 text-blue-800',
      'shipped': 'bg-indigo-100 text-indigo-800',
      'in-transit': 'bg-purple-100 text-purple-800',
      'out-for-delivery': 'bg-orange-100 text-orange-800',
      'delivered': 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const statusText: any = {
      'processing': 'Processing',
      'shipped': 'Shipped',
      'in-transit': 'In Transit',
      'out-for-delivery': 'Out for Delivery',
      'delivered': 'Delivered'
    };
    return statusText[status] || 'Processing';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Orders</h1>

          {orders.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
              <p className="text-gray-600 mb-8">You haven't placed any orders yet. Start shopping to see your orders here!</p>
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.orderNumber} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Order Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Order Number</p>
                        <p className="text-lg font-bold text-gray-800">{order.orderNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Order Date</p>
                        <p className="font-semibold text-gray-800">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total</p>
                        <p className="font-semibold text-gray-800">${order.total.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Shipping Info */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Shipping Address</h3>
                        <p className="text-gray-600">{order.firstName} {order.lastName}</p>
                        <p className="text-gray-600">{order.address}</p>
                        <p className="text-gray-600">{order.city}, {order.state} {order.zipCode}</p>
                        <p className="text-gray-600 mt-2">Phone: {order.phone}</p>
                      </div>

                      {/* Tracking Info */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Tracking Information</h3>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
                          <p className="text-lg font-bold text-blue-600 mb-3">{order.trackingNumber}</p>
                          <Link
                            href={`/track-order?tracking=${order.trackingNumber}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Track This Order
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-600">Payment Method</p>
                          <p className="font-semibold text-gray-800">{order.paymentMethod}</p>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">Items Ordered</h3>
                      <div className="space-y-4">
                        {order.items.map((item: any) => (
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
                              <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                            </div>
                            <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
                      <Link
                        href={`/track-order?tracking=${order.trackingNumber}`}
                        className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-center"
                      >
                        Track Order
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 md:flex-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors text-center"
                      >
                        Contact Support
                      </Link>
                      <button
                        onClick={() => {
                          // Create order summary for success page
                          sessionStorage.setItem('lastOrder', JSON.stringify(order));
                          window.open('/order-success', '_blank');
                        }}
                        className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold py-2 px-6 rounded-lg transition-colors"
                      >
                        View Receipt
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Help Section */}
          {orders.length > 0 && (
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about your orders, please don't hesitate to contact our support team.
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
          )}
        </div>
      </div>
    </div>
  );
}
