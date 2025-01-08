import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-full max-w-5xl p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
          <span className="text-rose-500 font-bold">WMH</span> INDIA <br />{' '}
          <span className="font-light text-lg">Sports | Events | Talents | Management</span>
        </h1>
        
        {/* Subscription Form */}
        <div className="mt-0 bg-black bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <form className="space-y-2 w-full flex flex-col items-center">
            {/* Email Input */}
            <div className="w-full flex justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-64 p-2 text-sm rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
            </div>

            {/* Subscribe Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-64 py-2 text-sm rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition duration-300"
              >
                Subscribe
              </button>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                id="privacy-policy"
                className="h-3 w-3 text-red-600 border-gray-600 focus:ring-red-500"
                required
              />
              <label htmlFor="privacy-policy" className="text-gray-200 text-xs">
                I’ve read and accept the{' '}
                <a href="#" className="text-red-500 underline">
                  Privacy Policy
                </a>.
              </label>
            </div>
          </form>
        </div>
        
        {/* Image Grid */}
        <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Image 1 */}
          <div className="relative group animation-zigzag">
            <Image
              src="/hero.jpg" // Replace with your image paths
              alt="Fashion Image 1"
              layout="responsive"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">This is a description for Image 1.</p>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative group animation-zigzag">
            <Image
              src="/hero.jpg" // Replace with your image paths
              alt="Fashion Image 2"
              layout="responsive"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">This is a description for Image 2.</p>
            </div>
          </div>
          {/* Image 3 */}
          <div className="relative group animation-zigzag">
            <Image
              src="/hero.jpg" // Replace with your image paths
              alt="Fashion Image 3"
              layout="responsive"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">This is a description for Image 3.</p>
            </div>
          </div>
          {/* Image 4 */}
          <div className="relative group animation-zigzag">
            <Image
              src="/hero.jpg" // Replace with your image paths
              alt="Fashion Image 4"
              layout="responsive"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">This is a description for Image 4.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
