import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import planet from "../assets/images/Scoreboard/planet.png";
import missionHeader from "../assets/images/Scoreboard/missionHeader.png";
import { ReactComponent as Planet } from "../assets/images/Scoreboard/planet.svg";
import footer from "../assets/images/footer.png";
import trophy from "../assets/images/Scoreboard/trophy.png";
import { Link } from "react-router-dom";
import {
  getGameScoreboard,
  getMyPass,
  IMainScorebaord,
  Score,
} from "../services/scoreboard";
import { IUser } from "../interface/user";
import loginright from "../assets/images/loginright.png";
import loginleft from "../assets/images/loginleft.png";

interface Props {
  user: IUser;
}

export default function ScoreboardHidden({ user }: Props): ReactElement {
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
      <div className="mt-30">
        {" "}
        <img
          draggable={false}
          src={loginright}
          className="absolute left-0 w-60 ml-24 object-ud 2xl:w-72 2xl:ml-36"
        />
        <img
          draggable={false}
          src={loginleft}
          className="absolute right-0 w-60 object-ud2 2xl:w-72 md:mr-20 xl:mr-36"
        />
      </div>

      <Planet className="absolute z-0 top-0 right-0 transform origin-top-right md:scale-90 3xl:scale-100" />
      <div className="w-full m-6 z-10">
        <div className=" 3xl:mb-12">
          <img draggable={false} className="mx-auto mt-12" src={missionHeader} />
        </div>
        <div className="grid grid-rows-2 grid-cols-12 w-full h-screen m-3 xl:mt-12 3xl:mt-0">
          <div className="p-3 col-span-4 col-start-5 row-span-2 gap-3 -mt-40 h-3/5">
            <div className="relative  mx-auto top-10">
              <img draggable={false} src={trophy} className="m-auto" />
            </div>
            <div className="bg-gradient-to-b from-lbFirstpurple to-fifthpurple rounded-3xl w-full h-full m-auto mt-3 text-center shadow-2xl align-middle flex">
              <div className="bg-lbSecondpurple rounded-3xl w-5/6 h-5/6 m-auto text-center shadow-2xl ">
                <div className="w-full h-full text-center pt-4">
                  <table className="table-fixed text-center w-full h-full flex flex-col">
                    <thead className="bg-lbFirstpurple flex text-white w-full mx-auto rounded-sm">
                      <tr className="flex w-full mr-4">
                        <th className="p-4 w-2/4 ml-4">Team</th>
                        <th className="p-4 w-1/4">Finish</th>
                        <th className="p-4 w-1/4 mr-4">Time</th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col items-center overflow-y-scroll overflow-x-hidd w-full h-full z-10 font-poppins text-white">
                      {scoreboard.map((score) => (
                        <tr className="flex w-full font-thaifonts">
                          <td className="p-2 w-2/4 font-thaifonts text-left border-collapse border-b border-secondpurple ml-4">
                            {score.teamName}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b border-secondpurple">
                            {score.missionPass}
                          </td>
                          <td className="p-2 w-1/4 border-collapse border-b mr-3 border-secondpurple">
                            {score.durationStr}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        draggable={false}
        className="absolute bottom-0 w-full object-cover opacity-90"
        src={footer}
      />
    </div>
  );
}
