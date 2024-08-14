

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-white font-semibold text-3xl mb-4">Book Store</h5>
            <p className="text-sm w-[95%] ">
              Welcome to Book Haven, your number one source for all things books. We are dedicated to giving you the very best of literature, with a focus on variety, quality, and customer service.
            </p>
          </div>

          {/* Categories Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-white font-semibold mb-4">Categories</h5>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Fiction</a></li>
              <li><a href="#" className="hover:underline">Non-Fiction</a></li>
              <li><a href="#" className="hover:underline">Science & Technology</a></li>
              <li><a href="#" className="hover:underline">Programming</a></li>
              <li><a href="#" className="hover:underline">Biographies</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-white font-semibold mb-4">Customer Service</h5>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="text-white font-semibold mb-4">Newsletter</h5>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form action="#">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 mb-2 bg-gray-700 border border-gray-600 text-gray-200 rounded"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">© 2024 Book Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
