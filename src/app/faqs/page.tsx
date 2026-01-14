export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-12 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Find answers to common questions about our windows, services, and policies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* General Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">General Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What types of windows do you offer?</h3>
                <p className="text-gray-600">
                  We offer a comprehensive selection of windows to suit various needs and preferences. Our collection includes:
                  UPVC windows (sliding, casement, bay, tilt & turn, double-glazed), steel windows (MS steel, industrial, designer frames),
                  aluminum windows, wooden windows, and custom combinations. Each type is available in various sizes, colors, and configurations
                  to match your architectural style and functional requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How do I measure for window replacement?</h3>
                <p className="text-gray-600">
                  Proper measurement is crucial for a successful window installation. We recommend having our professionals measure your windows,
                  but if you're measuring yourself, measure the width at three points (top, middle, bottom) and the height at three points
                  (left, center, right). Use the smallest measurements and subtract ½ inch to allow for proper fitting. Always measure the rough
                  opening, not the existing window frame.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Can I customize my windows?</h3>
                <p className="text-gray-600">
                  Absolutely! We offer extensive customization options for all our window products. You can choose from various frame colors,
                  hardware finishes, glass types (clear, tinted, frosted, decorative), grid patterns, and special features like smart sensors
                  or integrated blinds. Our design consultants can help you create windows that perfectly complement your property's aesthetics
                  while meeting your functional needs.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How long do your windows last?</h3>
                <p className="text-gray-600">
                  The lifespan of our windows depends on the material and environmental factors, but our products are designed for longevity.
                  UPVC windows typically last 20-30 years, steel windows can last 30-50 years with proper maintenance, and aluminum windows
                  last 20-40 years. All our windows are manufactured with high-quality materials and undergo rigorous testing to ensure
                  durability in various weather conditions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Installation Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Installation Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How long does the installation process take?</h3>
                <p className="text-gray-600">
                  The installation timeline varies based on the scope of work. Replacing a single window typically takes 30-60 minutes,
                  while a full home window replacement project usually takes 1-3 days. More complex installations, such as custom windows
                  or restoration projects, may take longer. During your initial consultation, we'll provide a detailed timeline specific
                  to your project.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Do I need to be home during installation?</h3>
                <p className="text-gray-600">
                  Yes, we recommend that you be present during the installation process. Our team will need access to your home to properly
                  install the windows and to address any questions that may arise. Additionally, you'll want to be available to inspect
                  the work and ensure everything meets your expectations. If you must be away, please arrange for someone to be present
                  who can make decisions on your behalf.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Will the installation disrupt my daily routine?</h3>
                <p className="text-gray-600">
                  We strive to minimize disruption during the installation process. Our professional installers work efficiently and
                  respectfully. While the installation of individual windows takes only minutes, the entire process may involve some
                  noise and temporary inconvenience. We recommend planning accordingly and securing pets and valuable items near the
                  work area. Most customers find the benefits of new windows far outweigh the brief installation period.
                </p>
              </div>
            </div>
          </div>
          
          {/* Warranty & Maintenance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Warranty & Maintenance</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What warranty do you provide?</h3>
                <p className="text-gray-600">
                  We stand behind our products with comprehensive warranties. Our standard warranty includes 10 years on UPVC windows,
                  15 years on steel windows, and 12 years on aluminum windows. The installation work is covered by a 5-year warranty.
                  Glass units are typically covered for 10 years. Extended warranty options are available for an additional fee.
                  All warranties are transferable to new homeowners.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How do I maintain my new windows?</h3>
                <p className="text-gray-600">
                  Maintaining your windows is straightforward and essential for longevity. Clean the glass monthly with a soft cloth
                  and mild detergent. Lubricate moving parts annually with silicone-based lubricant. Inspect seals and weatherstripping
                  twice yearly for wear or damage. Clean frames with appropriate cleaners based on material (mild soap for UPVC,
                  specialized metal cleaners for steel/aluminum). Check and tighten hardware periodically to ensure proper operation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's covered under warranty?</h3>
                <p className="text-gray-600">
                  Our warranty covers defects in materials and workmanship under normal use. This includes frame failure, seal failure,
                  hardware malfunction, and finish deterioration. The warranty does not cover damage from misuse, accidents, extreme
                  weather events, or normal wear and tear. Improper maintenance voids the warranty. For warranty claims, contact
                  us directly with proof of purchase and photos of the issue.
                </p>
              </div>
            </div>
          </div>
          
          {/* Energy Efficiency */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Energy Efficiency</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How do your windows improve energy efficiency?</h3>
                <p className="text-gray-600">
                  Our windows incorporate advanced energy-efficient technologies including double or triple glazing, low-E coatings,
                  argon gas fills, and insulated frames. These features work together to minimize heat transfer, reduce air leakage,
                  and prevent UV radiation from entering your home. Properly installed energy-efficient windows can reduce heating
                  and cooling costs by up to 25% while improving comfort year-round.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is U-factor and Solar Heat Gain Coefficient (SHGC)?</h3>
                <p className="text-gray-600">
                  The U-factor measures how well a window prevents heat from escaping. Lower U-factors indicate better insulating
                  properties. The SHGC measures how much solar heat passes through a window. For climates like ours, we recommend
                  windows with a U-factor of 0.30 or lower and an SHGC of 0.40 or lower for optimal energy efficiency. All our
                  windows meet or exceed ENERGY STAR requirements for your region.
                </p>
              </div>
            </div>
          </div>
          
          {/* Need More Help */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, our knowledgeable team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+17606468282" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: +1 (760) 646-8282
              </a>
              <a 
                href="/contact" 
                className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}