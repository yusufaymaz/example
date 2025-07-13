'use client';
import { useEffect, useRef } from 'react';

const images = [
  { src: '/gallery/animation1.png' },
  { src: '/gallery/illustration.png' },
  { src: '/gallery/print.png',  },
  { src: '/gallery/typography.png',  },
  { src: '/gallery/mobile.png',  },
  { src: '/gallery/webdesign.png',  },
  { src: '/gallery/product.png',  },
  { src: '/gallery/branding.png',  },
];

export default function ScrollingGallery() {
  const containerRef = useRef();

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-12">
      <div
        className="flex gap-8 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar px-4"
        ref={containerRef}
      >
        {[...images, ...images].map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-48">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
