import Image from "next/image";

const RecentSection = () => {
  const recentItems = [
    {
      image: "/hero.jpg", // Replace with your image path
      title: "Passion in Fashion",
      description: "Discover bold, trendsetting designs.",
    },
    {
      image: "/hero.jpg",
      title: "Runway Red",
      description: "Symbolizing power and confidence.",
    },
    {
      image: "/hero.jpg",
      title: "Bold Red Attire",
      description: "Gracing the runway with elegance.",
    },
    {
      image: "/hero.jpg",
      title: "Couture in Crimson",
      description: "Making a statement with every detail.",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recent Edition
        </h2>

        <div className="flex flex-col items-center space-y-16">
          {recentItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-center w-full lg:w-10/12 space-y-6 lg:space-y-0 lg:space-x-10`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentSection;
