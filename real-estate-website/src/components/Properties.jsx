import PropertyCard from "./PropertyCard";

const data = [
  {
    image: "/house1.jpg",
    title: "Modern Family House",
    location: "Los Angeles, CA",
    price: "$1,200,000",
  },
  {
    image: "/house2.jpg",
    title: "Luxury Villa",
    location: "Miami, FL",
    price: "$2,300,000",
  },
  {
    image: "/house3.jpg",
    title: "Cozy Cottage",
    location: "Denver, CO",
    price: "$850,000",
  },
];

export default function Properties() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <PropertyCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
}
