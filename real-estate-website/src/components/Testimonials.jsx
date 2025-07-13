'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Yusuf Aymaz',
    title: 'UI UX Designer',
    image: '/sajibur.png',
    review:
      "Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations. We couldn't have done it without them!",
  },
  {
    name: 'Merve Demir',
    title: 'Interior Architect',
    image: '/emily.png',
    review:
      "Professional and supportive from start to finish. I truly felt heard and guided through the whole process.",
  },
  {
    name: 'Burak Avci',
    title: 'Software Engineer',
    image: '/marcus.png',
    review:
      "They matched me with the perfect property and made the paperwork effortless. Highly recommended!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  const { name, title, image, review } = testimonials[index];

  return (
    <section className="bg-white w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What our clients say <br /> about us
        </h2>
        <div className="flex justify-center mb-6 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-green-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 rounded-xl relative">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl"
          >
            ←
          </button>

          <img
            src={image}
            alt={name}
            className="w-56 h-56 rounded-xl object-cover mr-0 md:mr-8 mb-6 md:mb-0"
          />

          <div className="text-left max-w-xl">
            <div className="text-green-500 text-3xl mb-2">“</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{review}</p>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
