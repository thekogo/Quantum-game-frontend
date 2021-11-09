import React, { ReactElement, useState } from "react";
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
import { useHistory } from "react-router";
import { submitMission2 } from "../services/mission";
import Swal from "sweetalert2";
import star_timer from "../assets/images/star-timer.png";
import MissionScoreboard from "../components/MissionScoreboard";

export default function MissionBoard(): ReactElement {
  const [answer, setAnswer] = useState<string>();

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    const isCorrect = await submitMission2(answer);
    if (isCorrect) {
      Swal.fire({
        title: "คำตอบถูกต้อง",
        icon: "success",
      });
      history.push("/scoreboard");
    } else {
      Swal.fire({
        title: `<span className="font-thaifonts">คำตอบไม่ถูกต้อง</span>`,
        iconHtml: "",
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />

      <div className="grid grid-cols-4 w-full z-10">
        <div className="col-span-1 flex items-center justify-center">
          <div className="absolute top-0 right-0 m-8 w-48 h-28">
            <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
              <img
                className="absolute m-2 self-center top-0 right-0"
                src={star_timer}
              />
              <p className="text-white font-poppins text-4xl mt-2">00:00</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <button className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center">
                คู่มือการเล่นเกม
              </button>
            </div>
          </div>
          <div className=" p-3 rounded-3xl">
            <MissionScoreboard logo={logo2} missionId="2" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-evenly mt-2">
          <p className="text-white  text-5xl ">ภารกิจ 2 : อักษรที่หายไป</p>
          <div className="border-4 p-3 rounded-3xl w-5/6 h-3/6 mr-auto flex flex-col justify-between">
            <div></div>
            <div className="">
              <div className="flex justify-between">
                <button className="mt-2 bg-mhoored border-fifthpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                  ดาวน์โหลดตารางครอสเวิร์ด
                </button>
                <div className="flex justify-between gap-2">
                  <input
                    className=" mr-auto  rounded-full text-sm w-96 py-1 p-3 font-poppins text-fifthpurple placeholder-secondpurple focus:outline-none focus:border-thirdpurple"
                    placeholder="input your answer"
                    type="string"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <button
                    onClick={handleSubmitAnswer}
                    className="mt-2 bg-indigo-500 hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
                  >
                    ส่งคำตอบ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-3xl text-white font-poppins mb-2 ml-2 ">
            Across
          </div>
          <div className="border-4 p-3 rounded-3xl w-2/3 h-1/3 mr-auto flex flex-col justify-between text-md text-white"></div>
          <div className="text-3xl text-white font-poppins mt-2 ml-2 font-">
            Down
          </div>
          <div className="border-4 p-3 rounded-3xl w-5/6 h-1/4 mr-auto flex flex-col justify-between text-md text-white mt-2 font-poppins"></div>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90"
        src={footer2}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
