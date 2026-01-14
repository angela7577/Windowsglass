'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function SteelWindowsPage() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

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
  // Sample Steel product data
  const steelProducts = [
    {
      id: 1,
      name: "MS Steel Window",
      price: 299.99,
      description: "Heavy-duty steel construction for maximum strength and security in industrial applications.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='stg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e2e8f0' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%2394a3b8' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='stf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2364748b'/%3E%3Cstop offset='100%25' stop-color='%23475569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='25' y='20' width='250' height='160' fill='url(%23stf)' rx='3'/%3E%3Crect x='35' y='30' width='230' height='140' fill='%23cbd5e1' rx='2'/%3E%3Crect x='42' y='37' width='108' height='126' fill='url(%23stg)' stroke='%23475569' stroke-width='4' rx='1'/%3E%3Crect x='150' y='37' width='108' height='126' fill='url(%23stg)' stroke='%23475569' stroke-width='4' rx='1'/%3E%3Crect x='50' y='45' width='25' height='50' fill='%23fff' opacity='0.25' rx='1'/%3E%3Crect x='158' y='45' width='25' height='50' fill='%23fff' opacity='0.25' rx='1'/%3E%3Ccircle cx='40' cy='35' r='3' fill='%231e293b'/%3E%3Ccircle cx='260' cy='35' r='3' fill='%231e293b'/%3E%3Ccircle cx='40' cy='165' r='3' fill='%231e293b'/%3E%3Ccircle cx='260' cy='165' r='3' fill='%231e293b'/%3E%3Crect x='42' y='97' width='216' height='6' fill='%23475569'/%3E%3Cline x1='42' y1='100' x2='258' y2='100' stroke='%2364748b' stroke-width='1'/%3E%3Crect x='147' y='37' width='6' height='126' fill='%23475569'/%3E%3Cline x1='150' y1='37' x2='150' y2='163' stroke='%2364748b' stroke-width='1'/%3E%3C/svg%3E",
      features: ["High Strength", "Security", "Fire Resistance", "Durability"],
      specs: {
        material: "Mild Steel",
        frame_thickness: "2mm",
        glass_type: "Tempered",
        warranty: "10 years"
      }
    },
    {
      id: 2,
      name: "Industrial Steel Window",
      price: 449.99,
      description: "Designed for demanding environments with enhanced structural integrity and security.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='ig' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f1f5f9' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%23cbd5e1' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='if' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23374151'/%3E%3Cstop offset='100%25' stop-color='%231f2937'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='20' y='15' width='260' height='170' fill='url(%23if)' rx='2'/%3E%3Crect x='28' y='23' width='244' height='154' fill='%234b5563' rx='1'/%3E%3Crect x='35' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='107' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='179' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='43' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Crect x='115' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Crect x='187' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Ccircle cx='35' cy='30' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='251' cy='30' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='35' cy='170' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='251' cy='170' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Crect x='35' y='65' width='216' height='4' fill='%231f2937'/%3E%3Crect x='35' y='130' width='216' height='4' fill='%231f2937'/%3E%3Crect x='25' y='180' width='250' height='3' fill='%23fbbf24' opacity='0.7'/%3E%3C/svg%3E",
      features: ["Extreme Durability", "Security", "Weather Resistant", "Maintenance Free"],
      specs: {
        material: "Structural Steel",
        frame_thickness: "3mm",
        glass_type: "Laminated",
        warranty: "15 years"
      }
    },
    {
      id: 3,
      name: "Designer Steel Frame Window",
      price: 599.99,
      description: "Architecturally elegant steel frames with slim profiles and contemporary aesthetics.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='desg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fef3c7' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fcd34d' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='desf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2318181b'/%3E%3Cstop offset='100%25' stop-color='%2309090b'/%3E%3C/linearGradient%3E%3ClinearGradient id='gold' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='50%25' stop-color='%23fbbf24'/%3E%3Cstop offset='100%25' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='35' y='25' width='230' height='150' fill='url(%23desf)' rx='8'/%3E%3Crect x='40' y='30' width='220' height='140' fill='%23fefce8' rx='6'/%3E%3Crect x='47' y='37' width='100' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='147' y='37' width='100' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='47' y='100' width='200' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='54' y='44' width='28' height='40' fill='%23fff' opacity='0.4' rx='2'/%3E%3Crect x='154' y='44' width='28' height='40' fill='%23fff' opacity='0.4' rx='2'/%3E%3Crect x='60' y='110' width='35' height='35' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='40' y='29' width='220' height='2' fill='url(%23gold)'/%3E%3Crect x='40' y='169' width='220' height='2' fill='url(%23gold)'/%3E%3Crect x='235' y='95' width='3' height='30' fill='%23f59e0b' rx='1.5'/%3E%3Ccircle cx='236.5' cy='110' r='5' fill='%23fbbf24' opacity='0.8'/%3E%3Ccircle cx='70' cy='55' r='10' fill='none' stroke='%23f59e0b' stroke-width='1.5' opacity='0.3'/%3E%3Cpath d='M 65 55 L 75 55' stroke='%23f59e0b' stroke-width='1.5' opacity='0.3'/%3E%3C/svg%3E",
      features: ["Slim Profile", "Architectural Design", "Strength", "Customizable"],
      specs: {
        material: "Premium Steel",
        frame_thickness: "1.5mm",
        glass_type: "Double Glazed",
        warranty: "12 years"
      }
    }
  ];

  // Subcategories for Steel windows
  const subcategories = [
    { id: 'ms', name: 'MS Steel Windows', count: 18 },
    { id: 'industrial', name: 'Industrial Steel Windows', count: 12 },
    { id: 'designer', name: 'Designer Steel Frame Windows', count: 9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Steel Windows Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our robust steel window solutions engineered for maximum security, 
            durability, and structural integrity. Ideal for commercial, industrial, 
            and high-security residential applications.
          </p>
        </div>

        {/* Subcategories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Steel Window Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map(subcat => (
              <div key={subcat.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{subcat.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subcat.count} products available</p>
                <a href={`/products/steel/${subcat.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                  Browse collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Steel Windows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {steelProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48 bg-blue-50 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium">Steel Windows</div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Features:</h4>
                    <ul className="text-xs text-gray-600">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-blue-700">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedProducts[product.id]}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors disabled:bg-green-700 flex items-center justify-center"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of Steel Windows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Unmatched Security</h3>
              <p className="text-gray-600 text-sm">Superior resistance to forced entry compared to other materials.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 01-2-2v-6a2 2 0 012-2H6a2 2 0 01-2 2v6a2 2 0 012 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Superior Strength</h3>
              <p className="text-gray-600 text-sm">Highest structural integrity among window frame materials.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fire Resistance</h3>
              <p className="text-gray-600 text-sm">Excellent fire-resistant properties for safety applications.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Longevity</h3>
              <p className="text-gray-600 text-sm">Exceptional lifespan with minimal maintenance requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}