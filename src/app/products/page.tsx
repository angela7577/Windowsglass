'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductsPage() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Show 8 products per page

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
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Sliding UPVC Window",
      category: "UPVC Windows",
      price: 249.99,
      description: "Space-saving sliding window with superior sealing technology and energy efficiency.",
      image: "/images/products/sliding-upvc-window.webp",
      features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Sound Insulation"]
    },
    {
      id: 2,
      name: "Classic Casement UPVC Window",
      category: "UPVC Windows",
      price: 199.99,
      description: "Traditional casement design with modern UPVC frame for durability and insulation.",
      image: "/images/products/casement-upvc-window.webp",
      features: ["Easy Operation", "Maximum Ventilation", "Security Locks", "Child Safety"]
    },
    {
      id: 3,
      name: "Modern Bay UPVC Window",
      category: "UPVC Windows",
      price: 399.99,
      description: "Expansive bay window design that maximizes natural light and creates spaciousness.",
      image: "/images/products/bay-upvc-window.webp",
      features: ["Natural Light", "Architectural Appeal", "Thermal Efficiency", "Waterproof"]
    },
    {
      id: 4,
      name: "Tilt & Turn UPVC Window",
      category: "UPVC Windows",
      price: 329.99,
      description: "Versatile window system offering both tilting and turning functions for optimal ventilation.",
      image: "/images/products/tilt-turn-upvc-window.webp",
      features: ["Dual Function", "Easy Cleaning", "Security", "Ventilation Control"]
    },
    {
      id: 5,
      name: "Double-Glazed UPVC Window",
      category: "UPVC Windows",
      price: 349.99,
      description: "Advanced double-glazing technology for superior insulation and noise reduction.",
      image: "/images/products/double-glazed-upvc-window.webp",
      features: ["Energy Efficient", "Noise Reduction", "Condensation Control", "UV Protection"]
    },
    {
      id: 6,
      name: "MS Steel Window",
      category: "Steel Windows",
      price: 299.99,
      description: "Heavy-duty steel construction for maximum strength and security in industrial applications.",
      image: "/images/products/ms-steel-window.webp",
      features: ["High Strength", "Security", "Fire Resistance", "Durability"]
    },
    {
      id: 7,
      name: "Industrial Steel Window",
      category: "Steel Windows",
      price: 449.99,
      description: "Designed for demanding environments with enhanced structural integrity and security.",
      image: "/images/products/industrial-steel-window.webp",
      features: ["Extreme Durability", "Security", "Weather Resistant", "Maintenance Free"]
    },
    {
      id: 8,
      name: "Designer Steel Frame Window",
      category: "Steel Windows",
      price: 599.99,
      description: "Architecturally elegant steel frames with slim profiles and contemporary aesthetics.",
      image: "/images/products/designer-steel-window.webp",
      features: ["Slim Profile", "Architectural Design", "Strength", "Customizable"]
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products', link: '/products' },
    { id: 'upvc', name: 'UPVC Windows', link: '/products/upvc' },
    { id: 'steel', name: 'Steel Windows', link: '/products/steel' },
    { id: 'micro', name: 'Micro Windows', link: '/products/micro' },
    { id: 'soft', name: 'Soft Windows', link: '/products/soft' },
    { id: 'sliding', name: 'Sliding Windows', link: '/products/upvc/sliding' },
    { id: 'casement', name: 'Casement Windows', link: '/products/upvc/casement' }
  ];

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Window Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of high-quality windows designed for residential and commercial applications.
            Each product combines superior craftsmanship with advanced technology for optimal performance.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <Link 
                key={category.id}
                href={category.link}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-gray-800 font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentProducts.map(product => (
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
                <div className="text-sm text-blue-600 font-medium">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-700 mb-3">${product.price.toFixed(2)}</div>
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
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={addedProducts[product.id]}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors disabled:bg-green-700 flex items-center justify-center"
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
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button 
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-2 rounded-lg font-medium ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}