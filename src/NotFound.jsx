import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-bold text-yellow-400">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-500">
        The page you are looking for might have been removed or doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-500 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
