import React, { useEffect, useState } from "react";

//Redux
import { useSelector } from "react-redux";

function JackpotPrize() {
  const [jackpot, setJackpot] = useState("");
  const [provider, setProvider] = useState("");

  const { slotsGameData, active } = useSelector((state) => state.slots);

  useEffect(() => {
    const activeProvider = slotsGameData.find(
      (item) => item.provider === active.provider
    );

    if (activeProvider) {
      const formattedNumber = activeProvider.jackpot.toLocaleString();
      setJackpot(formattedNumber);
      setProvider(activeProvider.provider);
    }
  }, [active]);

  return (
    <div className="rounded-lg flex flex-col justify-center items-center w-[70%]">
      <p className="text-2xl font-bold uppercase">
        {provider && provider} slots jackpot
      </p>
      <div className="p-3 rounded-lg flex justify-center items-center gap-1 lg:gap-2">
        {jackpot &&
          jackpot.split("").map((char, index) =>
            char === "," ? (
              <span
                key={index}
                className="text-lg lg:text-3xl 2xl:text-5xl font-bold"
              >
                {char}
              </span>
            ) : (
              <div
                key={index}
                className="bg-white shadow-[inset_0px_0px_10px_1px_#2D3748] p-2 lg:p-3 2xl:p-5 rounded-lg"
              >
                <p className="text-2xl lg:text-3xl 2xl:text-5xl font-bold">
                  {char}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default JackpotPrize;
