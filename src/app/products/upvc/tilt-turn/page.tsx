import Image from 'next/image';
import Link from 'next/link';

export default function TiltTurnUPVCWindows() {
  const products = [
    {
      id: 209,
      name: "Standard Tilt & Turn UPVC Window",
      price: 329.99,
      description: "Versatile dual-action window offering both tilt-in ventilation and full turn-in opening for easy cleaning and maximum airflow.",
      features: [
        "Dual opening mechanism (tilt and turn)",
        "Tilt mode for secure ventilation",
        "Turn mode for full opening and cleaning",
        "Child-safe tilt position",
        "Single handle operation"
      ],
      specifications: {
        material: "Multi-chamber UPVC with steel reinforcement",
        frameThickness: "70mm",
        glazing: "Double glazed with warm edge spacers",
        colorOptions: "White, Grey, Anthracite, Woodgrain",
        warranty: "12 years frame, 7 years hardware"
      }
    },
    {
      id: 210,
      name: "Premium Tilt & Turn UPVC Window with Security",
      price: 449.99,
      description: "Enhanced security tilt & turn window with RC2 rating, perfect for ground floor and accessible locations.",
      features: [
        "RC2 security certification",
        "Multi-point locking with additional security",
        "Laminated safety glass",
        "Reinforced hinges and frames",
        "Anti-drill and anti-pick cylinders"
      ],
      specifications: {
        material: "Heavy-duty UPVC with steel core",
        frameThickness: "82mm security profile",
        glazing: "Laminated security glass",
        colorOptions: "Standard and custom RAL colors",
        warranty: "15 years comprehensive"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tilt & Turn UPVC Windows</h1>
            <p className="text-xl text-teal-100 mb-4">
              Experience ultimate versatility with tilt & turn UPVC windows that offer two opening modes 
              in one elegant design. Tilt inward from the top for ventilation, or swing the entire window 
              inward for full access and easy cleaning - all controlled by a simple handle.
            </p>
            <p className="text-lg text-teal-200">
              Popular throughout Europe and increasingly favored worldwide, tilt & turn windows provide 
              exceptional functionality, security, and energy efficiency for modern living.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How Tilt & Turn Windows Work</h2>
              <p className="text-gray-600 mb-4">
                Tilt & turn windows feature an innovative dual-action mechanism controlled by a single handle. 
                Turn the handle to one position and the window tilts inward from the top, creating a secure 
                opening for ventilation. Turn the handle to another position and the window swings fully inward 
                like a door, providing complete access.
              </p>
              <p className="text-gray-600 mb-4">
                The tilt mode is perfect for everyday use - it allows fresh air to enter while maintaining 
                security and protection from rain. This position is also child-safe, as the opening is too 
                small for someone to fall through, yet provides excellent air circulation.
              </p>
              <p className="text-gray-600">
                The turn mode opens the window completely inward, making it incredibly easy to clean both 
                sides of the glass from inside your home. This feature is especially valuable for windows 
                on upper floors or in hard-to-reach locations. The full opening also provides maximum 
                ventilation when needed.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Tilt & Turn?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Dual Functionality:</strong>
                    <p className="text-gray-600">Two opening modes in one window for maximum versatility and convenience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Safe Ventilation:</strong>
                    <p className="text-gray-600">Tilt position provides secure airflow, ideal for homes with children or pets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Easy Maintenance:</strong>
                    <p className="text-gray-600">Clean both sides of the glass from inside - perfect for upper floors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Superior Seal:</strong>
                    <p className="text-gray-600">Excellent weatherproofing and energy efficiency when closed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Enhanced Security:</strong>
                    <p className="text-gray-600">Multi-point locking provides excellent protection against break-ins.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tilt & Turn Window Options</h2>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="relative w-full h-80 bg-teal-50 overflow-hidden rounded-lg">
                    <Image 
                      src="/images/products/tilt-turn-upvc-window.webp"
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-3xl font-bold text-teal-700 mb-4">${product.price}</p>
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
                      <Link href={`/products/${product.id}`} className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
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

      <section className="py-12 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover the Versatility of Tilt & Turn Windows</h2>
          <p className="text-xl mb-8 text-teal-100">
            Get expert advice on the perfect tilt & turn solution for your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-teal-700 transition-colors">
              View All Windows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
