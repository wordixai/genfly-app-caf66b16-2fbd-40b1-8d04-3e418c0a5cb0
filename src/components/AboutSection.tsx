const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-green-800 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Café Aroma began as a small passion project by two friends who shared a love for exceptional coffee and warm hospitality.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we've grown into a beloved community gathering place, while maintaining our commitment to quality, sustainability, and creating memorable experiences.
            </p>
            <p className="text-lg text-gray-600">
              Every cup we serve and every pastry we bake reflects our dedication to craftsmanship and our belief that the best things in life should be savored slowly.
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-800">10+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-800">5</h3>
                <p className="text-gray-600">Locations</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-800">100%</h3>
                <p className="text-gray-600">Organic Beans</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Cafe barista" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-800 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;