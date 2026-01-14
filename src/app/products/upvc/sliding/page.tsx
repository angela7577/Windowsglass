'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function SlidingUPVCWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});
  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='360' height='260' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='40' y='40' width='150' height='220' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='210' y='40' width='150' height='220' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Cline x1='195' y1='40' x2='195' y2='260' stroke='%233b82f6' stroke-width='2'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const products = [
    {
      id: 201,
      name: "Premium Sliding UPVC Window - 2 Track",
      price: 249.99,
      description: "Space-saving design with smooth sliding mechanism, perfect for balconies and modern homes.",
      features: [
        "2-track sliding system",
        "Multi-point locking system",
        "Weather-resistant seals",
        "Low maintenance UPVC frame",
        "Energy efficient glass"
      ],
      specifications: {
        material: "UPVC (Unplasticized Polyvinyl Chloride)",
        frameThickness: "60mm",
        glazing: "Single/Double glazed options",
        colorOptions: "White, Woodgrain, Custom colors",
        warranty: "10 years on frame, 5 years on hardware"
      }
    },
    {
      id: 202,
      name: "Deluxe Sliding UPVC Window - 3 Track",
      price: 349.99,
      description: "Premium 3-track sliding system for maximum ventilation and flexibility in opening configurations.",
      features: [
        "3-track sliding system",
        "Enhanced ventilation options",
        "Reinforced frame design",
        "Superior weather protection",
        "Mosquito mesh compatible"
      ],
      specifications: {
        material: "UPVC with steel reinforcement",
        frameThickness: "70mm",
        glazing: "Double glazed standard",
        colorOptions: "White, Grey, Wood finishes",
        warranty: "12 years on frame, 7 years on hardware"
      }
    },
    {
      id: 203,
      name: "Slim Profile Sliding UPVC Window",
      price: 299.99,
      description: "Modern slim-line design maximizing glass area while maintaining structural integrity.",
      features: [
        "Slim profile design",
        "Maximum natural light",
        "Smooth gliding operation",
        "Easy to clean",
        "Contemporary aesthetics"
      ],
      specifications: {
        material: "High-grade UPVC",
        frameThickness: "55mm",
        glazing: "Double glazed low-E glass",
        colorOptions: "White, Black, Anthracite",
        warranty: "10 years comprehensive"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sliding UPVC Windows</h1>
            <p className="text-xl text-blue-100 mb-4">
              Experience the perfect blend of functionality and style with our premium sliding UPVC windows. 
              Designed for modern homes, these windows offer space-saving operation, excellent ventilation, 
              and superior energy efficiency.
            </p>
            <p className="text-lg text-blue-200">
              Ideal for balconies, bedrooms, living rooms, and any space where you want to maximize your view 
              while maintaining easy operation and minimal maintenance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What are Sliding UPVC Windows?</h2>
              <p className="text-gray-600 mb-4">
                Sliding UPVC windows are horizontally operating windows that glide smoothly on tracks. 
                Unlike traditional windows that open outward or inward, sliding windows move parallel to 
                the wall, making them perfect for spaces with limited room or where you want to maintain 
                an unobstructed exterior.
              </p>
              <p className="text-gray-600 mb-4">
                UPVC (Unplasticized Polyvinyl Chloride) is a durable, weather-resistant material that 
                doesn't require painting or staining. It provides excellent insulation properties, helping 
                to keep your home comfortable year-round while reducing energy costs.
              </p>
              <p className="text-gray-600">
                Our sliding UPVC windows feature multi-chamber profiles that enhance thermal efficiency, 
                advanced locking systems for security, and precision-engineered tracks for smooth, 
                quiet operation that lasts for years.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Space Saving:</strong>
                    <p className="text-gray-600">No outward or inward swing required, perfect for balconies and tight spaces.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Energy Efficient:</strong>
                    <p className="text-gray-600">Multi-chamber design and weather seals reduce heat transfer and air leakage.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Low Maintenance:</strong>
                    <p className="text-gray-600">UPVC never needs painting and cleans easily with soap and water.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Weather Resistant:</strong>
                    <p className="text-gray-600">Excellent protection against rain, wind, and UV radiation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Secure:</strong>
                    <p className="text-gray-600">Multi-point locking systems provide enhanced security for your home.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Sliding UPVC Window Collection</h2>
          
          <div className="space-y-12">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-blue-50 overflow-hidden rounded-lg">
                    <Image
                      src="/images/products/sliding-upvc-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Fallback SVG if image fails to load */}
                    {false && <svg viewBox="0 0 400 300" className="w-full h-full" style={{ maxWidth: '400px' }}>
                      {/* Background */}
                      <defs>
                        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6"/>
                        </linearGradient>
                        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#60a5fa"/>
                          <stop offset="100%" stopColor="#2563eb"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Outer frame */}
                      <rect x="30" y="40" width="340" height="220" fill="url(#frameGrad)" rx="8"/>
                      <rect x="40" y="50" width="320" height="200" fill="#f0f9ff" rx="5"/>
                      
                      {/* Left sliding panel */}
                      <rect x="50" y="60" width="150" height="180" fill="url(#glassGrad)" stroke="#3b82f6" strokeWidth="3" rx="3"/>
                      {/* Glass reflection */}
                      <rect x="55" y="65" width="30" height="80" fill="#fff" opacity="0.3" rx="2"/>
                      <rect x="55" y="150" width="40" height="30" fill="#fff" opacity="0.2" rx="2"/>
                      
                      {/* Right sliding panel */}
                      <rect x="200" y="60" width="150" height="180" fill="url(#glassGrad)" stroke="#3b82f6" strokeWidth="3" rx="3"/>
                      {/* Glass reflection */}
                      <rect x="205" y="65" width="30" height="80" fill="#fff" opacity="0.3" rx="2"/>
                      <rect x="305" y="150" width="40" height="30" fill="#fff" opacity="0.2" rx="2"/>
                      
                      {/* Center track/overlap indicator */}
                      <line x1="200" y1="60" x2="200" y2="240" stroke="#1e40af" strokeWidth="2" opacity="0.5"/>
                      
                      {/* Handles */}
                      <rect x="185" y="145" width="8" height="30" fill="#1e3a8a" rx="2"/>
                      <rect x="337" y="145" width="8" height="30" fill="#1e3a8a" rx="2"/>
                      
                      {/* Bottom track */}
                      <rect x="40" y="245" width="320" height="10" fill="#94a3b8" rx="2"/>
                      <rect x="45" y="248" width="310" height="4" fill="#cbd5e1" rx="1"/>
                    </svg>}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Specifications:</h4>
                      <dl className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key}>
                            <dt className="font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</dt>
                            <dd className="text-gray-600">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedProducts[product.id]}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-green-700 flex items-center justify-center"
                      >
                        {addedProducts[product.id] ? (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added to Cart!
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                          </>
                        )}
                      </button>
                      <Link href="/contact" className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors text-center">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Maintenance Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Installation & Maintenance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Installation</h3>
                <p className="text-gray-600 mb-4">
                  Our certified installation team ensures your sliding UPVC windows are fitted perfectly for 
                  optimal performance and longevity. The installation process includes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Precise measurements and site survey</li>
                  <li>• Removal of old windows (if applicable)</li>
                  <li>• Professional fitting and sealing</li>
                  <li>• Hardware adjustment and testing</li>
                  <li>• Complete cleanup and debris removal</li>
                  <li>• Final inspection and warranty documentation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Keep your sliding UPVC windows looking and performing like new with minimal effort:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clean frames with mild soap and water</li>
                  <li>• Wipe glass with standard glass cleaner</li>
                  <li>• Vacuum tracks to remove dust and debris</li>
                  <li>• Lubricate tracks annually for smooth operation</li>
                  <li>• Check weather seals periodically</li>
                  <li>• Professional servicing every 2-3 years recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Windows?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom quote on sliding UPVC windows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Quote
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
