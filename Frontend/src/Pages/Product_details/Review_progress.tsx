import React from "react";

const Review_progress = () => {
  const currentSkill = { title: "Skill 1", percent: 80 }; // Replace with your skill data
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset =
    circumference - (currentSkill.percent / 100) * circumference;

  const ratings = [
    { stars: 5, percent: 60 },
    { stars: 4, percent: 20 },
    { stars: 3, percent: 10 },
    { stars: 2, percent: 5 },
    { stars: 1, percent: 5 },
  ];

  return (
    <>
    <p className="px-10 text-xl font-bold">Shoe reviews</p>
      <div className="flex flex-wrap items-center gap-2">
        <div>
          <div className="flex items-center justify-center text-black">
            <div className="relative ">
              <svg className="transform -rotate-90 w-72 h-72">
                <circle
                  cx="145"
                  cy="145"
                  r="100"
                  stroke="currentColor"
                  strokeWidth="20"
                  fill="transparent"
                  className="text-gray-700 "
                />
                <circle
                  cx="145"
                  cy="145"
                  r="100"
                  stroke="currentColor"
                  strokeWidth="20"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="text-yellow-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-5xl">
                {`${currentSkill.percent}%`}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center">
              <span className="w-12 text-right">{rating.stars} star</span>
              <div className="w-56 h-4 bg-gray-300 ml-2">
                <div
                  className="h-4 bg-yellow-500"
                  style={{ width: `${rating.percent}%` }}
                ></div>
              </div>
              <span className="ml-2 text-black">{rating.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review_progress;
