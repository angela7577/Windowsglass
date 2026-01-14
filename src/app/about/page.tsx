import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-12 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About WindowGlassWorks.com</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Your trusted partner for premium quality windows and exceptional service
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <svg viewBox="0 0 500 400" className="w-full h-full">
              {/* Building with windows illustration */}
              <rect x="50" y="80" width="400" height="280" fill="#3b82f6" rx="10"/>
              <rect x="50" y="80" width="400" height="280" fill="url(#buildingGrad)" rx="10"/>
              
              {/* Windows grid */}
              <rect x="80" y="110" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="160" y="110" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="240" y="110" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="320" y="110" width="60" height="50" fill="#93c5fd" rx="5"/>
              
              <rect x="80" y="180" width="60" height="50" fill="#bfdbfe" rx="5"/>
              <rect x="160" y="180" width="60" height="50" fill="#bfdbfe" rx="5"/>
              <rect x="240" y="180" width="60" height="50" fill="#bfdbfe" rx="5"/>
              <rect x="320" y="180" width="60" height="50" fill="#bfdbfe" rx="5"/>
              
              <rect x="80" y="250" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="160" y="250" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="240" y="250" width="60" height="50" fill="#93c5fd" rx="5"/>
              <rect x="320" y="250" width="60" height="50" fill="#93c5fd" rx="5"/>
              
              {/* Door */}
              <rect x="200" y="290" width="80" height="70" fill="#1e40af" rx="5"/>
              <circle cx="265" cy="325" r="4" fill="#fbbf24"/>
              
              {/* Sun */}
              <circle cx="420" cy="100" r="30" fill="#fbbf24" opacity="0.8"/>
              
              {/* Clouds */}
              <ellipse cx="100" cy="60" rx="40" ry="20" fill="#e0f2fe" opacity="0.7"/>
              <ellipse cx="350" cy="50" rx="50" ry="25" fill="#e0f2fe" opacity="0.7"/>
              
              <defs>
                <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2005, WindowGlassWorks.com has been at the forefront of the architectural window industry, 
              dedicated to providing superior quality windows that enhance the beauty, comfort, and energy efficiency 
              of homes and commercial buildings.
            </p>
            <p className="text-gray-600 mb-4">
              With over 18 years of experience, we have successfully completed thousands of installations across 
              the United States, earning a reputation for excellence, reliability, and customer satisfaction. Our 
              commitment to innovation and quality has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600">
              We specialize in manufacturing and installing a wide range of window solutions, including UPVC, 
              aluminum, steel, and custom wooden windows. Each product is crafted with precision and attention 
              to detail, ensuring durability and aesthetic appeal.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, energy-efficient, and aesthetically pleasing window solutions that enhance 
              the comfort and value of residential and commercial properties while maintaining the highest 
              standards of quality and customer service.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of premium window solutions, recognized for our innovation, quality, 
              and commitment to sustainability. We strive to set industry standards and contribute to creating 
              more energy-efficient and environmentally friendly buildings.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Window Manufacturing</h3>
              <p className="text-gray-600">
                We design and manufacture a wide range of windows using premium materials and advanced technology.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Installation</h3>
              <p className="text-gray-600">
                Our skilled technicians provide precise and efficient installation services for all window types.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Maintenance & Repair</h3>
              <p className="text-gray-600">
                Comprehensive maintenance and repair services to ensure your windows remain in optimal condition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored window solutions to match your architectural style and specific requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Efficiency Consulting</h3>
              <p className="text-gray-600">
                Expert advice on selecting windows that maximize energy efficiency and reduce utility costs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Warranty & Support</h3>
              <p className="text-gray-600">
                Comprehensive warranty coverage and ongoing support for all our products and services.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="35" r="18" fill="#1e40af"/>
                  <path d="M 20 80 Q 20 55 50 55 Q 80 55 80 80 L 80 100 L 20 100 Z" fill="#1e40af"/>
                  <circle cx="50" cy="35" r="15" fill="#dbeafe"/>
                  <ellipse cx="50" cy="70" rx="25" ry="30" fill="#3b82f6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Robert Johnson</h3>
              <p className="text-blue-600">CEO & Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="35" r="18" fill="#6b21a8"/>
                  <path d="M 20 80 Q 20 55 50 55 Q 80 55 80 80 L 80 100 L 20 100 Z" fill="#6b21a8"/>
                  <circle cx="50" cy="35" r="15" fill="#f3e8ff"/>
                  <ellipse cx="50" cy="70" rx="25" ry="30" fill="#9333ea"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Williams</h3>
              <p className="text-blue-600">Operations Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="35" r="18" fill="#15803d"/>
                  <path d="M 20 80 Q 20 55 50 55 Q 80 55 80 80 L 80 100 L 20 100 Z" fill="#15803d"/>
                  <circle cx="50" cy="35" r="15" fill="#dcfce7"/>
                  <ellipse cx="50" cy="70" rx="25" ry="30" fill="#16a34a"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Michael Torres</h3>
              <p className="text-blue-600">Technical Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="35" r="18" fill="#9f1239"/>
                  <path d="M 20 80 Q 20 55 50 55 Q 80 55 80 80 L 80 100 L 20 100 Z" fill="#9f1239"/>
                  <circle cx="50" cy="35" r="15" fill="#fce7f3"/>
                  <ellipse cx="50" cy="70" rx="25" ry="30" fill="#db2777"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Emily Chen</h3>
              <p className="text-blue-600">Sales Director</p>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Awards & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <circle cx="50" cy="50" r="35" fill="#fff" stroke="#16a34a" strokeWidth="3"/>
                  <path d="M 40 50 L 45 55 L 60 40" stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 30 25 L 50 15 L 70 25" fill="#16a34a"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm font-semibold">Energy Star Certified</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <rect x="25" y="30" width="50" height="50" fill="#fff" stroke="#2563eb" strokeWidth="3" rx="5"/>
                  <text x="50" y="60" fontSize="24" fill="#2563eb" fontWeight="bold" textAnchor="middle">AA</text>
                  <path d="M 35 20 L 50 10 L 65 20" fill="#2563eb"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm font-semibold">AAMA Certified</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <circle cx="50" cy="50" r="35" fill="#fff" stroke="#ea580c" strokeWidth="3"/>
                  <polygon points="50,25 55,40 70,40 58,50 62,65 50,55 38,65 42,50 30,40 45,40" fill="#ea580c"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm font-semibold">NFRC Certified</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <circle cx="50" cy="50" r="35" fill="#fff" stroke="#059669" strokeWidth="3"/>
                  <path d="M 50 25 L 55 35 L 65 35 L 57 43 L 60 53 L 50 47 L 40 53 L 43 43 L 35 35 L 45 35 Z" fill="#059669"/>
                  <circle cx="50" cy="65" r="8" fill="#059669"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm font-semibold">Green Building Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}