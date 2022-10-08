import React from "react";


const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-center text-white">
      {/* <div className="mx-auto bg-no-repeat bg-cover">
        <img src={sub} />
      </div> */}
      <div>
        <h1>Join our DeFi Community</h1>
        <div className="py-4">
          <input
            className="p-3 rounded-3xl mr-4"
            type="email"
            placeholder="Enter your email"
          />
          <button>Sign Up</button>
        </div>
        <div className="flex items-center justify-center py-2">
          <input className="" type="checkbox" />
          <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
