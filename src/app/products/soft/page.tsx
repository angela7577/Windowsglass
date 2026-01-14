'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function SoftWindowsPage() {
  const { dispatch } = useCart();
  const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});

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

  // Soft Windows product data - flexible, innovative window solutions
  const softProducts = [
    {
      id: 301,
      name: "Premium Vinyl Soft Window",
      price: 189.99,
      description: "Flexible vinyl window solution perfect for patios, gazebos, and outdoor enclosures. Roll-up design for seasonal use.",
      image: "/images/products/sliding-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f0fdfa' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%235eead4' stop-opacity='0.4'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2314b8a6'/%3E%3Cstop offset='100%25' stop-color='%230d9488'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23f0fdfa'/%3E%3Crect x='40' y='25' width='220' height='150' fill='url(%23sf1)' rx='6'/%3E%3Crect x='48' y='33' width='204' height='134' fill='%23ccfbf1' rx='4'/%3E%3Crect x='55' y='40' width='190' height='120' fill='url(%23sg1)' stroke='%230d9488' stroke-width='2' rx='3' stroke-dasharray='4,2'/%3E%3Cpath d='M 55 50 Q 150 45 245 50' stroke='%230d9488' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M 55 80 Q 150 75 245 80' stroke='%230d9488' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M 55 110 Q 150 105 245 110' stroke='%230d9488' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M 55 140 Q 150 135 245 140' stroke='%230d9488' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Crect x='60' y='45' width='30' height='35' fill='%23fff' opacity='0.3' rx='2'/%3E%3Crect x='180' y='95' width='40' height='30' fill='%23fff' opacity='0.25' rx='2'/%3E%3Crect x='135' y='33' width='30' height='8' fill='%23115e59' rx='3'/%3E%3Ccircle cx='150' cy='37' r='3' fill='%2314b8a6'/%3E%3Cpath d='M 140 28 Q 150 20 160 28' stroke='%2314b8a6' stroke-width='2' fill='none' opacity='0.6'/%3E%3Ctext x='150' y='182' font-size='11' font-weight='bold' fill='%23115e59' text-anchor='middle'%3EFLEXIBLE VINYL%3C/text%3E%3C/svg%3E",
      features: ["Roll-Up Design", "Weather Resistant", "UV Protection", "Easy Installation"],
      specs: {
        material: "Clear PVC Vinyl",
        thickness: "20 gauge",
        transparency: "Crystal Clear",
        warranty: "5 years"
      }
    },
    {
      id: 302,
      name: "Marine Grade Soft Window",
      price: 249.99,
      description: "Heavy-duty marine-grade soft window for boats, yachts, and waterfront properties. Saltwater resistant.",
      image: "/images/products/casement-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e0f2fe' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%2338bdf8' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230ea5e9'/%3E%3Cstop offset='100%25' stop-color='%230284c7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23e0f2fe'/%3E%3Crect x='35' y='30' width='230' height='140' fill='url(%23sf2)' rx='8'/%3E%3Crect x='43' y='38' width='214' height='124' fill='%23f0f9ff' rx='6'/%3E%3Cpath d='M 50 45 Q 157 40 257 45 L 257 155 Q 157 150 50 155 Z' fill='url(%23sg2)' stroke='%230284c7' stroke-width='3'/%3E%3Cpath d='M 50 70 Q 157 68 257 70' stroke='%23075985' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='8,4'/%3E%3Cpath d='M 50 95 Q 157 93 257 95' stroke='%23075985' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='8,4'/%3E%3Cpath d='M 50 120 Q 157 118 257 120' stroke='%23075985' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='8,4'/%3E%3Cpath d='M 50 145 Q 157 143 257 145' stroke='%23075985' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='8,4'/%3E%3Crect x='60' y='52' width='28' height='32' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='190' y='105' width='35' height='28' fill='%23fff' opacity='0.3' rx='2'/%3E%3Ccircle cx='250' cy='50' r='8' fill='%23fbbf24'/%3E%3Cpath d='M 245 45 L 250 50 L 255 45' stroke='%23fff' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='250' cy='150' r='8' fill='%23fbbf24'/%3E%3Cpath d='M 245 155 L 250 150 L 255 155' stroke='%23fff' stroke-width='1.5' fill='none'/%3E%3Cpath d='M 70 180 Q 80 175 90 180 Q 100 185 110 180 Q 120 175 130 180' stroke='%230284c7' stroke-width='2' fill='none' opacity='0.5'/%3E%3Ctext x='150' y='192' font-size='10' font-weight='bold' fill='%23075985' text-anchor='middle'%3EMARINE GRADE%3C/text%3E%3C/svg%3E",
      features: ["Saltwater Proof", "Heavy Duty", "Zipper System", "Anti-Mildew"],
      specs: {
        material: "Marine PVC",
        thickness: "40 gauge",
        transparency: "High Clarity",
        warranty: "7 years"
      }
    },
    {
      id: 303,
      name: "Insulated Soft Window Panel",
      price: 219.99,
      description: "Thermal-insulated soft window with dual-layer construction for climate control in outdoor living spaces.",
      image: "/images/products/bay-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fff7ed' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%23fdba74' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf3' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f97316'/%3E%3Cstop offset='100%25' stop-color='%23ea580c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23fff7ed'/%3E%3Crect x='45' y='28' width='210' height='144' fill='url(%23sf3)' rx='6'/%3E%3Crect x='52' y='35' width='196' height='130' fill='%23ffedd5' rx='5'/%3E%3Crect x='58' y='41' width='184' height='118' fill='url(%23sg3)' stroke='%23ea580c' stroke-width='2.5' rx='3'/%3E%3Crect x='62' y='45' width='176' height='110' fill='none' stroke='%23fb923c' stroke-width='1' stroke-dasharray='6,3' opacity='0.6' rx='2'/%3E%3Crect x='68' y='52' width='26' height='35' fill='%23fff' opacity='0.3' rx='2'/%3E%3Crect x='175' y='100' width='35' height='28' fill='%23fff' opacity='0.25' rx='2'/%3E%3Cpath d='M 58 70 L 242 70 M 58 90 L 242 90 M 58 110 L 242 110 M 58 130 L 242 130' stroke='%23c2410c' stroke-width='0.8' opacity='0.3'/%3E%3Cpath d='M 100 41 L 100 159 M 130 41 L 130 159 M 170 41 L 170 159 M 200 41 L 200 159' stroke='%23c2410c' stroke-width='0.8' opacity='0.3'/%3E%3Ccircle cx='75' cy='60' r='10' fill='%23dc2626' opacity='0.2'/%3E%3Ctext x='75' y='64' font-size='10' font-weight='bold' fill='%23dc2626' text-anchor='middle'%3ET%3C/text%3E%3Cpath d='M 140 25 L 145 32 L 155 32 L 148 37 L 151 44 L 145 39 L 139 44 L 142 37 L 135 32 L 145 32' fill='%23fbbf24' opacity='0.8'/%3E%3Ctext x='150' y='185' font-size='10' font-weight='bold' fill='%23c2410c' text-anchor='middle'%3EINSULATED DUAL-LAYER%3C/text%3E%3C/svg%3E",
      features: ["Thermal Insulation", "Dual Layer", "Energy Saving", "Condensation Proof"],
      specs: {
        material: "Insulated Vinyl",
        thickness: "30 gauge dual",
        transparency: "Translucent",
        warranty: "6 years"
      }
    },
    {
      id: 304,
      name: "Screen Soft Window Combo",
      price: 199.99,
      description: "Innovative soft window with integrated insect screen. Switch between clear vinyl and mesh for versatility.",
      image: "/images/products/tilt-turn-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f0fdf4' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%2386efac' stop-opacity='0.4'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf4' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2322c55e'/%3E%3Cstop offset='100%25' stop-color='%2316a34a'/%3E%3C/linearGradient%3E%3Cpattern id='mesh' x='0' y='0' width='8' height='8' patternUnits='userSpaceOnUse'%3E%3Crect width='8' height='8' fill='none'/%3E%3Cline x1='0' y1='0' x2='0' y2='8' stroke='%2316a34a' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='0' y1='0' x2='8' y2='0' stroke='%2316a34a' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23f0fdf4'/%3E%3Crect x='40' y='30' width='220' height='140' fill='url(%23sf4)' rx='6'/%3E%3Crect x='48' y='38' width='204' height='124' fill='%23dcfce7' rx='4'/%3E%3Crect x='55' y='45' width='90' height='110' fill='url(%23sg4)' stroke='%2316a34a' stroke-width='2' rx='2'/%3E%3Crect x='60' y='50' width='25' height='32' fill='%23fff' opacity='0.35' rx='1'/%3E%3Crect x='155' y='45' width='90' height='110' fill='url(%23mesh)' stroke='%2316a34a' stroke-width='2' rx='2'/%3E%3Cline x1='145' y1='80' x2='155' y2='90' stroke='%2316a34a' stroke-width='1.5' opacity='0.5'/%3E%3Cline x1='145' y1='100' x2='155' y2='110' stroke='%2316a34a' stroke-width='1.5' opacity='0.5'/%3E%3Cpath d='M 145 85 Q 150 88 145 91' stroke='%2316a34a' stroke-width='1.2' fill='none'/%3E%3Ctext x='100' y='170' font-size='9' font-weight='bold' fill='%23166534' text-anchor='middle'%3ECLEAR%3C/text%3E%3Ctext x='200' y='170' font-size='9' font-weight='bold' fill='%23166534' text-anchor='middle'%3EMESH%3C/text%3E%3Cpath d='M 120 175 L 130 175 L 127 178 L 130 175 L 127 172' stroke='%2316a34a' stroke-width='1.5' fill='none'/%3E%3Ctext x='150' y='192' font-size='10' font-weight='bold' fill='%23166534' text-anchor='middle'%3EDUAL-FUNCTION COMBO%3C/text%3E%3C/svg%3E",
      features: ["Screen & Vinyl", "Insect Protection", "Dual Function", "Easy Switch"],
      specs: {
        material: "Vinyl + Mesh",
        thickness: "20 gauge + screen",
        transparency: "Clear/Mesh",
        warranty: "5 years"
      }
    },
    {
      id: 305,
      name: "Commercial Soft Window Curtain",
      price: 299.99,
      description: "Industrial-grade soft window curtain for commercial spaces, warehouses, and loading docks. Heavy-duty performance.",
      image: "/images/products/double-glazed-upvc-window.webp", // was: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f5f5f5' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%23a3a3a3' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf5' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23737373'/%3E%3Cstop offset='100%25' stop-color='%23525252'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23f5f5f5'/%3E%3Crect x='30' y='25' width='240' height='150' fill='url(%23sf5)' rx='5'/%3E%3Crect x='38' y='33' width='224' height='134' fill='%23e5e5e5' rx='4'/%3E%3Crect x='45' y='40' width='70' height='120' fill='url(%23sg5)' stroke='%23525252' stroke-width='2.5' rx='2'/%3E%3Crect x='122' y='40' width='70' height='120' fill='url(%23sg5)' stroke='%23525252' stroke-width='2.5' rx='2'/%3E%3Crect x='199' y='40' width='46' height='120' fill='url(%23sg5)' stroke='%23525252' stroke-width='2.5' rx='2'/%3E%3Crect x='50' y='45' width='20' height='30' fill='%23fff' opacity='0.25' rx='1'/%3E%3Crect x='162' y='95' width='22' height='25' fill='%23fff' opacity='0.2' rx='1'/%3E%3Ccircle cx='60' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='80' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='100' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='137' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='157' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='177' cy='35' r='4' fill='%23525252'/%3E%3Ccircle cx='215' cy='35' r='4' fill='%23525252'/%3E%3Cpath d='M 115 50 L 122 50 M 115 70 L 122 70 M 115 90 L 122 90 M 115 110 L 122 110 M 115 130 L 122 130' stroke='%23525252' stroke-width='1.5'/%3E%3Cpath d='M 192 50 L 199 50 M 192 70 L 199 70 M 192 90 L 199 90 M 192 110 L 199 110 M 192 130 L 199 130' stroke='%23525252' stroke-width='1.5'/%3E%3Crect x='252' y='42' width='15' height='15' fill='%23fbbf24' opacity='0.8' rx='2'/%3E%3Cpath d='M 255 49 L 264 49' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M 255 52 L 264 52' stroke='%23000' stroke-width='2'/%3E%3Ctext x='150' y='185' font-size='10' font-weight='bold' fill='%23404040' text-anchor='middle'%3EINDUSTRIAL GRADE%3C/text%3E%3C/svg%3E",
      features: ["Heavy Duty", "Wind Resistant", "Temperature Control", "Easy Clean"],
      specs: {
        material: "PVC Strip",
        thickness: "80 gauge",
        transparency: "Semi-Clear",
        warranty: "10 years"
      }
    },
    {
      id: 306,
      name: "Decorative Soft Window",
      price: 229.99,
      description: "Tinted and patterned soft window for aesthetic appeal. Available in various colors for style and privacy.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fae8ff' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%23e879f9' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf6' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23d946ef'/%3E%3Cstop offset='100%25' stop-color='%23c026d3'/%3E%3C/linearGradient%3E%3Cpattern id='deco' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23c026d3' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23fae8ff'/%3E%3Crect x='45' y='30' width='210' height='140' fill='url(%23sf6)' rx='8'/%3E%3Crect x='53' y='38' width='194' height='124' fill='%23fdf4ff' rx='6'/%3E%3Crect x='60' y='45' width='180' height='110' fill='url(%23sg6)' stroke='%23c026d3' stroke-width='2.5' rx='4'/%3E%3Crect x='65' y='50' width='170' height='100' fill='url(%23deco)'/%3E%3Cpath d='M 80 70 Q 100 65 120 70 T 160 70 T 200 70' stroke='%23d946ef' stroke-width='2' fill='none' opacity='0.4'/%3E%3Cpath d='M 80 95 Q 100 90 120 95 T 160 95 T 200 95' stroke='%23d946ef' stroke-width='2' fill='none' opacity='0.4'/%3E%3Cpath d='M 80 120 Q 100 115 120 120 T 160 120 T 200 120' stroke='%23d946ef' stroke-width='2' fill='none' opacity='0.4'/%3E%3Crect x='70' y='55' width='28' height='30' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='180' y='105' width='32' height='25' fill='%23fff' opacity='0.3' rx='2'/%3E%3Ccircle cx='150' cy='100' r='15' fill='%23e879f9' opacity='0.3'/%3E%3Cpath d='M 145 100 L 150 95 L 155 100 L 150 105 Z' fill='%23fae8ff' opacity='0.6'/%3E%3Ctext x='150' y='178' font-size='10' font-weight='bold' fill='%23a21caf' text-anchor='middle'%3EDECORATIVE TINT%3C/text%3E%3Cpath d='M 220 50 L 225 45 M 225 50 L 230 45 M 230 50 L 235 45' stroke='%23e879f9' stroke-width='1.5' opacity='0.6'/%3E%3C/svg%3E",
      features: ["Colored Tint", "Decorative Pattern", "Privacy Control", "UV Block"],
      specs: {
        material: "Tinted Vinyl",
        thickness: "25 gauge",
        transparency: "Tinted",
        warranty: "5 years"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
            INNOVATIVE SOLUTION
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Soft Windows Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary flexible window solutions perfect for patios, gazebos, boats, and outdoor enclosures. 
            Enjoy the outdoors while staying protected from weather, with easy roll-up and seasonal versatility.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🌊</div>
            <h3 className="font-bold text-gray-800 mb-1">Weather Proof</h3>
            <p className="text-sm text-gray-600">Rain, wind & UV resistant</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold text-gray-800 mb-1">Roll-Up Design</h3>
            <p className="text-sm text-gray-600">Seasonal flexibility</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-bold text-gray-800 mb-1">Durable Material</h3>
            <p className="text-sm text-gray-600">Long-lasting vinyl</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-bold text-gray-800 mb-1">Custom Options</h3>
            <p className="text-sm text-gray-600">Various sizes & colors</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Soft Windows ({softProducts.length} Products)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {softProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48 bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-teal-600 font-medium">SOFT WINDOWS</div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Features:</h4>
                    <ul className="text-xs text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 p-3 bg-gray-50 rounded">
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Specifications:</h4>
                    <div className="text-xs text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Material:</span>
                        <span className="font-medium">{product.specs.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thickness:</span>
                        <span className="font-medium">{product.specs.thickness}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-teal-700">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-500">{product.specs.warranty} warranty</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedProducts[product.id]}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors disabled:bg-green-700 flex items-center justify-center"
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Areas */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Perfect For These Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🏡</div>
              <p className="text-sm font-medium text-gray-800">Patios & Porches</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⛵</div>
              <p className="text-sm font-medium text-gray-800">Boats & Yachts</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🏕️</div>
              <p className="text-sm font-medium text-gray-800">Gazebos</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🏭</div>
              <p className="text-sm font-medium text-gray-800">Warehouses</p>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            ← Browse All Window Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
