'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function MSSteelWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Crect x='20' y='20' width='360' height='260' rx='5' fill='%23ffffff' stroke='%234b5563' stroke-width='3'/%3E%3Crect x='40' y='40' width='320' height='220' rx='3' fill='%23f3f4f6' stroke='%234b5563' stroke-width='2'/%3E%3Cline x1='40' y1='150' x2='360' y2='150' stroke='%234b5563' stroke-width='3'/%3E%3Cline x1='200' y1='40' x2='200' y2='260' stroke='%234b5563' stroke-width='3'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const products = [
    {
      id: 301,
      name: "Standard MS Steel Fixed Window",
      price: 299.99,
      description: "Robust mild steel fixed window frame with powder-coated finish, ideal for commercial and industrial applications.",
      features: [
        "Heavy-duty MS (Mild Steel) construction",
        "Powder-coated rust protection",
        "Fixed or openable configurations",
        "High load-bearing capacity",
        "Customizable sizes and designs"
      ],
      specifications: {
        material: "Mild Steel (MS) sections",
        frameThickness: "40mm x 40mm to 100mm x 50mm",
        glazing: "Single or double glazed",
        finish: "Powder coating in various colors",
        warranty: "5 years on coating, 3 years on hardware"
      }
    },
    {
      id: 302,
      name: "MS Steel Casement Window",
      price: 399.99,
      description: "Durable steel casement window with side-hung opening mechanism, perfect for factories, warehouses, and commercial buildings.",
      features: [
        "Side-opening casement design",
        "Heavy-duty hinges",
        "Secure locking mechanism",
        "Weather-resistant coating",
        "Low maintenance requirements"
      ],
      specifications: {
        material: "Structural MS steel profiles",
        frameThickness: "50mm x 50mm standard",
        glazing: "4mm-6mm toughened glass",
        finish: "Epoxy powder coating",
        warranty: "5 years comprehensive"
      }
    },
    {
      id: 303,
      name: "MS Steel Louver Window",
      price: 349.99,
      description: "Adjustable steel louver window providing controlled ventilation while maintaining security and weather protection.",
      features: [
        "Adjustable glass louvers",
        "Excellent ventilation control",
        "Rain protection when angled",
        "Easy-to-operate mechanism",
        "Suitable for bathrooms and service areas"
      ],
      specifications: {
        material: "MS steel frame with glass louvers",
        frameThickness: "40mm x 40mm",
        glazing: "6mm glass louver blades",
        finish: "Anti-corrosive coating",
        warranty: "5 years on frame and mechanism"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MS Steel Windows</h1>
            <p className="text-xl text-gray-300 mb-4">
              Discover the strength and durability of mild steel (MS) windows, engineered for demanding 
              applications in commercial, industrial, and residential settings. MS steel windows offer 
              exceptional structural integrity, security, and longevity at an economical price point.
            </p>
            <p className="text-lg text-gray-400">
              Perfect for factories, warehouses, commercial buildings, and homes where durability and 
              security are paramount. These windows are built to withstand harsh conditions and provide 
              decades of reliable service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose MS Steel Windows?</h2>
              <p className="text-gray-600 mb-4">
                Mild Steel (MS) windows are constructed from high-quality steel profiles that provide 
                superior strength compared to aluminum or UPVC alternatives. The inherent strength of 
                steel allows for slimmer frame profiles while maintaining structural integrity, resulting 
                in windows with larger glass areas and better views.
              </p>
              <p className="text-gray-600 mb-4">
                Our MS steel windows undergo a thorough surface treatment process including cleaning, 
                phosphating, and powder coating to ensure excellent corrosion resistance. The powder-coated 
                finish is available in a wide range of colors and provides a durable, attractive surface 
                that resists scratching, chipping, and fading.
              </p>
              <p className="text-gray-600">
                Steel windows are particularly well-suited for commercial and industrial applications where 
                high performance, security, and minimal maintenance are essential. They can accommodate 
                larger glass panes without additional support, making them ideal for buildings that require 
                maximum natural light.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Advantages</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Exceptional Strength:</strong>
                    <p className="text-gray-600">Superior load-bearing capacity and structural integrity for large openings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Enhanced Security:</strong>
                    <p className="text-gray-600">Robust construction provides excellent protection against forced entry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Cost-Effective:</strong>
                    <p className="text-gray-600">Economical solution without compromising on quality or durability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Longevity:</strong>
                    <p className="text-gray-600">Decades of service life with proper coating and minimal maintenance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Customizable:</strong>
                    <p className="text-gray-600">Flexible design options to meet specific architectural requirements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">MS Steel Window Products</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-gray-100 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/products/ms-steel-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-gray-700 mb-4">${product.price}</p>
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ideal Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Factories</h3>
                <p className="text-sm text-gray-600">Durable windows for industrial manufacturing facilities.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Commercial</h3>
                <p className="text-sm text-gray-600">Professional appearance for offices and retail spaces.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏚️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Warehouses</h3>
                <p className="text-sm text-gray-600">Robust solutions for storage and distribution centers.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Residential</h3>
                <p className="text-sm text-gray-600">Secure and economical for homes and apartments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Strong, Secure, and Built to Last</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a custom quote for MS steel windows tailored to your project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Request Project Quote
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
              View All Windows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
