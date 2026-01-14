import Link from 'next/link';

export default function CopyrightNotice() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Copyright Notice</h1>
            <p className="text-gray-600">
              Last Updated: January 13, 2026
            </p>
          </div>

          {/* Copyright Statement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyright Statement</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-gray-700 font-semibold mb-2">
                © {currentYear} WindowGlassWorks.com. All Rights Reserved.
              </p>
              <p className="text-gray-600">
                All content, materials, information, software, products, and services included on or 
                available through this website are protected by United States and international copyright, 
                trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </div>
          </section>

          {/* Protected Materials */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Protected Materials</h2>
            <p className="text-gray-600 mb-4">
              The following materials on this website are protected by copyright and other intellectual 
              property laws:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Website Design and Layout:</strong>
                  <p className="text-gray-600">All graphic design elements, page layouts, visual interfaces, and overall website appearance.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Text and Written Content:</strong>
                  <p className="text-gray-600">Product descriptions, articles, blog posts, FAQs, technical specifications, and all written materials.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Images and Photographs:</strong>
                  <p className="text-gray-600">Product images, installation photos, promotional graphics, and all visual media.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Logos and Trademarks:</strong>
                  <p className="text-gray-600">WindowGlassWorks.com name, logo, and all associated trademarks and service marks.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Software and Code:</strong>
                  <p className="text-gray-600">Website software, underlying code, scripts, and technical implementations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-800">Videos and Multimedia:</strong>
                  <p className="text-gray-600">Any video content, animations, audio files, and interactive media.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Permitted Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Permitted Use</h2>
            <p className="text-gray-600 mb-4">
              You are granted a limited, non-exclusive, non-transferable license to access and use this 
              website and its content for the following purposes only:
            </p>
            <div className="bg-green-50 p-6 rounded-lg space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Personal Use:</strong> Viewing and browsing the website for personal, non-commercial purposes
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Product Research:</strong> Researching products and services for potential purchase
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Printing:</strong> Printing individual pages for personal reference only
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Sharing Links:</strong> Sharing links to our website pages through social media or email
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prohibited Uses</h2>
            <p className="text-gray-600 mb-4">
              Without our express written permission, you may NOT:
            </p>
            <div className="bg-red-50 p-6 rounded-lg space-y-3">
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Reproduce, duplicate, copy, or republish any content from this website
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Sell, rent, sub-license, or otherwise commercialize any materials from the website
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Modify, adapt, or create derivative works based on our content
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Remove or alter any copyright notices, trademarks, or proprietary markings
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Use automated systems (bots, scrapers) to extract or copy content systematically
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Frame or mirror any content from this website on another website
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <p className="text-gray-700">
                  Use our content to compete with us or to promote competing products
                </p>
              </div>
            </div>
          </section>

          {/* Trademark Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trademark Information</h2>
            <p className="text-gray-600 mb-4">
              WindowGlassWorks.com™ and our logo are trademarks of WindowGlassWorks.com. Other product 
              and company names mentioned on this website may be trademarks of their respective owners.
            </p>
            <p className="text-gray-600">
              The use of any trademarks displayed on this website without our express written consent or 
              the consent of the trademark owner is strictly prohibited. Nothing on this website should 
              be construed as granting any license or right to use any trademark without the prior written 
              permission of the trademark owner.
            </p>
          </section>

          {/* User-Generated Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User-Generated Content</h2>
            <p className="text-gray-600 mb-4">
              If you submit content to our website (such as reviews, comments, photos, or testimonials), 
              you grant WindowGlassWorks.com a perpetual, worldwide, royalty-free, non-exclusive license to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Use, reproduce, modify, adapt, and publish your submitted content</li>
              <li>Display your content on our website and in our marketing materials</li>
              <li>Distribute your content through any media channels</li>
              <li>Allow others to view and share your content</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You represent and warrant that you own or control all rights to the content you submit, 
              and that your submission does not violate any third-party rights or applicable laws.
            </p>
          </section>

          {/* DMCA Notice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Digital Millennium Copyright Act (DMCA)</h2>
            <p className="text-gray-600 mb-4">
              WindowGlassWorks.com respects the intellectual property rights of others. If you believe 
              that your copyrighted work has been copied in a way that constitutes copyright infringement 
              and is accessible on our website, please notify our Copyright Agent with the following information:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-600">
              <p>1. Identification of the copyrighted work claimed to have been infringed</p>
              <p>2. Identification of the material that is claimed to be infringing</p>
              <p>3. Your contact information (address, telephone number, email)</p>
              <p>4. A statement that you have a good faith belief that use of the material is unauthorized</p>
              <p>5. A statement under penalty of perjury that the information is accurate</p>
              <p>6. Your physical or electronic signature</p>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700"><strong>Copyright Agent Contact:</strong></p>
              <p className="text-gray-600">Email: legal@windowglassworks.com</p>
              <p className="text-gray-600">Address: 101 Johnson St, Brooklyn, NY 11201, USA</p>
              <p className="text-gray-600">Phone: +17606468282</p>
            </div>
          </section>

          {/* License Requests */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requesting Permission to Use Our Content</h2>
            <p className="text-gray-600 mb-4">
              If you would like to use any of our copyrighted materials for purposes beyond personal use, 
              please submit a detailed request including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
              <li>Description of the material you wish to use</li>
              <li>How you intend to use the material</li>
              <li>Where the material will be published or displayed</li>
              <li>Duration of the intended use</li>
              <li>Your contact information</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Send permission requests to: <a href="mailto:permissions@windowglassworks.com" className="text-blue-600 hover:underline">permissions@windowglassworks.com</a>
            </p>
            <p className="text-gray-600">
              We will review your request and respond within 10 business days. Approval is at our sole 
              discretion and may be subject to conditions and fees.
            </p>
          </section>

          {/* Enforcement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyright Enforcement</h2>
            <p className="text-gray-600 mb-4">
              WindowGlassWorks.com actively protects its intellectual property rights. Unauthorized use 
              of our copyrighted materials may result in:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 space-y-2">
              <p className="text-gray-700">• Civil litigation for copyright infringement</p>
              <p className="text-gray-700">• Injunctions to prevent further unauthorized use</p>
              <p className="text-gray-700">• Recovery of damages, including statutory damages up to $150,000 per work</p>
              <p className="text-gray-700">• Recovery of attorney's fees and court costs</p>
              <p className="text-gray-700">• Criminal prosecution in cases of willful infringement for commercial advantage</p>
            </div>
          </section>

          {/* Changes to Notice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Notice</h2>
            <p className="text-gray-600">
              We reserve the right to modify this Copyright Notice at any time. Changes will be effective 
              immediately upon posting to this page. Your continued use of the website after any changes 
              constitutes your acceptance of the modified Copyright Notice.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Copyright Notice or our intellectual property policies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>WindowGlassWorks.com</strong></p>
              <p className="text-gray-600">101 Johnson St, Brooklyn, NY 11201, USA</p>
              <p className="text-gray-600">Phone: <a href="tel:+17606468282" className="text-blue-600 hover:underline">+17606468282</a></p>
              <p className="text-gray-600">Email: <a href="mailto:legal@windowglassworks.com" className="text-blue-600 hover:underline">legal@windowglassworks.com</a></p>
            </div>
          </section>

          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Related Legal Pages</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/policies/terms" className="text-blue-600 hover:text-blue-800 hover:underline">
                Terms of Use
              </Link>
              <Link href="/policies/privacy" className="text-blue-600 hover:text-blue-800 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/policies/refund-return" className="text-blue-600 hover:text-blue-800 hover:underline">
                Refund & Return Policy
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
