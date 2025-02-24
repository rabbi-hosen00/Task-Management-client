import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;