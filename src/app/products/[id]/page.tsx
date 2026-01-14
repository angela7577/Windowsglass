import Image from 'next/image';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // In a real application, this data would come from a database or API
  // For now, we'll use sample data and simulate fetching based on the ID
  const productId = params.id;
  
  // Sample product data - in a real app this would come from a database
  const productData = {
    "1": {
      id: 1,
      name: "Premium Sliding UPVC Window",
      price: 249.99,
      originalPrice: 299.99,
      category: "UPVC Windows",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
      gallery: [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E"
      ],
      description: "Experience superior comfort and energy efficiency with our Premium Sliding UPVC Window. Designed for modern homes, this window offers smooth operation and exceptional sealing technology that keeps your home comfortable year-round. The durable UPVC frame resists weathering and requires minimal maintenance while providing excellent insulation properties.",
      features: [
        "Energy Efficient Design",
        "Weather Resistant Seals",
        "Low Maintenance UPVC Frame",
        "Sound Insulation",
        "Child Safety Locks",
        "Smooth Rolling Mechanism",
        "Durable Construction"
      ],
      specifications: {
        material: "UPVC",
        frame_thickness: "70mm",
        glass_type: "Double Glazed",
        glass_thickness: "5mm + 12A + 5mm",
        dimensions: "Standard sizes available from 2ft x 3ft to 6ft x 8ft",
        color: "White (custom colors available)",
        warranty: "10 years",
        weight: "45 kg (approx.)"
      },
      inStock: true,
      rating: 4.8,
      reviewsCount: 124
    },
    "2": {
      id: 2,
      name: "Classic Casement UPVC Window",
      price: 199.99,
      originalPrice: 249.99,
      category: "UPVC Windows",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='80' y='80' width='300' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
      gallery: [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='80' y='80' width='300' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23bae6fd'/%3E%3Crect x='50' y='50' width='400' height='300' rx='10' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='80' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='270' y='80' width='150' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='80' y='80' width='300' height='240' rx='5' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E"
      ],
      description: "Our Classic Casement UPVC Window combines traditional design with modern UPVC frame technology. This window opens outward with a simple crank handle, allowing for maximum ventilation and easy cleaning. The UPVC frame ensures durability and energy efficiency while maintaining the timeless appeal of casement windows.",
      features: [
        "Easy Operation Crank Handle",
        "Maximum Ventilation",
        "Security Locks",
        "Child Safety Features",
        "Energy Efficient",
        "Weather Resistant",
        "Low Maintenance"
      ],
      specifications: {
        material: "UPVC",
        frame_thickness: "68mm",
        glass_type: "Tempered",
        glass_thickness: "6mm",
        dimensions: "Standard sizes available from 2ft x 3ft to 5ft x 6ft",
        color: "White (custom colors available)",
        warranty: "8 years",
        weight: "38 kg (approx.)"
      },
      inStock: true,
      rating: 4.7,
      reviewsCount: 98
    }
  };

  // Get the product data based on the ID
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            <a href="/products" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Calculate discount percentage
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Breadcrumb */}
          <div className="px-6 py-4 border-b border-gray-200">
            <nav className="text-sm">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                  <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </li>
                <li className="flex items-center">
                  <a href="/products" className="text-blue-600 hover:text-blue-800">Products</a>
                  <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </li>
                <li className="flex items-center">
                  <a href={`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-800">{product.category}</a>
                  <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-500">{product.name}</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Product Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center justify-center h-96">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={500}
                    height={400}
                    className="object-contain max-h-96"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((img, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-2 flex items-center justify-center h-24 cursor-pointer hover:ring-2 ring-blue-500">
                      <Image 
                        src={img} 
                        alt={`Product view ${index + 1}`}
                        width={100}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{product.rating} ({product.reviewsCount} reviews)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="ml-3 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      <span className="ml-3 bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded">
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                
                {/* Availability */}
                <div className="mb-6">
                  <div className="flex items-center">
                    {product.inStock ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-600 font-medium">In Stock</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-600 font-medium">Out of Stock</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-8">{product.description}</p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="text-gray-600 w-1/2 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-gray-800 w-1/2 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Add to Cart */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-4 py-3 text-gray-600 hover:bg-gray-100">-</button>
                    <input 
                      type="number" 
                      min="1" 
                      defaultValue="1" 
                      className="w-16 text-center border-y border-gray-300 py-3" 
                    />
                    <button className="px-4 py-3 text-gray-600 hover:bg-gray-100">+</button>
                  </div>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Related product would be fetched from backend in a real app */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-4">
                <Image 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E" 
                  alt="Related product" 
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium">UPVC Windows</div>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">Modern Bay UPVC Window</h3>
                <p className="text-gray-600 text-sm mb-4">Expansive design that maximizes natural light.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-700">$399.99</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-4">
                <Image 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='80' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='120' y='40' width='80' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='100' width='160' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E" 
                  alt="Related product" 
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium">UPVC Windows</div>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">Tilt & Turn UPVC Window</h3>
                <p className="text-gray-600 text-sm mb-4">Versatile system for optimal ventilation.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-700">$329.99</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-4">
                <Image 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='100' width='200' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E" 
                  alt="Related product" 
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium">UPVC Windows</div>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">Double-Glazed UPVC Window</h3>
                <p className="text-gray-600 text-sm mb-4">Superior insulation and noise reduction.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-700">$349.99</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-4">
                <Image 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E" 
                  alt="Related product" 
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium">Steel Windows</div>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">MS Steel Window</h3>
                <p className="text-gray-600 text-sm mb-4">Heavy-duty construction for security.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-700">$299.99</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}