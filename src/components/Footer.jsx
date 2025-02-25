function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Task Management Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Task Management</h2>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>Task Dashboard</li>
            <li>My Profile</li>
            <li>Settings</li>
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
            <i className="fab fa-facebook-f text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-linkedin-in text-xl"></i>
            <i className="fab fa-github text-xl"></i>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} Task Management System. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
