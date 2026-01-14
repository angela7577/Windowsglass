'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function MicroWindowsPage() {
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

  // Micro Windows product data - compact, specialized windows
  const microProducts = [
    {
      id: 201,
      name: "Compact Ventilation Micro Window",
      price: 89.99,
      description: "Ultra-compact window designed for bathroom, kitchen, and small space ventilation with maximum efficiency.",
      image: "/images/products/sliding-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e0f2fe' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%2338bdf8' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='mf1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230ea5e9'/%3E%3Cstop offset='100%25' stop-color='%230284c7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23e0f2fe'/%3E%3Crect x='90' y='50' width='120' height='100' fill='url(%23mf1)' rx='4'/%3E%3Crect x='97' y='57' width='106' height='86' fill='%23f0f9ff' rx='3'/%3E%3Crect x='103' y='63' width='94' height='74' fill='url(%23mg1)' stroke='%230284c7' stroke-width='3' rx='2'/%3E%3Crect x='108' y='68' width='20' height='30' fill='%23fff' opacity='0.4' rx='1'/%3E%3Crect x='160' y='95' width='25' height='20' fill='%23fff' opacity='0.3' rx='1'/%3E%3Cline x1='150' y1='63' x2='150' y2='137' stroke='%23075985' stroke-width='2'/%3E%3Cline x1='103' y1='100' x2='197' y2='100' stroke='%23075985' stroke-width='2'/%3E%3Ccircle cx='190' cy='100' r='4' fill='%23064e3b'/%3E%3Crect x='187' y='97' width='6' height='6' fill='%23065f46' rx='1'/%3E%3Ctext x='150' y='175' font-size='14' font-weight='bold' fill='%230369a1' text-anchor='middle'%3EMICRO SIZE%3C/text%3E%3C/svg%3E",
      features: ["Space Saving", "High Airflow", "Corrosion Resistant", "Easy Installation"],
      specs: {
        material: "Aluminum Alloy",
        dimensions: "12\"×8\"",
        glass_type: "Tempered",
        warranty: "5 years"
      }
    },
    {
      id: 202,
      name: "Mini Awning Micro Window",
      price: 129.99,
      description: "Top-hinged micro window perfect for basements and tight spaces, provides ventilation even during rain.",
      image: "/images/products/casement-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fef3c7' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fbbf24' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='mf2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='100%25' stop-color='%23d97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23fef3c7'/%3E%3Crect x='80' y='55' width='140' height='90' fill='url(%23mf2)' rx='4'/%3E%3Cpolygon points='87,65 213,65 213,140 87,130' fill='%23fffbeb'/%3E%3Cpolygon points='93,70 207,70 207,135 93,126' fill='url(%23mg2)' stroke='%23d97706' stroke-width='2.5'/%3E%3Crect x='98' y='75' width='22' height='28' fill='%23fff' opacity='0.35' rx='1'/%3E%3Crect x='165' y='105' width='28' height='18' fill='%23fff' opacity='0.25' rx='1'/%3E%3Cline x1='150' y1='70' x2='150' y2='132' stroke='%2392400e' stroke-width='1.8'/%3E%3Crect x='85' y='62' width='8' height='5' fill='%2392400e' rx='1'/%3E%3Crect x='207' y='62' width='8' height='5' fill='%2392400e' rx='1'/%3E%3Cpath d='M 150 55 Q 150 45 150 40' stroke='%23f59e0b' stroke-width='2' opacity='0.5' stroke-dasharray='3,2'/%3E%3Cpolygon points='147,42 150,38 153,42' fill='%23f59e0b' opacity='0.5'/%3E%3Ctext x='150' y='165' font-size='12' font-weight='bold' fill='%2392400e' text-anchor='middle'%3EAWNING STYLE%3C/text%3E%3C/svg%3E",
      features: ["Rain Protection", "Top Hinged", "Compact Design", "Insect Screen"],
      specs: {
        material: "UPVC",
        dimensions: "16\"×10\"",
        glass_type: "Frosted",
        warranty: "6 years"
      }
    },
    {
      id: 203,
      name: "Hopper Micro Window",
      price: 99.99,
      description: "Bottom-hinged micro window ideal for basements and secure ventilation, tilts inward for easy cleaning.",
      image: "/images/products/bay-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f3e8ff' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23c084fc' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='mf3' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%239333ea'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23f3e8ff'/%3E%3Crect x='85' y='50' width='130' height='95' fill='url(%23mf3)' rx='4'/%3E%3Cpolygon points='92,57 208,57 208,137 92,142' fill='%23faf5ff'/%3E%3Cpolygon points='98,63 202,63 202,132 98,136' fill='url(%23mg3)' stroke='%239333ea' stroke-width='2.5'/%3E%3Crect x='103' y='68' width='18' height='30' fill='%23fff' opacity='0.4' rx='1'/%3E%3Crect x='168' y='100' width='24' height='20' fill='%23fff' opacity='0.3' rx='1'/%3E%3Cline x1='150' y1='63' x2='150' y2='134' stroke='%236b21a8' stroke-width='1.8'/%3E%3Crect x='92' y='138' width='8' height='5' fill='%236b21a8' rx='1'/%3E%3Crect x='200' y='138' width='8' height='5' fill='%236b21a8' rx='1'/%3E%3Cpath d='M 150 145 Q 150 155 150 160' stroke='%23a855f7' stroke-width='2' opacity='0.5' stroke-dasharray='3,2'/%3E%3Cpolygon points='147,158 150,162 153,158' fill='%23a855f7' opacity='0.5'/%3E%3Ctext x='150' y='178' font-size='12' font-weight='bold' fill='%236b21a8' text-anchor='middle'%3EHOPPER STYLE%3C/text%3E%3C/svg%3E",
      features: ["Inward Opening", "Secure Design", "Easy Cleaning", "Privacy Glass"],
      specs: {
        material: "UPVC",
        dimensions: "14\"×9\"",
        glass_type: "Obscure",
        warranty: "5 years"
      }
    },
    {
      id: 204,
      name: "Jalousie Micro Window",
      price: 149.99,
      description: "Louvered glass slat design for maximum ventilation control, perfect for tropical climates and utility rooms.",
      image: "/images/products/tilt-turn-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg4' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23d1fae5' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%2334d399' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='mf4' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2310b981'/%3E%3Cstop offset='100%25' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23d1fae5'/%3E%3Crect x='85' y='45' width='130' height='110' fill='url(%23mf4)' rx='4'/%3E%3Crect x='92' y='52' width='116' height='96' fill='%23ecfdf5' rx='3'/%3E%3Cellipse cx='150' cy='62' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='75' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='88' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='101' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='114' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='127' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Cellipse cx='150' cy='140' rx='50' ry='6' fill='url(%23mg4)' stroke='%23059669' stroke-width='1.5' opacity='0.8'/%3E%3Crect x='88' y='52' width='4' height='96' fill='%23065f46' rx='1'/%3E%3Crect x='208' y='52' width='4' height='96' fill='%23065f46' rx='1'/%3E%3Crect x='208' y='95' width='10' height='15' fill='%23064e3b' rx='2'/%3E%3Ccircle cx='213' cy='102' r='3' fill='%23065f46'/%3E%3Ctext x='150' y='173' font-size='11' font-weight='bold' fill='%23065f46' text-anchor='middle'%3EJALOUSIE SLATS%3C/text%3E%3C/svg%3E",
      features: ["Adjustable Slats", "Maximum Airflow", "Weather Resistant", "Crank Operation"],
      specs: {
        material: "Aluminum",
        dimensions: "15\"×12\"",
        glass_type: "Clear Slats",
        warranty: "7 years"
      }
    },
    {
      id: 205,
      name: "Transom Micro Window",
      price: 119.99,
      description: "Horizontal micro window mounted above doors or other windows, excellent for additional light and ventilation.",
      image: "/images/products/double-glazed-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fee2e2' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fca5a5' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='mf5' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ef4444'/%3E%3Cstop offset='100%25' stop-color='%23dc2626'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23fee2e2'/%3E%3Crect x='50' y='70' width='200' height='60' fill='url(%23mf5)' rx='4'/%3E%3Crect x='57' y='77' width='186' height='46' fill='%23fef2f2' rx='3'/%3E%3Crect x='63' y='83' width='174' height='34' fill='url(%23mg5)' stroke='%23dc2626' stroke-width='2.5' rx='2'/%3E%3Crect x='68' y='88' width='30' height='18' fill='%23fff' opacity='0.4' rx='1'/%3E%3Crect x='130' y='95' width='35' height='14' fill='%23fff' opacity='0.3' rx='1'/%3E%3Crect x='195' y='90' width='28' height='16' fill='%23fff' opacity='0.35' rx='1'/%3E%3Cline x1='115' y1='83' x2='115' y2='117' stroke='%239f1239' stroke-width='1.8'/%3E%3Cline x1='150' y1='83' x2='150' y2='117' stroke='%239f1239' stroke-width='1.8'/%3E%3Cline x1='185' y1='83' x2='185' y2='117' stroke='%239f1239' stroke-width='1.8'/%3E%3Ctext x='150' y='155' font-size='12' font-weight='bold' fill='%239f1239' text-anchor='middle'%3ETRANSOM DESIGN%3C/text%3E%3Cpath d='M 40 100 L 50 100 M 250 100 L 260 100' stroke='%23dc2626' stroke-width='2' opacity='0.6'/%3E%3C/svg%3E",
      features: ["Above Door Mount", "Natural Light", "Horizontal Design", "Fixed/Operable"],
      specs: {
        material: "UPVC",
        dimensions: "24\"×8\"",
        glass_type: "Decorative",
        warranty: "6 years"
      }
    },
    {
      id: 206,
      name: "Porthole Micro Window",
      price: 159.99,
      description: "Circular micro window inspired by nautical design, adds unique character to bathrooms and specialty rooms.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='mg6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%2360a5fa' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3CradialGradient id='rg6'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%233b82f6' stop-opacity='0.6'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23dbeafe'/%3E%3Ccircle cx='150' cy='100' r='55' fill='%231e40af' stroke='%231e3a8a' stroke-width='4'/%3E%3Ccircle cx='150' cy='100' r='48' fill='%23eff6ff'/%3E%3Ccircle cx='150' cy='100' r='42' fill='url(%23rg6)' stroke='%232563eb' stroke-width='3'/%3E%3Crect x='130' y='85' width='15' height='22' fill='%23fff' opacity='0.4' rx='2'/%3E%3Crect x='162' y='105' width='18' height='16' fill='%23fff' opacity='0.3' rx='2'/%3E%3Cline x1='150' y1='58' x2='150' y2='142' stroke='%231e40af' stroke-width='2'/%3E%3Cline x1='108' y1='100' x2='192' y2='100' stroke='%231e40af' stroke-width='2'/%3E%3Ccircle cx='150' cy='100' r='55' fill='none' stroke='%2393c5fd' stroke-width='2' stroke-dasharray='8,4' opacity='0.5'/%3E%3Ccircle cx='185' cy='100' r='6' fill='%231e3a8a'/%3E%3Ccircle cx='185' cy='100' r='3' fill='%23bfdbfe'/%3E%3Ctext x='150' y='175' font-size='12' font-weight='bold' fill='%231e40af' text-anchor='middle'%3EPORTHOLE ROUND%3C/text%3E%3C/svg%3E",
      features: ["Circular Design", "Decorative", "Waterproof Seal", "Marine Grade"],
      specs: {
        material: "Brass/Steel",
        dimensions: "12\" diameter",
        glass_type: "Tempered Round",
        warranty: "8 years"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
            SPECIALTY COLLECTION
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Micro Windows Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compact, specialized windows designed for small spaces, bathrooms, basements, and utility areas. 
            Perfect for maximum efficiency in minimal footprint with superior ventilation and light control.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-bold text-gray-800 mb-1">Space Efficient</h3>
            <p className="text-sm text-gray-600">Fits tight spaces perfectly</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">💨</div>
            <h3 className="font-bold text-gray-800 mb-1">High Airflow</h3>
            <p className="text-sm text-gray-600">Maximum ventilation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-bold text-gray-800 mb-1">Secure Design</h3>
            <p className="text-sm text-gray-600">Privacy & security focused</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800 mb-1">Easy Install</h3>
            <p className="text-sm text-gray-600">Quick installation process</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Micro Windows ({microProducts.length} Products)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48 bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-cyan-600 font-medium">MICRO WINDOWS</div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Features:</h4>
                    <ul className="text-xs text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 p-3 bg-gray-50 rounded">
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Specifications:</h4>
                    <div className="text-xs text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Size:</span>
                        <span className="font-medium">{product.specs.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Material:</span>
                        <span className="font-medium">{product.specs.material}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-cyan-700">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-500">{product.specs.warranty} warranty</span>
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

        {/* Application Areas */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Perfect For These Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🚿</div>
              <p className="text-sm font-medium text-gray-800">Bathrooms</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🏠</div>
              <p className="text-sm font-medium text-gray-800">Basements</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🍳</div>
              <p className="text-sm font-medium text-gray-800">Kitchens</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🔧</div>
              <p className="text-sm font-medium text-gray-800">Utility Rooms</p>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            ← Browse All Window Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
