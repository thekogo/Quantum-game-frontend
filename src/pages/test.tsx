import React, { ReactElement } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";

import logo5 from "../assets/images/Mission6/logo-crop.png";
import footer6 from "../assets/images/footer6.png";
import beamDetector from "../assets/images/Mission6/beamDetector.png";
import beamSlitterL from "../assets/images/Mission6/beamSlitter-l.png";
import beamSlitterR from "../assets/images/Mission6/beamSlitter-r.png";
import beamSlitterT from "../assets/images/Mission6/beamSlitter-t.png";
import laserGun from "../assets/images/Mission6/laserGun.png";
import mirrorLT from "../assets/images/Mission6/mirror-lt.png";
import mirrorRB from "../assets/images/Mission6/mirror-rb.png";
import opaquePlate from "../assets/images/Mission6/OpaquePlate.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />

      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <img draggable={false} src={logo5} />
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
          <p className="text-white  text-5xl ">ภารกิจ 6 : ลำแสงแห่งอนาคต</p>
          <div className="flex flex-col gap-4 p-4 w-full">
            <div className="grid grid-cols-4 gap-4">
              {/* ROW 1 */}
              <div className="bg-white">
                <img
                  draggable={false}
                  src={laserGun}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={opaquePlate}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamSlitterL}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamSlitterL}
                  className="object-contain"
                />
              </div>
              {/* ROW 2 */}
              <div className="bg-white">
                <img
                  draggable={false}
                  src={opaquePlate}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={mirrorRB}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={mirrorLT}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamSlitterT}
                  className="object-contain"
                />
              </div>
              {/* ROW 3 */}
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamSlitterR}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={opaquePlate}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamSlitterT}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={mirrorLT}
                  className="object-contain"
                />
              </div>
              {/* ROW 4 */}
              <div className="bg-white">
                <img
                  draggable={false}
                  src={beamDetector}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={opaquePlate}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={mirrorRB}
                  className="object-contain"
                />
              </div>
              <div className="bg-white">
                <img
                  draggable={false}
                  src={mirrorLT}
                  className="object-contain"
                />
              </div>
            </div>
            <button className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
              ส่งคำตอบ
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        draggable={false}
        className="absolute bottom-0 object-cover opacity-90"
        src={footer6}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
