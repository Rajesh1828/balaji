import React from "react";

const AboutOverView = () => {
  const features = [
    {
      id: 1,
      title: "100% SAFE & SECURE PAYMENTS",
      subtitle: "Encrypted checkout & trusted gateways",
      aria: "Safe and secure payments",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c.667 0 1 .333 1 1v2.5a2 2 0 0 1-4 0V12c0-.667.333-1 1-1h2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11V9a5 5 0 0 1 10 0v2"
          />
          <rect
            x="4"
            y="11"
            width="16"
            height="8"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "7 DAYS RETURN",
      subtitle: "Hassle-free returns within 7 days",
      aria: "7 days return policy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M3 11h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "FREE SHIPPING",
      subtitle: "On orders above ₹999",
      aria: "Free shipping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h13l4 4v6a1 1 0 0 1-1 1h-1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "HELP CENTRE",
      subtitle: "24/7 support & live chat",
      aria: "Help centre support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15a2 2 0 0 1-2 2h-1l-3 3v-3H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v.01" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* TOP SECTION */}
      <div className="px-4 py-6 w-full mx-auto">
        <h2 className="font-bold text-xl md:text-2xl">
          Balaji PhotoFrames: A Home For All Handcrafted Items
        </h2>

        <div className="space-y-3 mt-4">
          <p className="text-gray-500 text-sm md:text-base">
            Balaji Photo Frame's origins arrive from Rajasthani Karigar who
            have equipped us with handmade articles since the beginning. We
            recognize that hand-made gifts carry deep thought and craftsmanship.
            Our Indian handicrafts are celebrated worldwide for their cultural
            heritage.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Balaji Photo Frame is the most trusted website for handmade gifts.
            Each item is crafted using traditional techniques, making every
            product unique and special.
          </p>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="px-4 py-6 w-full mx-auto">
        <h2 className="font-bold text-xl md:text-2xl">
          Get Handcrafted Products Delivered to Your Doorstep
        </h2>

        <div className="space-y-3 mt-4">
          <p className="text-gray-500 text-sm md:text-base">
            Balaji Photo Frame's origins arrive from Rajasthani Karigar who
            have equipped us with handmade articles from the very beginning.
          </p>

          <p className="text-gray-500 text-sm md:text-base">
            Every product is crafted using renowned traditional techniques,
            ensuring authenticity and uniqueness.
          </p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-4 rounded-xl border hover:shadow-md transition"
            >
              <div className="p-3 bg-gray-100 rounded-full mb-2">
                {feature.icon}
              </div>
              <h3 className="font-bold text-red-500 text-sm md:text-base">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutOverView;
