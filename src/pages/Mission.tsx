import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import planet from "../assets/images/Scoreboard/planet.png";
import missionHeader from "../assets/images/Scoreboard/missionHeader.png";
import { ReactComponent as Planet } from "../assets/images/Scoreboard/planet.svg";
import footer from "../assets/images/footer.png";
import game1 from "../assets/images/Scoreboard/game1.png";
import game2 from "../assets/images/Scoreboard/game2.png";
import game3 from "../assets/images/Scoreboard/game3.png";
import game4 from "../assets/images/Scoreboard/game4.png";
import game5 from "../assets/images/Scoreboard/game5.png";
import game6 from "../assets/images/Scoreboard/game6.png";
import game1Pass from "../assets/images/Scoreboard/game1-pass.png";
import game2Pass from "../assets/images/Scoreboard/game2-pass.png";
import game3Pass from "../assets/images/Scoreboard/game3-pass.png";
import game4Pass from "../assets/images/Scoreboard/game4-pass.png";
import game5Pass from "../assets/images/Scoreboard/game5-pass.png";
import game6Pass from "../assets/images/Scoreboard/game6-pass.png";
import trophy from "../assets/images/Scoreboard/trophy.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getGameScoreboard,
  getMyPass,
  IMainScorebaord,
  Score,
} from "../services/scoreboard";
import { IUser } from "../interface/user";

interface Props {
  user: IUser;
}

export default function Scoreboard({ user }: Props): ReactElement {
  const [myPass, setMyPass] = useState<Score[]>([]);
  const [scoreboard, setScoreboard] = useState<IMainScorebaord[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyPass();
      console.log(data);
      setMyPass(data);
      setScoreboard(await getGameScoreboard());
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />

      <Planet className="absolute z-0 top-0 right-0 transform origin-top-right md:scale-75 xl:scale-90 3xl:scale-100" />
      <div className="w-full m-6 z-10">
        <div className=" 3xl:mb-12">
          <img draggable={false} className="mx-auto" src={missionHeader} />
        </div>
        <div className="grid grid-rows-2 grid-cols-12 w-full h-screen m-3">
          <div className="p-3 md:col-span-4 xl:col-span-3 row-span-2 gap-3 -mt-40 h-3/5">
            <div className="relative  mx-auto md:top-14 xl:top-10">
              <img draggable={false} src={trophy} className="m-auto transform md:scale-75 xl:scale-100" />
            </div>
            <div className="bg-gradient-to-b from-lbFirstpurple to-fifthpurple rounded-3xl w-full h-full m-auto mt-3 text-center shadow-2xl align-middle flex">
              <div className="bg-lbSecondpurple rounded-3xl w-5/6 h-5/6 m-auto text-center shadow-2xl ">
                <div className="w-full h-full text-center pt-4">
                  <table className="table-fixed text-center w-full h-full flex flex-col">
                    <thead className="bg-lbFirstpurple flex text-white w-full mx-auto rounded-sm">
                      <tr className="flex w-full mr-4">
                        <th className="p-4 w-2/4 ml-4 text-left">Team</th>
                        <th className="p-4 w-1/4">Finish</th>
                        <th className="p-4 w-1/4 md:mr-6 xl:mr-0">Time</th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col items-center overflow-y-scroll overflow-x-hidd w-full h-full z-10 font-poppins text-white">
                      {scoreboard.map((score) => (
                        <tr className="flex w-full">
                          <td className="p-2 w-2/4 font-thaifonts text-left border-collapse border-b border-secondpurple ml-4">
                            {score.teamName}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b border-secondpurple">
                            {score.missionPass}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b md:mr-6 xl:mr-3 border-secondpurple">
                            {score.durationStr}
                          </td>
                        </tr>
                      ))}
                      {scoreboard.length === 0 && (
                        <tr className="flex w-full">
                          <td className="p-2 w-2/4 font-thaifonts text-left border-collapse border-b border-secondpurple ml-4">
                            {"------"}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b border-secondpurple">
                            {"--"}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b mr-3 border-secondpurple">
                            {"--:--"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full md:ml-4 3xl:ml-auto md:mt-8 xl:mt-0">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:-rotate-12">
                <Link to="/mission/1">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 1)
                        ? game1Pass
                        : game1
                    }
                    className="object-contain md:h-48 3xl:h-52 m-auto cursor-pointer"
                    alt="mission 1"
                  />
                </Link>
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125">
                <Link to="/mission/2">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 2)
                        ? game2Pass
                        : game2
                    }
                    className="object-contain md:h-48 3xl:h-52 m-auto cursor-pointer"
                    alt="mission 2"
                  />
                </Link>
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:rotate-12">
                <Link to="/mission/3">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 3)
                        ? game3Pass
                        : game3
                    }
                    className="object-contain md:h-44 3xl:h-48 m-auto cursor-pointer"
                    alt="mission 3"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-7 w-full -mt-40 md:ml-4 3xl:ml-auto">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:rotate-12 z-10">
                <Link to="/mission/4">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 4)
                        ? game4Pass
                        : game4
                    }
                    className="object-contain md:h-56 3xl:h-60 m-auto cursor-pointer"
                    alt="mission 4"
                  />
                </Link>
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 z-10">
                <Link to="/mission/5">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 5)
                        ? game5Pass
                        : game5
                    }
                    className="object-contain md:h-56 3xl:h-60 m-auto cursor-pointer"
                    alt="mission 5"
                  />
                </Link>
              </div>
              <div className="w-1/3 transform transition duration-500 hover:scale-125 hover:-rotate-12 z-10 ">
                <Link to="/mission/6">
                  <img
                    draggable={false}
                    src={
                      myPass.find((score) => score.missionId === 6)
                        ? game6Pass
                        : game6
                    }
                    className="object-contain md:h-60 3xl:h-64 m-auto cursor-pointer"
                    alt="mission 6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
