


function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Company Info</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
  
          {/* Customer Support */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Customer Support</h2>
            <ul>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Order Tracking</li>
              <li>Payment Methods</li>
            </ul>
          </div>
  
          {/* Shop Categories */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Shop Categories</h2>
            <ul>
              <li>Sports Apparel</li>
              <li>Fitness Equipment</li>
              <li>Outdoor Gear</li>
              <li>Accessories</li>
            </ul>
          </div>
  
          {/* Stay Connected */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full md:w-auto text-gray-800 rounded"
              />
              <button className="mt-2 p-2 w-full md:w-auto bg-blue-600 rounded text-white">
                Subscribe
              </button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <p className="text-center mt-8">
          &copy; {new Date().getFullYear()} Sports Equipment Store. All rights
          reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  