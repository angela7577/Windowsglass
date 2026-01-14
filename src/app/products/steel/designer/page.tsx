'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function DesignerSteelFrameWindows() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fef3c7'/%3E%3Crect x='30' y='30' width='340' height='240' rx='5' fill='%23ffffff' stroke='%23b45309' stroke-width='2'/%3E%3Crect x='35' y='35' width='330' height='230' rx='3' fill='%23fffbeb' stroke='%23b45309' stroke-width='1'/%3E%3Cline x1='200' y1='35' x2='200' y2='265' stroke='%23b45309' stroke-width='2'/%3E%3Cline x1='35' y1='150' x2='365' y2='150' stroke='%23b45309' stroke-width='2'/%3E%3C/svg%3E`
      }
    });
    setAddedProducts({ ...addedProducts, [product.id]: true });
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };
  const products = [
    {
      id: 307,
      name: "Slim Profile Designer Steel Window",
      price: 799.99,
      description: "Contemporary slim steel frame window with minimal sightlines, maximizing glass area for a modern aesthetic and expansive views.",
      features: [
        "Ultra-slim steel profiles",
        "Maximum glass-to-frame ratio",
        "Contemporary minimalist design",
        "Custom RAL color options",
        "Precision engineering"
      ],
      specifications: {
        material: "Hot-rolled steel or cold-rolled steel",
        frameThickness: "25mm-40mm slim profile",
        glazing: "Large format glass up to 20mm thick",
        finish: "Premium powder coating or factory-applied paint",
        warranty: "10 years frame and finish"
      }
    },
    {
      id: 308,
      name: "Heritage Style Steel Window",
      price: 949.99,
      description: "Classic Crittall-style steel window with traditional divided lights, perfect for period properties and heritage restoration projects.",
      features: [
        "Authentic period design",
        "Traditional glazing bars",
        "Hot-dip galvanized steel",
        "Suitable for conservation areas",
        "Historically accurate detailing"
      ],
      specifications: {
        material: "Hot-rolled steel sections",
        frameThickness: "Traditional 25mm x 50mm profiles",
        glazing: "Single or double glazed heritage glass",
        finish: "Factory paint in traditional colors",
        warranty: "12 years comprehensive"
      }
    },
    {
      id: 309,
      name: "Architectural Custom Steel Window",
      price: 1299.99,
      description: "Bespoke architectural steel window system designed to your exact specifications, ideal for unique projects and signature designs.",
      features: [
        "Fully customizable design",
        "Complex geometries possible",
        "Integrated shading systems",
        "Thermally broken options available",
        "Engineered to project specifications"
      ],
      specifications: {
        material: "Structural steel profiles",
        frameThickness: "Custom as per design",
        glazing: "Any specification available",
        finish: "Custom colors and finishes",
        warranty: "15 years design-dependent"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Designer Steel Frame Windows</h1>
            <p className="text-xl text-amber-100 mb-4">
              Elevate your architecture with designer steel frame windows that combine industrial elegance 
              with contemporary sophistication. These windows make a bold architectural statement while 
              providing exceptional performance, slim sightlines, and the ability to support large glass 
              panes that flood interiors with natural light.
            </p>
            <p className="text-lg text-amber-200">
              From modern minimalist designs to heritage-style Crittall windows, our designer steel frames 
              are the choice of architects, designers, and discerning homeowners seeking distinctive character 
              and timeless appeal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Appeal of Steel Frame Windows</h2>
              <p className="text-gray-600 mb-4">
                Steel frame windows have experienced a renaissance in modern architecture, prized for their 
                ability to create stunning visual effects with minimal framework. The inherent strength of 
                steel allows for exceptionally slim profiles that would be impossible with other materials, 
                resulting in windows that seem to disappear, leaving only expanses of glass.
              </p>
              <p className="text-gray-600 mb-4">
                This aesthetic is particularly popular in loft conversions, industrial-style homes, 
                contemporary extensions, and commercial spaces where the architectural vision demands 
                clean lines and maximum transparency. The black or dark frames create dramatic contrast 
                against walls and provide definition without visual weight.
              </p>
              <p className="text-gray-600">
                Beyond aesthetics, steel frames offer practical advantages including exceptional durability, 
                the ability to support very large glass panels, resistance to warping or bowing, and a 
                lifespan measured in decades. When properly maintained, steel windows can last 60 years 
                or more while maintaining their appearance and performance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Possibilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Slim Profiles:</strong>
                    <p className="text-gray-600">Create minimal sightlines for maximum glass and unobstructed views.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Large Format Glass:</strong>
                    <p className="text-gray-600">Support oversized glass panels up to 3m x 3m or larger.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Custom Configurations:</strong>
                    <p className="text-gray-600">Design fixed, opening, pivot, or sliding sections to suit your needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Color Options:</strong>
                    <p className="text-gray-600">Choose from classic black, white, bronze, or any custom RAL color.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-700 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Architectural Details:</strong>
                    <p className="text-gray-600">Incorporate glazing bars, transoms, and mullions for traditional or modern looks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Designer Steel Window Collection</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-amber-50 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/products/designer-steel-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-amber-700 mb-4">${product.price}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Design Styles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-50 p-8 rounded-lg mb-4">
                  <div className="text-4xl mb-2">🏗️</div>
                  <h3 className="text-xl font-bold text-gray-800">Industrial Loft</h3>
                </div>
                <p className="text-gray-600">
                  Black steel frames with large glass panels create the signature industrial aesthetic.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-50 p-8 rounded-lg mb-4">
                  <div className="text-4xl mb-2">🏛️</div>
                  <h3 className="text-xl font-bold text-gray-800">Heritage</h3>
                </div>
                <p className="text-gray-600">
                  Traditional Crittall-style windows with period-appropriate glazing bars and details.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-50 p-8 rounded-lg mb-4">
                  <div className="text-4xl mb-2">🏠</div>
                  <h3 className="text-xl font-bold text-gray-800">Contemporary</h3>
                </div>
                <p className="text-gray-600">
                  Ultra-slim profiles with minimal sightlines for modern architectural projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Signature Look with Designer Steel Windows</h2>
          <p className="text-xl mb-8 text-amber-100">
            Consult with our design specialists to bring your architectural vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Design Consultation
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-amber-700 transition-colors">
              Browse All Windows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
