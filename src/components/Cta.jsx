import React from "react";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <section className="px-6 pb-40  max-w-6xl mx-auto">
        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 md:p-20 border border-blue-200 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to level up your coding skills?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers already using DevFlow to ask questions,
            share knowledge, and grow together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/signin")}
              className="px-8 py-4 rounded-full bg-blue-600 cursor-pointer text-white font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Join Now – It's Free
            </button>
            <button className="px-8 py-4 rounded-full border-2 cursor-pointer border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors text-lg">
              Explore Platform
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Start asking questions in seconds.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cta;
