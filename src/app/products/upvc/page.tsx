'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function UPVCWindowsPage() {
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
  // Sample UPVC product data
  const upvcProducts = [
    {
      id: 1,
      name: "Premium Sliding UPVC Window",
      price: 249.99,
      description: "Space-saving sliding window with superior sealing technology and energy efficiency.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%2393c5fd' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2360a5fa'/%3E%3Cstop offset='100%25' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='20' y='25' width='260' height='150' fill='url(%23sf)' rx='6'/%3E%3Crect x='28' y='33' width='244' height='134' fill='%23f0f9ff' rx='4'/%3E%3Crect x='35' y='40' width='115' height='120' fill='url(%23sg)' stroke='%233b82f6' stroke-width='2.5' rx='2'/%3E%3Crect x='40' y='45' width='22' height='55' fill='%23fff' opacity='0.3' rx='1'/%3E%3Crect x='40' y='105' width='30' height='20' fill='%23fff' opacity='0.2' rx='1'/%3E%3Crect x='150' y='40' width='115' height='120' fill='url(%23sg)' stroke='%233b82f6' stroke-width='2.5' rx='2'/%3E%3Crect x='155' y='45' width='22' height='55' fill='%23fff' opacity='0.3' rx='1'/%3E%3Crect x='230' y='105' width='30' height='20' fill='%23fff' opacity='0.2' rx='1'/%3E%3Cline x1='150' y1='40' x2='150' y2='160' stroke='%231e40af' stroke-width='1.5' opacity='0.5'/%3E%3Crect x='140' y='95' width='6' height='20' fill='%231e3a8a' rx='1.5'/%3E%3Crect x='258' y='95' width='6' height='20' fill='%231e3a8a' rx='1.5'/%3E%3Crect x='28' y='165' width='244' height='7' fill='%2394a3b8' rx='1.5'/%3E%3Crect x='32' y='167' width='236' height='3' fill='%23cbd5e1' rx='0.5'/%3E%3C/svg%3E",
      features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Sound Insulation"],
      specs: {
        material: "UPVC",
        frame_thickness: "70mm",
        glass_type: "Double Glazed",
        warranty: "10 years"
      }
    },
    {
      id: 2,
      name: "Classic Casement UPVC Window",
      price: 199.99,
      description: "Traditional casement design with modern UPVC frame for durability and insulation.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='cg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e0e7ff' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23a5b4fc' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3ClinearGradient id='cf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23818cf8'/%3E%3Cstop offset='100%25' stop-color='%236366f1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='30' y='25' width='240' height='150' fill='url(%23cf)' rx='6'/%3E%3Crect x='38' y='33' width='224' height='134' fill='%23f5f3ff' rx='4'/%3E%3Crect x='45' y='40' width='205' height='120' fill='url(%23cg)' stroke='%236366f1' stroke-width='3' rx='2'/%3E%3Crect x='52' y='47' width='30' height='60' fill='%23fff' opacity='0.4' rx='1.5'/%3E%3Crect x='90' y='105' width='38' height='27' fill='%23fff' opacity='0.25' rx='1.5'/%3E%3Crect x='190' y='55' width='22' height='40' fill='%23fff' opacity='0.3' rx='1.5'/%3E%3Crect x='43' y='70' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Crect x='43' y='95' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Crect x='43' y='120' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Ccircle cx='240' cy='100' r='9' fill='%23312e81'/%3E%3Crect x='231' y='96' width='19' height='8' fill='%23312e81' rx='1.5'/%3E%3Cpath d='M 245 100 Q 275 80 280 65' stroke='%236366f1' stroke-width='1.5' fill='none' opacity='0.4' stroke-dasharray='4,3'/%3E%3C/svg%3E",
      features: ["Easy Operation", "Maximum Ventilation", "Security Locks", "Child Safety"],
      specs: {
        material: "UPVC",
        frame_thickness: "68mm",
        glass_type: "Tempered",
        warranty: "8 years"
      }
    },
    {
      id: 3,
      name: "Modern Bay UPVC Window",
      price: 399.99,
      description: "Expansive bay window design that maximizes natural light and creates spaciousness.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f3e8ff' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23c084fc' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='bf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%239333ea'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='25,42 90,27 90,163 25,148' fill='url(%23bf)'/%3E%3Cpolygon points='31,45 86,32 86,158 31,145' fill='url(%23bg)' stroke='%237c3aed' stroke-width='1.5'/%3E%3Crect x='37' y='50' width='18' height='40' fill='%23fff' opacity='0.3'/%3E%3Crect x='90' y='23' width='120' height='145' fill='url(%23bf)' rx='4'/%3E%3Crect x='97' y='30' width='106' height='131' fill='url(%23bg)' stroke='%237c3aed' stroke-width='2.5' rx='2'/%3E%3Crect x='105' y='38' width='26' height='55' fill='%23fff' opacity='0.4' rx='1.5'/%3E%3Crect x='165' y='95' width='30' height='34' fill='%23fff' opacity='0.3' rx='1.5'/%3E%3Cpolygon points='210,27 275,42 275,148 210,163' fill='url(%23bf)'/%3E%3Cpolygon points='214,32 270,45 270,145 214,158' fill='url(%23bg)' stroke='%237c3aed' stroke-width='1.5'/%3E%3Crect x='232' y='52' width='18' height='40' fill='%23fff' opacity='0.3'/%3E%3Cline x1='150' y1='30' x2='150' y2='161' stroke='%236b21a8' stroke-width='1.5'/%3E%3Cline x1='97' y1='95' x2='203' y2='95' stroke='%236b21a8' stroke-width='1.5'/%3E%3C/svg%3E",
      features: ["Natural Light", "Architectural Appeal", "Thermal Efficiency", "Waterproof"],
      specs: {
        material: "UPVC",
        frame_thickness: "72mm",
        glass_type: "Double Glazed Low-E",
        warranty: "12 years"
      }
    },
    {
      id: 4,
      name: "Tilt & Turn UPVC Window",
      price: 329.99,
      description: "Versatile window system offering both tilting and turning functions for optimal ventilation.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='tg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fef3c7' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fbbf24' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='tf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='100%25' stop-color='%23d97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='35' y='25' width='230' height='150' fill='url(%23tf)' rx='6'/%3E%3Crect x='43' y='33' width='214' height='134' fill='%23fffbeb' rx='4'/%3E%3Crect x='50' y='40' width='200' height='120' fill='url(%23tg)' stroke='%23f59e0b' stroke-width='3' rx='2'/%3E%3Crect x='57' y='47' width='28' height='50' fill='%23fff' opacity='0.35' rx='1.5'/%3E%3Crect x='150' y='90' width='35' height='30' fill='%23fff' opacity='0.25' rx='1.5'/%3E%3Crect x='140' y='38' width='20' height='6' fill='%2392400e' rx='2'/%3E%3Ccircle cx='150' cy='41' r='4' fill='%23b45309'/%3E%3Crect x='48' y='75' width='5' height='12' fill='%2392400e' rx='1'/%3E%3Crect x='48' y='110' width='5' height='12' fill='%2392400e' rx='1'/%3E%3Crect x='235' y='95' width='8' height='25' fill='%2378350f' rx='2'/%3E%3Ccircle cx='239' cy='107' r='5' fill='%2392400e'/%3E%3Cpath d='M 150 30 L 150 20 M 145 24 L 150 20 L 155 24' stroke='%23f59e0b' stroke-width='1.5' opacity='0.5'/%3E%3C/svg%3E",
      features: ["Dual Function", "Easy Cleaning", "Security", "Ventilation Control"],
      specs: {
        material: "UPVC",
        frame_thickness: "70mm",
        glass_type: "Triple Glazed",
        warranty: "10 years"
      }
    },
    {
      id: 5,
      name: "Double-Glazed UPVC Window",
      price: 349.99,
      description: "Advanced double-glazing technology for superior insulation and noise reduction.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='dg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%237dd3fc' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3ClinearGradient id='df' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230ea5e9'/%3E%3Cstop offset='100%25' stop-color='%230284c7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='30' y='25' width='240' height='150' fill='url(%23df)' rx='6'/%3E%3Crect x='40' y='35' width='220' height='130' fill='%23f0f9ff' rx='4'/%3E%3Crect x='48' y='43' width='204' height='114' fill='url(%23dg)' stroke='%230284c7' stroke-width='3.5' rx='2'/%3E%3Crect x='52' y='47' width='196' height='106' fill='none' stroke='%2338bdf8' stroke-width='1.5' stroke-dasharray='3,2' opacity='0.5' rx='1'/%3E%3Crect x='58' y='53' width='32' height='45' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='110' y='110' width='40' height='25' fill='%23fff' opacity='0.25' rx='2'/%3E%3Crect x='200' y='60' width='25' height='35' fill='%23fff' opacity='0.3' rx='2'/%3E%3Cline x1='150' y1='43' x2='150' y2='157' stroke='%230369a1' stroke-width='2'/%3E%3Crect x='147' y='95' width='6' height='15' fill='%23075985' rx='1'/%3E%3Crect x='44' y='97' width='212' height='3' fill='%23cbd5e1' opacity='0.6'/%3E%3Ccircle cx='70' cy='70' r='12' fill='%2310b981' opacity='0.2'/%3E%3Ctext x='70' y='75' font-size='12' font-weight='bold' fill='%23059669' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E",
      features: ["Energy Efficient", "Noise Reduction", "Condensation Control", "UV Protection"],
      specs: {
        material: "UPVC",
        frame_thickness: "75mm",
        glass_type: "Double Glazed Argon",
        warranty: "15 years"
      }
    }
  ];

  // Subcategories for UPVC windows
  const subcategories = [
    { id: 'sliding', name: 'Sliding UPVC Windows', count: 3 },
    { id: 'casement', name: 'Casement UPVC Windows', count: 3 },
    { id: 'bay', name: 'Bay UPVC Windows', count: 2 },
    { id: 'tilt-turn', name: 'Tilt & Turn UPVC Windows', count: 2 },
    { id: 'double-glazed', name: 'Double-Glazed UPVC Windows', count: 3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">UPVC Windows Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of UPVC windows designed for superior energy efficiency, 
            durability, and aesthetic appeal. Perfect for residential and commercial applications.
          </p>
        </div>

        {/* Subcategories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">UPVC Window Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map(subcat => (
              <div key={subcat.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{subcat.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subcat.count} products available</p>
                <a href={`/products/upvc/${subcat.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular UPVC Windows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {upvcProducts.map(product => (
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
                  <div className="text-sm text-blue-600 font-medium">UPVC Windows</div>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of UPVC Windows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">Requires minimal upkeep compared to wood or metal frames.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Energy Efficient</h3>
              <p className="text-gray-600 text-sm">Excellent thermal insulation properties save energy costs.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Durable</h3>
              <p className="text-gray-600 text-sm">Resistant to weather, corrosion, and insects.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sound Insulation</h3>
              <p className="text-gray-600 text-sm">Reduces outside noise for a quieter indoor environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}