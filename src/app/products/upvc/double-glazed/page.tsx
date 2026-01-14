'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function DoubleGlazedUPVCWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23a7f3d0'/%3E%3Crect x='20' y='20' width='360' height='260' rx='5' fill='%23ffffff' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='40' y='40' width='320' height='220' rx='3' fill='%23d1fae5' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='45' y='45' width='310' height='210' rx='3' fill='%23d1fae5' stroke='%2310b981' stroke-width='1'/%3E%3Cline x1='200' y1='50' x2='200' y2='245' stroke='%2310b981' stroke-width='8' opacity='0.3'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const products = [
    {
      id: 211,
      name: "Standard Double Glazed UPVC Window",
      price: 349.99,
      description: "Energy-efficient double glazed window with two panes of glass separated by an insulating air gap, reducing heat loss and noise.",
      features: [
        "Two panes of 4mm toughened glass",
        "16mm air gap for insulation",
        "Energy-efficient spacer bars",
        "Reduces heating costs by up to 30%",
        "Noise reduction up to 50%"
      ],
      specifications: {
        material: "Multi-chamber UPVC profile",
        frameThickness: "70mm",
        glazing: "4mm-16mm-4mm configuration",
        uValue: "1.4 W/m²K",
        warranty: "10 years frame, 5 years sealed units"
      }
    },
    {
      id: 212,
      name: "Premium Low-E Double Glazed Window",
      price: 449.99,
      description: "Advanced low-emissivity coating reflects heat back into your home while allowing natural light through, maximizing energy savings.",
      features: [
        "Low-E coated glass",
        "Argon gas filled cavity",
        "Warm edge spacer technology",
        "Up to 40% energy savings",
        "Enhanced UV protection"
      ],
      specifications: {
        material: "Premium UPVC with steel reinforcement",
        frameThickness: "70mm",
        glazing: "4mm Low-E - 16mm Argon - 4mm",
        uValue: "1.2 W/m²K",
        warranty: "12 years comprehensive"
      }
    },
    {
      id: 213,
      name: "Acoustic Double Glazed UPVC Window",
      price: 549.99,
      description: "Specialized acoustic glazing with laminated glass for maximum sound insulation, perfect for noisy urban environments.",
      features: [
        "Laminated acoustic glass",
        "Superior noise reduction (up to 45dB)",
        "Enhanced security from laminated glass",
        "Energy efficient performance",
        "Ideal for busy streets and airports"
      ],
      specifications: {
        material: "Heavy-duty UPVC profile",
        frameThickness: "82mm",
        glazing: "6.4mm Laminated - 20mm - 6mm",
        uValue: "1.3 W/m²K",
        warranty: "15 years all-inclusive"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Double-Glazed UPVC Windows</h1>
            <p className="text-xl text-emerald-100 mb-4">
              Invest in superior energy efficiency and comfort with our double-glazed UPVC windows. 
              Featuring two panes of glass with an insulating gap, these windows dramatically reduce 
              heat loss, lower energy bills, and create a quieter, more comfortable home environment.
            </p>
            <p className="text-lg text-emerald-200">
              Double glazing is the smart choice for homeowners who want to reduce their carbon footprint, 
              save money on heating and cooling costs, and enjoy year-round comfort regardless of outside temperatures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Double Glazing</h2>
              <p className="text-gray-600 mb-4">
                Double glazing consists of two panes of glass separated by a sealed gap filled with air or 
                inert gas (such as argon). This gap acts as an insulating barrier, significantly reducing 
                the transfer of heat through the window. The result is a warmer home in winter, a cooler 
                home in summer, and lower energy bills year-round.
              </p>
              <p className="text-gray-600 mb-4">
                Our UPVC frames complement the double glazing with multi-chamber profiles that further 
                enhance insulation. The combination of advanced glazing and efficient frame design creates 
                a window system that can reduce heat loss through your windows by up to 70% compared to 
                single-glazed windows.
              </p>
              <p className="text-gray-600">
                Beyond energy efficiency, double glazing provides excellent noise insulation, reducing 
                external noise by up to 50%. This makes your home a more peaceful sanctuary, especially 
                in urban areas or near busy roads. The sealed unit also helps reduce condensation and 
                improves home security.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Double Glazing</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Energy Savings:</strong>
                    <p className="text-gray-600">Reduce heating and cooling costs by 20-40% with superior insulation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Noise Reduction:</strong>
                    <p className="text-gray-600">Significantly quieter interior with up to 50% reduction in outside noise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Condensation Control:</strong>
                    <p className="text-gray-600">Warmer interior glass surface reduces condensation and mold risk.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Enhanced Security:</strong>
                    <p className="text-gray-600">Two panes of glass are much harder to break than single glazing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Property Value:</strong>
                    <p className="text-gray-600">Double glazing adds significant value to your property and appeal to buyers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Double Glazing Options</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-emerald-50 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/products/double-glazed-upvc-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-emerald-700 mb-4">${product.price}</p>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ROI Calculator</h2>
            <p className="text-gray-600 mb-8">
              Double glazing typically pays for itself through energy savings within 5-10 years. 
              With an average lifespan of 20+ years, you'll enjoy over a decade of pure savings plus 
              the comfort and property value benefits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-emerald-700 mb-2">20-40%</div>
                <p className="text-gray-700 font-semibold">Energy Cost Reduction</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-emerald-700 mb-2">$200-500</div>
                <p className="text-gray-700 font-semibold">Average Annual Savings</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-emerald-700 mb-2">5-10%</div>
                <p className="text-gray-700 font-semibold">Increase in Property Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Saving on Energy Costs Today</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Contact us for a free energy assessment and custom quote on double-glazed windows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Get Energy Assessment
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-emerald-700 transition-colors">
              Browse All Windows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
