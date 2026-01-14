import { NextRequest } from 'next/server';

// Sample product data - in a real application, this would come from a database
const products = [
  {
    id: 1,
    name: "Premium Sliding UPVC Window",
    category: "UPVC Windows",
    price: 249.99,
    description: "Space-saving sliding window with superior sealing technology and energy efficiency.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Sound Insulation"]
  },
  {
    id: 2,
    name: "Classic Casement UPVC Window",
    category: "UPVC Windows",
    price: 199.99,
    description: "Traditional casement design with modern UPVC frame for durability and insulation.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='160' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Easy Operation", "Maximum Ventilation", "Security Locks", "Child Safety"]
  },
  {
    id: 3,
    name: "Modern Bay UPVC Window",
    category: "UPVC Windows",
    price: 399.99,
    description: "Expansive bay window design that maximizes natural light and creates spaciousness.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='60' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='100' y='40' width='60' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='160' y='40' width='60' height='120' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Natural Light", "Architectural Appeal", "Thermal Efficiency", "Waterproof"]
  },
  {
    id: 4,
    name: "Tilt & Turn UPVC Window",
    category: "UPVC Windows",
    price: 329.99,
    description: "Versatile window system offering both tilting and turning functions for optimal ventilation.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='80' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='120' y='40' width='80' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='100' width='160' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Dual Function", "Easy Cleaning", "Security", "Ventilation Control"]
  },
  {
    id: 5,
    name: "Double-Glazed UPVC Window",
    category: "UPVC Windows",
    price: 349.99,
    description: "Advanced double-glazing technology for superior insulation and noise reduction.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='100' width='200' height='60' rx='3' fill='%23e0f2fe' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Energy Efficient", "Noise Reduction", "Condensation Control", "UV Protection"]
  },
  {
    id: 6,
    name: "MS Steel Window",
    category: "Steel Windows",
    price: 299.99,
    description: "Heavy-duty steel construction for maximum strength and security in industrial applications.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='100' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='140' y='40' width='100' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["High Strength", "Security", "Fire Resistance", "Durability"]
  },
  {
    id: 7,
    name: "Industrial Steel Window",
    category: "Steel Windows",
    price: 449.99,
    description: "Designed for demanding environments with enhanced structural integrity and security.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='60' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='100' y='40' width='60' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='160' y='40' width='60' height='120' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Extreme Durability", "Security", "Weather Resistant", "Maintenance Free"]
  },
  {
    id: 8,
    name: "Designer Steel Frame Window",
    category: "Steel Windows",
    price: 599.99,
    description: "Architecturally elegant steel frames with slim profiles and contemporary aesthetics.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23bae6fd'/%3E%3Crect x='20' y='20' width='260' height='160' rx='5' fill='%23ffffff' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='40' width='80' height='60' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='120' y='40' width='80' height='60' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3Crect x='40' y='100' width='160' height='60' rx='3' fill='%23cbd5e1' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E",
    features: ["Slim Profile", "Architectural Design", "Strength", "Customizable"]
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || '';

    // Filter products based on search query and category
    let filteredProducts = products;

    if (query) {
      const searchTerm = query.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm))
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Search error:', error);
    return new Response(JSON.stringify({ error: 'Failed to search products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}