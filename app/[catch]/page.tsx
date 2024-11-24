import Link from "next/link";

export default function Home(){
    return (
        <div className=" flex flex-col items-center justify-center bg-gray-50 text-center p-4">
          <div className="text-6xl font-extrabold text-gray-800">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mt-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            The page you are looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-6">
            <p className="text-xl text-blue-600 font-semibold">
              Coming Soon...
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      );
}