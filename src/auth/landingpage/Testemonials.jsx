import React from "react";

const Testemonials = () => {
  return (
    <div>
      <section id="how" className="pb-20 bg-gray-800 justify-center text-white">
        <div className="px-6 sm:px-6 lg:px-16">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground ">
              Loved by Developers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              See what our community members have to say about DevFlow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[1, 2, 3].map((item, index) => {
              return (
                <div key={index} className="relative">
                  <div className="bg-gray-900 p-5 rounded-xl border hover:bg-gray-800 hover:shadow-lg transition ease-out duration-600 hover:border-blue-300 border-gray-200 h-full z-10 relative">
                    <p className="text-gray-500 leading-relaxed font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam suscipit facere laudantium cum provident
                      consectetur nesciunt.
                    </p>
                    <hr className="mt-3 border-gray-800" />
                    <div className="flex items-center gap-3 bg-[#0F172A] pt-3 rounded-lg w-max">
                      <img
                        src="https://avatars.dicebear.com/api/avataaars/jordan.svg"
                        alt="Profile Avatar"
                        className="w-10 h-10 rounded-full"
                      />

                      <div>
                        <h3 className="text-white font-semibold text-sm">
                          Jordan Lee
                        </h3>
                        <p className="text-gray-400 text-xs">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testemonials;
