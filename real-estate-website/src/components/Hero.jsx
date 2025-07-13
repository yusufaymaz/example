export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/hero.jpg')" }}>
      
      {}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-300 rounded-full filter blur-2xl opacity-30"></div>

      {}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Build Your Future,<br />
          One Property at a Time.
        </h1>

        

      </div>
    </section>
  );
}

