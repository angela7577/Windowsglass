'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CasementUPVCWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23c7d2fe'/%3E%3Crect x='20' y='20' width='360' height='260' rx='5' fill='%23ffffff' stroke='%236366f1' stroke-width='2'/%3E%3Crect x='40' y='40' width='160' height='220' rx='3' fill='%23e0e7ff' stroke='%236366f1' stroke-width='1'/%3E%3Ccircle cx='190' cy='150' r='8' fill='%236366f1'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const products = [
    {
      id: 204,
      name: "Single Casement UPVC Window",
      price: 199.99,
      description: "Classic single-sash casement window with side hinges, offering excellent ventilation and unobstructed views.",
      features: [
        "Side-hung opening mechanism",
        "Multi-point espagnolette locking",
        "90-degree opening capability",
        "Integrated drainage system",
        "Easy cleaning from inside"
      ],
      specifications: {
        material: "Multi-chamber UPVC profile",
        frameThickness: "60mm",
        glazing: "Double glazed with argon gas",
        colorOptions: "White, Cream, Wood grain finishes",
        warranty: "10 years frame, 5 years hardware"
      }
    },
    {
      id: 205,
      name: "French Casement UPVC Window",
      price: 379.99,
      description: "Elegant French-style casement with two opening sashes and no central mullion for maximum opening and uninterrupted views.",
      features: [
        "Double sash opening",
        "No central post for clear opening",
        "Cremone bolt locking system",
        "Enhanced ventilation",
        "Traditional aesthetic appeal"
      ],
      specifications: {
        material: "Reinforced UPVC with steel core",
        frameThickness: "70mm",
        glazing: "Triple glazed low-E glass option",
        colorOptions: "White, Anthracite Grey, Custom RAL",
        warranty: "12 years comprehensive"
      }
    },
    {
      id: 206,
      name: "Top-Hung Casement UPVC Window",
      price: 229.99,
      description: "Top-hinged casement window that opens outward from the top, ideal for bathrooms and areas requiring privacy with ventilation.",
      features: [
        "Top-hung opening design",
        "Rain protection when open",
        "Friction stay hinges",
        "Safety restrictors included",
        "Privacy-friendly operation"
      ],
      specifications: {
        material: "Weather-resistant UPVC",
        frameThickness: "60mm",
        glazing: "Obscure/frosted glass available",
        colorOptions: "White, Grey, Woodgrain",
        warranty: "10 years on all components"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Casement UPVC Windows</h1>
            <p className="text-xl text-indigo-100 mb-4">
              Discover the timeless elegance and superior functionality of our casement UPVC windows. 
              With side, top, or bottom hinges, these windows offer exceptional ventilation control, 
              security, and energy efficiency for any architectural style.
            </p>
            <p className="text-lg text-indigo-200">
              Perfect for traditional and contemporary homes alike, casement windows provide excellent 
              weather resistance, easy operation, and the flexibility to complement any design aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Casement UPVC Windows</h2>
              <p className="text-gray-600 mb-4">
                Casement windows are hinged at the side, top, or bottom and swing open like a door. 
                This classic design has been used for centuries and remains one of the most popular 
                window styles worldwide due to its versatility and performance.
              </p>
              <p className="text-gray-600 mb-4">
                Our UPVC casement windows combine traditional aesthetics with modern materials and 
                technology. The UPVC frames provide excellent insulation, require virtually no 
                maintenance, and will never rot, warp, or fade. Advanced weather seals ensure your 
                home stays comfortable in all seasons.
              </p>
              <p className="text-gray-600">
                The hinged design allows the entire window area to open, providing maximum ventilation 
                when needed. Multi-point locking mechanisms secure the window at multiple points along 
                the frame, offering superior security compared to many other window styles.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Advantages</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Maximum Ventilation:</strong>
                    <p className="text-gray-600">Opens fully to allow complete airflow through the entire window area.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Enhanced Security:</strong>
                    <p className="text-gray-600">Multi-point locking systems provide superior protection against intrusion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Easy Cleaning:</strong>
                    <p className="text-gray-600">Both sides of the glass can be cleaned from inside your home.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Excellent Seal:</strong>
                    <p className="text-gray-600">When closed, the sash presses against the frame creating an airtight seal.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Timeless Design:</strong>
                    <p className="text-gray-600">Suits both traditional and modern architectural styles beautifully.</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Casement UPVC Window Range</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-indigo-50 overflow-hidden rounded-lg">
                    <Image
                      src="/images/products/casement-upvc-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {false && <svg viewBox="0 0 400 300" className="w-full h-full" style={{ maxWidth: '400px' }}>
                      <defs>
                        <linearGradient id="casementGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.7"/>
                        </linearGradient>
                        <linearGradient id="casementFrame" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#818cf8"/>
                          <stop offset="100%" stopColor="#6366f1"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Main frame */}
                      <rect x="40" y="40" width="320" height="220" fill="url(#casementFrame)" rx="8"/>
                      <rect x="50" y="50" width="300" height="200" fill="#f5f3ff" rx="5"/>
                      
                      {/* Window sash (hinged on left) */}
                      <rect x="60" y="60" width="270" height="180" fill="url(#casementGlass)" stroke="#6366f1" strokeWidth="4" rx="3"/>
                      
                      {/* Glass reflections */}
                      <rect x="70" y="70" width="40" height="90" fill="#fff" opacity="0.4" rx="2"/>
                      <rect x="120" y="160" width="50" height="40" fill="#fff" opacity="0.25" rx="2"/>
                      <rect x="250" y="80" width="30" height="60" fill="#fff" opacity="0.3" rx="2"/>
                      
                      {/* Hinge indication (left side) */}
                      <rect x="58" y="100" width="6" height="20" fill="#4338ca" rx="2"/>
                      <rect x="58" y="140" width="6" height="20" fill="#4338ca" rx="2"/>
                      <rect x="58" y="180" width="6" height="20" fill="#4338ca" rx="2"/>
                      
                      {/* Handle (right side) */}
                      <circle cx="315" cy="150" r="12" fill="#312e81"/>
                      <rect x="305" y="145" width="25" height="10" fill="#312e81" rx="2"/>
                      
                      {/* Opening arc indicator */}
                      <path d="M 320 150 Q 360 120 370 100" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5"/>
                    </svg>}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-indigo-700 mb-4">${product.price}</p>
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

      {/* Application Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ideal Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Living Rooms</h3>
                <p className="text-gray-600">
                  Perfect for living spaces where you want maximum natural light and easy ventilation control.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🛏️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Bedrooms</h3>
                <p className="text-gray-600">
                  Excellent choice for bedrooms with secure locking and easy operation for fresh air circulation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Kitchens</h3>
                <p className="text-gray-600">
                  Ideal for kitchens where ventilation is important and easy cleaning access is valuable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Home with Casement Windows</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get professional advice and a custom quote for your project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Now
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-700 transition-colors">
              View All Windows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
