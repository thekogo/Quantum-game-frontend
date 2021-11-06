import React, { ReactElement } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";

import logo5 from "../assets/images/logo5.png";
import footer5 from "../assets/images/footer5.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />

      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <img src={logo5} />
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
          <p className="text-white  text-5xl ">ภารกิจ 5 : ดูดวง...ดาว</p>
          <div className="flex flex-col gap-4 p-4">
            <div className="border-4 p-3 rounded-3xl w-full mr-auto ">
              <p className=" text-white text-lg">
                1. ในปี ค.ศ.2011
                มีการขายควอนตัมคอมพิวเตอร์สำหรับธุรกิจเครื่องแรก
              </p>
            </div>
            <div className="border-4 p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                2.ในปี ค.ศ.2016 มีการให้บริการคลาวด์สาธารณะ สำหรับโปรแกรมบน
                เครื่องควอนตัมคอมพิวเตอร์เป็นครั้งแรก
              </p>
            </div>
            <div className="border-4 p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                3.ในปี ค.ศ.2019 มีข่าวการอ้างความสำเร็จ Quantum Supremacy
              </p>
            </div>
            <div className="border-4 p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                4.ในกลางปี ค.ศ.2020 มีการเปิดตัวการให้บริการคลาวด์สาธารณะอีก
                แต่พิเศษที่เป็นควอนตัมคอมพิวเตอร์ที่ทำงานด้วยแสงหรือโฟโตนิกส์
              </p>
            </div>
            <input
              className="mt-2 rounded-full w-full py-1 text-md p-3 font-poppins text-fifthpurple placeholder-secondpurple focus:outline-none focus:border-thirdpurple"
              placeholder="input your answer"
            />
            <button className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
              ส่งคำตอบ
            </button>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col justify-center z-10">
          <div className="text-3xl text-white font-poppins mb-2 ml-2 font-thaifonts "></div>
          <div className="border-4 p-3 rounded-3xl w-5/6 h-1/4 mr-auto flex flex-col justify-between text-md text-white mt-2 font-poppins">
            <div className="border-4 p-3 rounded-3xl w-full h-3/4 mr-auto flex flex-col  text-md text-white mt-2 font-thaifonts">
              ใส่ตัวอย่างกระดาษ
            </div>
            <button className="mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
              ดาวน์โหลดกระดาษโอริกามิ
            </button>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90"
        src={footer5}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
