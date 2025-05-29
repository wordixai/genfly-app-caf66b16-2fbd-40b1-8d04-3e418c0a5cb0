import { Button } from "./ui/button";

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", description: "Rich and intense single shot" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
      { name: "Latte", price: "$4.75", description: "Espresso with lots of steamed milk and light foam" },
      { name: "Cold Brew", price: "$5.25", description: "Slow-steeped for 24 hours, smooth and bold" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "$3.75", description: "Buttery, flaky French pastry" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Soft roll with cinnamon and cream cheese frosting" },
      { name: "Blueberry Muffin", price: "$3.95", description: "Made with fresh blueberries" },
      { name: "Chocolate Chip Cookie", price: "$2.95", description: "Soft-baked with premium chocolate" }
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-green-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We source the finest ingredients and prepare everything fresh daily. Our coffee beans are ethically sourced and roasted to perfection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between border-b border-gray-100 pb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-lg font-medium text-green-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-green-800 hover:bg-green-900">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;