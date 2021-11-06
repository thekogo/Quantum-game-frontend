import React, { ReactElement } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import planet from "../assets/images/Scoreboard/planet.png";
import missionHeader from "../assets/images/Scoreboard/missionHeader.png";
import { ReactComponent as Planet } from "../assets/images/Scoreboard/planet.svg";
import { ReactComponent as MissionHeader } from "../assets/images/Scoreboard/missionHeader.svg";
import footerscore from "../assets/images/footer1.png";
import game1 from "../assets/images/Scoreboard/game1.png";
import game2 from "../assets/images/Scoreboard/game2.png";
import game3 from "../assets/images/Scoreboard/game3.png";
import game4 from "../assets/images/Scoreboard/game4.png";
import game5 from "../assets/images/Scoreboard/game5.png";
import game6 from "../assets/images/Scoreboard/game6.png";

interface Props {}

export default function Scoreboard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex">
      <Stars className="absolute h-full w-full z-0" />

      <Planet className="absolute top-0 right-0" />
      <div className="w-full">
        <div>
          <MissionHeader className="m-auto" />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-x-20 ml-20 mr-72 my-8">
          <div className="col-span-2 row-span-2 bg-red-500">1</div>
          <div className="row-span-1 col-span-4 bg-red-400 w-full">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 bg-red-600">
                <img src={game1} className="object-contain h-52 m-auto" />
              </div>
              <div className="w-1/3 bg-red-700">
                <img src={game2} className="object-contain h-56 m-auto" />
              </div>
              <div className="w-1/3 bg-red-800">
                <img src={game3} className="object-contain h-48 m-auto" />
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-4 bg-red-300 w-full">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 bg-red-600">
                <img src={game4} className="object-contain h-60 m-auto" />
              </div>
              <div className="w-1/3 bg-red-700">
                <img src={game5} className="object-contain h-60 m-auto" />
              </div>
              <div className="w-1/3 bg-red-800">
                <img src={game6} className="object-contain h-64 m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90"
        src={footerscore}
      />
    </div>
  );
}
