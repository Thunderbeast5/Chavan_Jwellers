import { RevealOnScroll } from '../components/RevealOnScroll'

export function BrandStoryPage() {
  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Our Brand Story</h1>
      </RevealOnScroll>

      <div className="space-y-8">
        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">A Legacy of Excellence</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chavan Jewellers has been a trusted name in the jewelry industry for generations. 
              Our journey began with a simple vision: to create beautiful, high-quality silver jewelry that celebrates 
              tradition while embracing modern design sensibilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our humble beginnings in Nashik's historic Saraf Bazar, we have grown into one of the region's 
              most respected jewelry houses, serving customers who value craftsmanship, authenticity, and timeless elegance.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Craftsmanship</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every piece in our collection is crafted with meticulous attention to detail by skilled artisans 
              who have inherited their craft from generations of master jewellers. We use only the finest 
              quality silver and precious stones, ensuring that each creation meets our exacting standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our designs blend traditional Indian motifs with contemporary aesthetics, creating jewelry that 
              is both culturally significant and fashion-forward. From intricate filigree work to modern minimalist 
              pieces, our collection offers something for every taste and occasion.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Quality</h3>
                <p className="text-gray-700">
                  We never compromise on quality. Every piece undergoes rigorous quality checks to ensure 
                  it meets our high standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Trust</h3>
                <p className="text-gray-700">
                  Building lasting relationships with our customers through transparency, honesty, and 
                  exceptional service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Heritage</h3>
                <p className="text-gray-700">
                  Preserving and celebrating the rich cultural heritage of Indian jewelry making while 
                  innovating for the future.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-700">Community</h3>
                <p className="text-gray-700">
                  Supporting local artisans and contributing to the growth of our community through 
                  sustainable business practices.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Looking Forward</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As we continue our journey, we remain committed to our founding principles while embracing 
              new technologies and design trends. Our goal is to make beautiful, high-quality jewelry 
              accessible to everyone while maintaining the highest standards of craftsmanship and service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We invite you to be part of our story, to explore our collections, and to discover the 
              perfect piece that speaks to your heart and celebrates your unique style.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
