'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartItemCount } from '@/context/CartContext';
import { useAuth } from '@/context/auth/AuthContext';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = useCartItemCount();
  const { user } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+17606468282" className="hover:text-blue-300 transition-colors">
              📞 +17606468282
            </a>
            <span>🚚 Free Shipping Available</span>
          </div>
          <div>
            <span>📦 COD Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                {/* Window frame */}
                <rect x="10" y="10" width="80" height="80" rx="4" fill="#2563eb" stroke="#1e40af" strokeWidth="2"/>
                {/* Window panes */}
                <rect x="15" y="15" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="53" y="15" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="15" y="53" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="53" y="53" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
                {/* Center divider */}
                <line x1="50" y1="15" x2="50" y2="85" stroke="#1e40af" strokeWidth="2"/>
                <line x1="15" y1="50" x2="85" y2="50" stroke="#1e40af" strokeWidth="2"/>
                {/* Shine effect */}
                <path d="M20 20 L25 25" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
                <path d="M58 20 L63 25" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold text-blue-800">WindowGlassWorks.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            
            {/* Products Dropdown/Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                Products 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-96 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-200">
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-3">By Category</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">UPVC Windows</h4>
                          <ul className="space-y-2">
                            <li><Link href="/products/upvc/sliding" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Sliding UPVC Windows</Link></li>
                            <li><Link href="/products/upvc/casement" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Casement UPVC Windows</Link></li>
                            <li><Link href="/products/upvc/bay" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Bay UPVC Windows</Link></li>
                            <li><Link href="/products/upvc/tilt-turn" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Tilt & Turn UPVC Windows</Link></li>
                            <li><Link href="/products/upvc/double-glazed" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Double-Glazed UPVC Windows</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Steel Windows</h4>
                          <ul className="space-y-2">
                            <li><Link href="/products/steel/ms" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">MS Steel Windows</Link></li>
                            <li><Link href="/products/steel/industrial" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Industrial Steel Windows</Link></li>
                            <li><Link href="/products/steel/designer" className="text-gray-600 hover:text-blue-600 text-sm block py-1 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors">Designer Steel Frame Windows</Link></li>
                          </ul>
                          
                          <h4 className="font-semibold text-cyan-700 mb-2 mt-3">Specialty Windows</h4>
                          <ul className="space-y-2">
                            <li><Link href="/products/micro" className="text-gray-600 hover:text-cyan-600 text-sm block py-1 hover:bg-cyan-50 rounded px-2 -mx-2 transition-colors">Micro Windows</Link></li>
                            <li><Link href="/products/soft" className="text-gray-600 hover:text-teal-600 text-sm block py-1 hover:bg-teal-50 rounded px-2 -mx-2 transition-colors">Soft Windows</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="/faqs" className="text-gray-700 hover:text-blue-600 font-medium">FAQs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600 font-medium">My Account</Link>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search windows..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 text-gray-900"
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            
            {/* User Icon/Avatar */}
            <Link href="/account" className="text-gray-700 hover:text-blue-600 relative group">
              {user ? (
                // Logged in - show user initial in circle
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-2 border-blue-600 hover:border-blue-700 transition-colors">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                // Not logged in - show user icon
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {user ? user.name : 'Sign In'}
              </span>
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</Link>
              
              <div className="border-t pt-2">
                <button 
                  className="flex justify-between items-center w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                >
                  <span>Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div>
                      <h4 className="font-semibold text-blue-700 py-1">UPVC Windows</h4>
                      <ul className="space-y-1 pl-4">
                        <li><Link href="/products/upvc/sliding" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Sliding UPVC Windows</Link></li>
                        <li><Link href="/products/upvc/casement" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Casement UPVC Windows</Link></li>
                        <li><Link href="/products/upvc/bay" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Bay UPVC Windows</Link></li>
                        <li><Link href="/products/upvc/tilt-turn" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Tilt & Turn UPVC Windows</Link></li>
                        <li><Link href="/products/upvc/double-glazed" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Double-Glazed UPVC Windows</Link></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 py-1">Steel Windows</h4>
                      <ul className="space-y-1 pl-4">
                        <li><Link href="/products/steel/ms" className="text-gray-600 hover:text-blue-600 text-sm block py-1">MS Steel Windows</Link></li>
                        <li><Link href="/products/steel/industrial" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Industrial Steel Windows</Link></li>
                        <li><Link href="/products/steel/designer" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Designer Steel Frame Windows</Link></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-700 py-1">Specialty Windows</h4>
                      <ul className="space-y-1 pl-4">
                        <li><Link href="/products/micro" className="text-gray-600 hover:text-cyan-600 text-sm block py-1">Micro Windows</Link></li>
                        <li><Link href="/products/soft" className="text-gray-600 hover:text-teal-600 text-sm block py-1">Soft Windows</Link></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">About</Link>
              <Link href="/faqs" className="text-gray-700 hover:text-blue-600 font-medium py-2">FAQs</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact</Link>
              <Link href="/account" className="text-gray-700 hover:text-blue-600 font-medium py-2">My Account</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;