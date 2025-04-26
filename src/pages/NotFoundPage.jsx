import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="animate-pulse text-6xl font-extrabold mb-4 text-red-500 drop-shadow-lg">
        404
      </div>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found!</h2>
      <p className="text-gray-300 mb-6 max-w-sm">Shuushhhh, Go Back!!!!!</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
