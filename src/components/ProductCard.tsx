'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  color?: string;
}

export default function ProductCard({ product, color = 'blue' }: ProductCardProps) {
  const { dispatch } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || '/placeholder-window.jpg'
      }
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className={`flex items-center justify-center bg-${color}-50`}>
          <Image 
            src={product.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='360' height='260' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='2'/%3E%3Crect x='40' y='40' width='150' height='220' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='210' y='40' width='150' height='220' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E`}
            alt={product.name}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
          <p className={`text-3xl font-bold text-${color}-700 mb-4`}>${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`flex-1 bg-${color}-700 hover:bg-${color}-800 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-green-600 flex items-center justify-center`}
            >
              {addedToCart ? (
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
            <Link 
              href={`/products/${product.id}`} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
