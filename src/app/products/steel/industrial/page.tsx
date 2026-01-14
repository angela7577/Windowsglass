'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function IndustrialSteelWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23cbd5e1'/%3E%3Crect x='10' y='10' width='380' height='280' rx='5' fill='%23ffffff' stroke='%23334155' stroke-width='4'/%3E%3Crect x='30' y='30' width='340' height='240' rx='3' fill='%23e2e8f0' stroke='%23334155' stroke-width='3'/%3E%3Cline x1='30' y1='150' x2='370' y2='150' stroke='%23334155' stroke-width='4'/%3E%3Cline x1='200' y1='30' x2='200' y2='270' stroke='%23334155' stroke-width='4'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };
  const products = [
    {
      id: 304,
      name: "Heavy-Duty Industrial Steel Window",
      price: 599.99,
      description: "Extra-strength industrial grade steel window designed for harsh environments, heavy-duty applications, and maximum security requirements.",
      features: [
        "Reinforced steel construction",
        "Extra-thick frame profiles",
        "Impact-resistant glazing options",
        "Weather-sealed design",
        "Certified for industrial use"
      ],
      specifications: {
        material: "Industrial grade structural steel",
        frameThickness: "80mm x 80mm heavy-duty",
        glazing: "10mm-12mm toughened/laminated glass",
        finish: "Industrial-grade powder coating",
        warranty: "7 years frame and coating"
      }
    },
    {
      id: 305,
      name: "Industrial Fire-Rated Steel Window",
      price: 899.99,
      description: "Fire-resistant steel window system meeting fire safety regulations for industrial and commercial buildings requiring fire compartmentation.",
      features: [
        "Fire-rated up to 60-90 minutes",
        "Intumescent seals",
        "Certified to fire safety standards",
        "Steel construction with fire-resistant glass",
        "Meets building code requirements"
      ],
      specifications: {
        material: "Fire-rated steel sections",
        frameThickness: "100mm x 50mm",
        glazing: "Fire-rated glass up to 90 minutes",
        finish: "Heat-resistant coating",
        warranty: "10 years comprehensive"
      }
    },
    {
      id: 306,
      name: "Industrial Security Steel Window",
      price: 749.99,
      description: "High-security steel window with reinforced construction and security glazing for facilities requiring maximum protection.",
      features: [
        "Security-rated construction",
        "Anti-pry design",
        "Laminated security glass",
        "Heavy-duty locking systems",
        "Tamper-resistant fixings"
      ],
      specifications: {
        material: "Security-grade steel",
        frameThickness: "75mm x 75mm reinforced",
        glazing: "Multi-layer laminated security glass",
        finish: "Corrosion-resistant coating",
        warranty: "8 years all-inclusive"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Steel Windows</h1>
            <p className="text-xl text-slate-300 mb-4">
              Engineered for the most demanding environments, our industrial steel windows deliver 
              uncompromising strength, security, and performance. These heavy-duty windows are designed 
              to withstand harsh conditions, meet stringent safety regulations, and provide decades of 
              reliable service in industrial and commercial facilities.
            </p>
            <p className="text-lg text-slate-400">
              From manufacturing plants and warehouses to data centers and high-security facilities, 
              our industrial windows are the trusted choice when failure is not an option.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Industrial-Grade Performance</h2>
              <p className="text-gray-600 mb-4">
                Industrial steel windows are engineered to exceed standard building requirements, providing 
                superior performance in the harshest conditions. These windows feature extra-thick steel 
                profiles, reinforced corners, and heavy-duty hardware designed for continuous operation 
                in demanding environments.
              </p>
              <p className="text-gray-600 mb-4">
                Our industrial windows can accommodate various glazing options including impact-resistant 
                glass, fire-rated glass, security laminated glass, and specialized industrial glazing. 
                The robust steel construction supports larger glass panes and heavier glazing without 
                compromising structural integrity.
              </p>
              <p className="text-gray-600">
                Each window undergoes rigorous quality testing and can be certified to meet specific 
                industry standards including fire ratings, security ratings, impact resistance, and 
                environmental performance. We work closely with architects, engineers, and facility 
                managers to ensure our windows meet all project requirements.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Industrial Applications</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Manufacturing Facilities:</strong>
                    <p className="text-gray-600">Withstand vibrations, dust, chemicals, and temperature extremes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Fire-Rated Compartments:</strong>
                    <p className="text-gray-600">Meet fire safety regulations for stairwells and fire compartmentation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">High-Security Areas:</strong>
                    <p className="text-gray-600">Provide maximum protection for sensitive facilities and data centers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Harsh Environments:</strong>
                    <p className="text-gray-600">Perform reliably in coastal, chemical, or extreme climate conditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Large Openings:</strong>
                    <p className="text-gray-600">Support oversized glass panels for maximum natural light.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Industrial Window Solutions</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-slate-100 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/products/industrial-steel-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-slate-700 mb-4">${product.price}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications & Standards</h2>
            <div className="bg-slate-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6">
                Our industrial steel windows can be certified to meet various industry standards and regulations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Fire resistance ratings (30, 60, 90, 120 minutes)
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Security ratings (RC1-RC6)
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Impact resistance standards
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Blast resistance certifications
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Thermal performance ratings
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Acoustic performance standards
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Weather resistance testing
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2">•</span>
                    Building code compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Industrial-Strength Solutions for Your Facility</h2>
          <p className="text-xl mb-8 text-slate-300">
            Consult with our industrial window specialists for custom engineered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Specialists
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-800 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
