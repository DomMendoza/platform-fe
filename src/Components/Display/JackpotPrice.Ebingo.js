import React, { useEffect, useState } from "react";

//Redux
import { useSelector } from "react-redux";

function JackpotPrize() {
  const [jackpot, setJackpot] = useState("");
  const [provider, setProvider] = useState("");

  const { ebingoGameData, active } = useSelector((state) => state.ebingo);

  useEffect(() => {
    const activeProvider = ebingoGameData.find(
      (item) => item.provider === active.provider
    );

    if (activeProvider) {
      const formattedNumber = activeProvider.jackpot.toLocaleString();
      setJackpot(formattedNumber);
      setProvider(activeProvider.provider);
    }
  }, [active]);

  return (
    <div className="border-2 border-red-600 flex flex-col justify-center items-center">
      <p className="text-2xl font-bold uppercase">
        {provider && provider} ebingo jackpot
      </p>
      <div className="border-2 border-blue-600 p-5 rounded-lg flex justify-center items-center gap-2">
        {jackpot &&
          jackpot.split("").map((char, index) =>
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
    // <></>
  );
}

export default JackpotPrize;
