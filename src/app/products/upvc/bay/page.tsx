import Image from 'next/image';
import Link from 'next/link';

export default function BayUPVCWindows() {
  const products = [
    {
      id: 207,
      name: "Classic 3-Panel Bay UPVC Window",
      price: 899.99,
      description: "Traditional three-panel bay window configuration creating additional interior space and panoramic views.",
      features: [
        "Three angled panels for classic bay design",
        "Increased interior floor space",
        "Panoramic viewing angles",
        "Integrated seating opportunity",
        "Enhanced natural light"
      ],
      specifications: {
        material: "Reinforced UPVC multi-chamber profile",
        frameThickness: "70mm",
        glazing: "Double or triple glazed options",
        colorOptions: "White, Cream, Woodgrain, Custom",
        warranty: "15 years frame, 10 years hardware"
      }
    },
    {
      id: 208,
      name: "5-Panel Box Bay UPVC Window",
      price: 1299.99,
      description: "Elegant five-panel box bay window offering maximum space extension and 180-degree views.",
      features: [
        "Five-panel configuration",
        "Maximum space extension",
        "180-degree viewing angle",
        "Structural roof support included",
        "Custom angle options available"
      ],
      specifications: {
        material: "Steel-reinforced UPVC construction",
        frameThickness: "70mm premium profile",
        glazing: "Triple glazed with argon gas",
        colorOptions: "All standard and custom RAL colors",
        warranty: "15 years comprehensive"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bay UPVC Windows</h1>
            <p className="text-xl text-purple-100 mb-4">
              Transform your living space with elegant bay UPVC windows that add architectural character, 
              extra floor space, and breathtaking panoramic views to your home. These windows project 
              outward from the main wall, creating a beautiful focal point both inside and outside.
            </p>
            <p className="text-lg text-purple-200">
              Bay windows are perfect for living rooms, dining areas, and master bedrooms where you want 
              to maximize natural light, create a cozy nook, and enjoy expansive views of your surroundings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes Bay Windows Special?</h2>
              <p className="text-gray-600 mb-4">
                Bay windows are a stunning architectural feature that projects outward from the exterior 
                wall of your home, creating a multi-angled viewing area. This design not only adds visual 
                interest to your home's facade but also creates valuable additional interior space.
              </p>
              <p className="text-gray-600 mb-4">
                Our UPVC bay windows combine classic design with modern materials. The multi-chamber UPVC 
                profiles provide excellent thermal insulation, while the structural reinforcement ensures 
                the bay window maintains its shape and integrity for decades. The angled configuration 
                allows natural light to enter from multiple directions, brightening your room throughout the day.
              </p>
              <p className="text-gray-600">
                The extended space created by a bay window is perfect for creating a window seat, displaying 
                plants, or simply enjoying the enhanced sense of spaciousness. It's a feature that adds 
                both practical living space and significant value to your property.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Additional Space:</strong>
                    <p className="text-gray-600">Creates extra interior floor space perfect for seating areas or decorative displays.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Panoramic Views:</strong>
                    <p className="text-gray-600">Multi-angle design provides wider viewing angles and more natural light.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Architectural Character:</strong>
                    <p className="text-gray-600">Adds distinctive curb appeal and enhances your home's aesthetic value.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Property Value:</strong>
                    <p className="text-gray-600">Bay windows are a sought-after feature that can increase your home's market value.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Versatile Design:</strong>
                    <p className="text-gray-600">Available in various configurations to suit different architectural styles.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Bay Window Collection</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-purple-50 overflow-hidden rounded-lg">
                    <Image
                      src="/images/products/bay-upvc-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {false && <svg viewBox="0 0 400 300" className="w-full h-full" style={{ maxWidth: '400px' }}>
                      <defs>
                        <linearGradient id="bayGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6"/>
                        </linearGradient>
                        <linearGradient id="bayFrame" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7"/>
                          <stop offset="100%" stopColor="#9333ea"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Bay window 3D perspective */}
                      {/* Left angled panel */}
                      <polygon points="40,60 120,40 120,240 40,220" fill="url(#bayFrame)"/>
                      <polygon points="48,65 115,48 115,235 48,215" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="2"/>
                      <rect x="55" y="70" width="25" height="60" fill="#fff" opacity="0.3"/>
                      
                      {/* Center panel (front) */}
                      <rect x="120" y="35" width="160" height="210" fill="url(#bayFrame)" rx="5"/>
                      <rect x="130" y="45" width="140" height="190" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="3" rx="3"/>
                      <rect x="140" y="55" width="35" height="80" fill="#fff" opacity="0.4" rx="2"/>
                      <rect x="220" y="140" width="40" height="50" fill="#fff" opacity="0.3" rx="2"/>
                      
                      {/* Right angled panel */}
                      <polygon points="280,40 360,60 360,220 280,240" fill="url(#bayFrame)"/>
                      <polygon points="285,48 353,65 353,215 285,235" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="2"/>
                      <rect x="310" y="75" width="25" height="60" fill="#fff" opacity="0.3"/>
                      
                      {/* Window dividers */}
                      <line x1="200" y1="45" x2="200" y2="235" stroke="#6b21a8" strokeWidth="2"/>
                      <line x1="130" y1="140" x2="270" y2="140" stroke="#6b21a8" strokeWidth="2"/>
                                      </svg>}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-purple-700 mb-4">${product.price}</p>
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
                      <Link href={`/products/${product.id}`} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        View Details
                      </Link>
                      <Link href="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors">
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

      <section className="py-12 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Add Character to Your Home with Bay Windows</h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact our specialists for a custom design consultation and detailed quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-700 transition-colors">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
