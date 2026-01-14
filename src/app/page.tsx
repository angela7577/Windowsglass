'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: string]: boolean }>({});

  const featuredProducts = [
    { id: 1, name: 'Sliding UPVC Windows', price: 249.99, link: '/products/upvc/sliding', image: "/images/products/sliding-upvc-window.webp", description: 'Space-saving design perfect for balconies and modern homes.' },
    { id: 2, name: 'Casement UPVC Windows', price: 199.99, link: '/products/upvc/casement', image: "/images/products/casement-upvc-window.webp", description: 'Classic design with excellent ventilation and security.' },
    { id: 3, name: 'MS Steel Windows', price: 299.99, link: '/products/steel/ms', image: "/images/products/ms-steel-window.webp", description: 'Robust construction ideal for industrial and commercial applications.' },
    { id: 4, name: 'Double-Glazed Windows', price: 349.99, link: '/products/upvc/double-glazed', image: "/images/products/double-glazed-upvc-window.webp", description: 'Superior insulation for noise reduction and energy efficiency.' },
  ];

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100%22 height=\"100%22 xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"dots\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23ffffff\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%22 height=\"100%22 fill=\"url(%23dots)%22/%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Quality Windows for Your Home & Business</h1>
              <p className="text-xl mb-8 text-blue-100">Expertly crafted windows designed for durability, energy efficiency, and style. Professional installation and repair services available.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/products" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Shop Windows</a>
                <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors">Request Quote</a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-lg w-full shadow-2xl">
                <svg viewBox="0 0 500 380" className="w-full h-full">
                  <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e0f2fe" />
                      <stop offset="100%" stopColor="#bae6fd" />
                    </linearGradient>
                    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                  </defs>
                  
                  {/* Sky background */}
                  <rect width="500" height="380" fill="url(#skyGrad)" />
                  
                  {/* Modern building facade */}
                  <rect x="50" y="50" width="400" height="300" fill="url(#buildingGrad)" rx="8" />
                  
                  {/* Grid of professional windows - 4 rows x 5 columns */}
                  {/* Row 1 */}
                  <rect x="70" y="70" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="75" y="75" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="155" y="70" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="160" y="75" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="240" y="70" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="245" y="75" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="325" y="70" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="330" y="75" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  {/* Row 2 */}
                  <rect x="70" y="145" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="75" y="150" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="155" y="145" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="160" y="150" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="240" y="145" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="245" y="150" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="325" y="145" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="330" y="150" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  {/* Row 3 */}
                  <rect x="70" y="220" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="75" y="225" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="155" y="220" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="160" y="225" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="240" y="220" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="245" y="225" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="325" y="220" width="70" height="60" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="330" y="225" width="20" height="25" fill="#fff" opacity="0.4" rx="1" />
                  
                  {/* Row 4 - Ground floor with larger windows */}
                  <rect x="70" y="295" width="150" height="40" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="75" y="300" width="30" height="20" fill="#fff" opacity="0.4" rx="1" />
                  
                  <rect x="245" y="295" width="150" height="40" fill="url(#glassGrad)" stroke="#2563eb" strokeWidth="3" rx="3" />
                  <rect x="250" y="300" width="30" height="20" fill="#fff" opacity="0.4" rx="1" />
                  
                  {/* Building details - horizontal lines */}
                  <line x1="50" y1="140" x2="450" y2="140" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                  <line x1="50" y1="215" x2="450" y2="215" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                  <line x1="50" y1="290" x2="450" y2="290" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                  
                  {/* Architectural details */}
                  <rect x="45" y="45" width="410" height="8" fill="#2563eb" opacity="0.3" rx="2" />
                  <rect x="45" y="342" width="410" height="8" fill="#2563eb" opacity="0.3" rx="2" />
                  
                  {/* Quality badge/seal */}
                  <circle cx="420" cy="320" r="25" fill="#fbbf24" opacity="0.9" />
                  <path d="M 420 305 L 425 315 L 435 315 L 427 322 L 430 332 L 420 325 L 410 332 L 413 322 L 405 315 L 415 315 Z" fill="#fff" />
                  <text x="420" y="340" fontSize="10" fontWeight="bold" fill="#1e40af" textAnchor="middle">PREMIUM</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Windows?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer superior quality, energy efficiency, and durability in every window we manufacture and install.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Efficient</h3>
              <p className="text-gray-600">Our windows are designed to reduce heating and cooling costs with superior insulation properties.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure & Durable</h3>
              <p className="text-gray-600">Built with high-grade materials to withstand harsh weather conditions and enhance home security.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Designs</h3>
              <p className="text-gray-600">Tailored solutions to match your architectural style and personal preferences perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Window Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our trending window categories designed for modern homes and businesses. Find the perfect style for your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UPVC Windows Category */}
            <Link href="/products/upvc" className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">UPVC Windows</h3>
                <p className="text-blue-100 text-sm mb-4">Energy efficient and low maintenance windows perfect for modern homes.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">Explore UPVC</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                TRENDING
              </div>
            </Link>

            {/* Steel Windows Category */}
            <Link href="/products/steel" className="group relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Steel Windows</h3>
                <p className="text-gray-300 text-sm mb-4">Robust and secure windows ideal for industrial and commercial use.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">Explore Steel</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
            </Link>

            {/* Micro Windows Category */}
            <Link href="/products/micro" className="group relative bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Micro Windows</h3>
                <p className="text-cyan-100 text-sm mb-4">Compact windows for bathrooms, basements, and small spaces.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">View Micro</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                SPECIALTY
              </div>
            </Link>

            {/* Soft Windows Category */}
            <Link href="/products/soft" className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Soft Windows</h3>
                <p className="text-teal-100 text-sm mb-4">Flexible vinyl solutions for patios, boats, and outdoor enclosures.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">View Soft</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                INNOVATIVE
              </div>
            </Link>

            {/* Sliding Windows Category */}
            <Link href="/products/upvc/sliding" className="group relative bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sliding Windows</h3>
                <p className="text-indigo-100 text-sm mb-4">Space-saving design perfect for balconies and compact spaces.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">View Sliding</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                BEST SELLER
              </div>
            </Link>

            {/* Casement Windows Category */}
            <Link href="/products/upvc/casement" className="group relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-white">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Casement Windows</h3>
                <p className="text-emerald-100 text-sm mb-4">Classic design with excellent ventilation and security features.</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">View Casement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                CLASSIC
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Window Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular window solutions designed for various applications and architectural styles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48 bg-blue-100 overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700 font-bold text-xl">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedProducts[product.id]}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors disabled:bg-green-700 flex items-center justify-center"
                      >
                        {addedProducts[product.id] ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                          </>
                        )}
                      </button>
                      <Link
                        href={product.link}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/products" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">View All Products</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We take pride in delivering exceptional service and quality products to our valued customers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The windows installed by WindowGlassWorks transformed our home. The quality is exceptional and the installation team was professional and efficient."</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  RJ
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"As a contractor, I've worked with many suppliers. WindowGlassWorks stands out for their quality products and reliable service. Highly recommended."</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  MT
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Michael Torres</h4>
                  <p className="text-gray-600 text-sm">Contractor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"Their customer service is outstanding. They helped us choose the perfect windows for our office building and delivered on time."</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  SW
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sarah Williams</h4>
                  <p className="text-gray-600 text-sm">Office Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Windows?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Contact us today for a free consultation and quote on your window installation project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17606468282" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +17606468282
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
