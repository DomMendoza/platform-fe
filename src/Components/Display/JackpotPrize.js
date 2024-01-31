import React from "react";

function JackpotPrize({ providerData }) {
  const formattedNumber = providerData.jackpot.toLocaleString();

  return (
    <div className="border-2 border-red-600 flex flex-col justify-center items-center">
      <p className="text-2xl font-bold uppercase">
        {providerData.provider} slots jackpot
      </p>
      <div className="border-2 border-blue-600 p-5 rounded-lg flex justify-center items-center gap-2">
        {formattedNumber.split("").map((char, index) =>
          char === "," ? (
            <span key={index} className="text-3xl 2xl:text-5xl font-bold">
              {char}
            </span>
          ) : (
            <div
              key={index}
              className="bg-white shadow-[inset_0px_0px_10px_1px_#2D3748] p-3 2xl:p-5 rounded-lg"
            >
              <p className="text-3xl 2xl:text-5xl font-bold">{char}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default JackpotPrize;
