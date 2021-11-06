import React, { ReactElement } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import { ReactComponent as Ovalone } from "../assets/images/object-missionone.svg";
import mq from "../assets/images/karn.png";
import ma from "../assets/images/mr-quantum.png";
import oval from "../assets/images/object-missionone.png";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import footer2 from "../assets/images/footermission2.png";
import P1 from "../assets/images/p1.png";
import Cloud from "../assets/images/cloud.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <img className="absolute top-0 object-cover opacity-90" src={Cloud} />

      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <img src={logo2} />
            <div className="font-poppins text-white text-center mt-2 ">
              SCOREBOARD
            </div>
            <div className="flex flex-col gap-3">
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                score
              </p>
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
            </div>
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-evenly mt-2">
          <p className="text-white  text-5xl ">
            ภารกิจ 3 : เรียงปีไม่เรียงเบอร์
          </p>
          <div className="border-4 p-2 rounded-3xl w-3/5 h-36 mr-auto flex flex-col justify-between mb-48">
            <div>
              {" "}
              <img className="border-2 rounded-3xl" src={P1} />
            </div>
            <div className="border-4 p-2 rounded-3xl w-3/5 h-36  flex flex-col justify-between mt-16 -ml-3 ">
              <div>
                <img className="border-2 rounded-3xl" src={P1} />
              </div>
            </div>

            <div className="">
              <div className="flex justify-between"></div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-3xl text-white font-poppins mb-2 ml-2 ">
            Across
          </div>
          <div className="border-4 p-3 rounded-3xl w-4/6 h-1/3 mr-auto flex flex-col justify-between text-md text-white"></div>
          <div className="text-3xl text-white font-poppins mt-2 ml-2 font-">
            Down
          </div>
          <div className="border-4 p-3 rounded-3xl w-5/6 h-1/4 mr-auto flex flex-col justify-between text-md text-white mt-2 font-poppins"></div>
        </div>
      </div>

      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
