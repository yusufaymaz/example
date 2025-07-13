const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-black">Dribbble</div>
          <div className="flex flex-wrap gap-4 text-black font-medium">
            <a href="#">For designers</a>
            <a href="#">Hire talent</a>
            <a href="#">Inspiration</a>
            <a href="#">Advertising</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
          </div>
        </div>

        
        <div className="flex items-center gap-4 text-xl text-gray-800">
          <a href="https://twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://pinterest.com" target="_blank">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <div className="flex flex-wrap gap-4">
          
         
        </div>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <a href="#">Resources</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
