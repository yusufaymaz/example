export default function PropertyCard({ image, title, price, location }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-blue-600 font-bold text-lg mt-2">{price}</p>
      </div>
    </div>
  );
}
