import React, { ReactElement } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import planet from "../assets/images/Scoreboard/planet.png";
import missionHeader from "../assets/images/Scoreboard/missionHeader.png";
import { ReactComponent as Planet } from "../assets/images/Scoreboard/planet.svg";
import { ReactComponent as MissionHeader } from "../assets/images/Scoreboard/missionHeader.svg";
import footer from "../assets/images/footer.png";
import game1 from "../assets/images/Scoreboard/game1.png";
import game2 from "../assets/images/Scoreboard/game2.png";
import game3 from "../assets/images/Scoreboard/game3.png";
import game4 from "../assets/images/Scoreboard/game4.png";
import game5 from "../assets/images/Scoreboard/game5.png";
import game6 from "../assets/images/Scoreboard/game6.png";
import trophy from "../assets/images/Scoreboard/trophy.png";

interface Props {}

export default function Scoreboard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex">
      <Stars className="absolute h-full w-full z-0" />

      <Planet className="absolute top-0 right-0" />
      <div className="w-full m-6">
        <div>
          <MissionHeader className="m-auto" />
        </div>
        <div className="grid grid-rows-2 grid-cols-12 w-fulls m-3">
          <div className="p-3 col-span-3 row-span-2 gap-3">
            <div className="relative bg-gradient-to-b from-lbFirstpurple to-fifthpurple rounded-3xl w-3/4 h-3/4 m-auto mt-3 text-center shadow-2xl py-8">
              {/* <img src={trophy} className="absolute -inset-y-40 inset-x-8" /> */}
              <img src={trophy} className="absolute -inset-y-40 inset-x-8" />
              <div className="bg-lbSecondpurple rounded-3xl w-5/6 h-full m-auto text-center shadow-2xl py-4">
                <div className="w-full h-full text-center">
                  <table className="text-left text-center w-full h-full flex flex-col">
                    <thead className="bg-black flex text-white w-full">
                      <tr className="flex w-full mr-4">
                        <th className="p-4 w-1/3">Player</th>
                        <th className="p-4 w-1/3">Finish</th>
                        <th className="p-4 w-1/3">Time</th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col items-center overflow-y-scroll w-full z-10 font-poppins text-white">
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>

                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                      <tr className="flex w-full">
                        <td className="p-2 w-1/3">Player1</td>
                        <td className="p-2 w-1/3">5</td>
                        <td className="p-2 w-1/3">01:05:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:-rotate-12">
                <img src={game1} className="object-contain h-52 m-auto" />
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125">
                <img src={game2} className="object-contain h-52 m-auto" />
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:rotate-12">
                <img src={game3} className="object-contain h-48 m-auto" />
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:rotate-12 z-10">
                <img src={game4} className="object-contain h-60 m-auto" />
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 z-10">
                <img src={game5} className="object-contain h-60 m-auto" />
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:-rotate-12 z-10">
                <img src={game6} className="object-contain h-64 m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={planet} className="absolute top-0 right-0" />
      <img src={missionHeader} className="flex items-center" /> */}
      <img className="h-auto w-full absolute bottom-0 " src={footer} />
    </div>
  );
}
