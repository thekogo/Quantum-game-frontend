import React, { ReactElement, useState } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import P5 from "../assets/images/p5.png";
import logo5 from "../assets/images/logo5.png";
import footer5 from "../assets/images/footer5.png";
import { submitMission5 } from "../services/mission";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import arrow from "../assets/images/arrow.png";
import star_timer from "../assets/images/star-timer.png";
import origami from "../assets/images/origami.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import MissionScoreboard from "../components/MissionScoreboard";
import m5 from "../assets/images/m5.png";

export default function MissionBoard(): ReactElement {
  const [answer, setAnswer] = useState<(string | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    const isCorrect = await submitMission5(answer);
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
  const handleSetAnswer = (idx: number, value: string) => {
    let temp = [...answer];
    temp[idx] = value;
    setAnswer(temp);
  };
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <Link to="/scoreboard" className="z-50">
        <img
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>

      <div className="grid grid-cols-4 w-full z-10">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <div className="absolute top-0 right-0 m-8 w-48 h-28">
              <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
                <img
                  className="absolute m-2 self-center top-0 right-0"
                  src={star_timer}
                />
                <p className="text-white font-poppins text-4xl mt-2">00:00</p>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="w-full mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center">
                  คู่มือการเล่นเกม
                </button>
              </div>
            </div>
            <MissionScoreboard logo={logo5} missionId="5" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-8 text-5xl ">
            ภารกิจ 5 : ถาม-ตอบ ควอนตัม
          </p>
          <p className="text-2xl font-thaifonts text-center text-white mb-8">
            พับกระดาษโอริกามิตามคำใบ้ เพื่อตามหา Password
          </p>
          <div className="flex flex-col gap-4 p-4 ">
            <div className="border p-3 rounded-3xl w-full mr-auto ">
              <p className=" text-white text-lg">
                1. ในปี ค.ศ.2011
                มีการขายควอนตัมคอมพิวเตอร์สำหรับธุรกิจเครื่องแรก
              </p>
            </div>
            <div className="border p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                2.ในปี ค.ศ.2016 มีการให้บริการคลาวด์สาธารณะ สำหรับโปรแกรมบน
                เครื่องควอนตัมคอมพิวเตอร์เป็นครั้งแรก
              </p>
            </div>
            <div className="border p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                3.ในปี ค.ศ.2019 มีข่าวการอ้างความสำเร็จ Quantum Supremacy
              </p>
            </div>
            <div className="border p-3 rounded-3xl w-full mr-auto">
              <p className=" text-white text-lg">
                4.ในกลางปี ค.ศ.2020 มีการเปิดตัวการให้บริการคลาวด์สาธารณะอีก
                แต่พิเศษที่เป็นควอนตัมคอมพิวเตอร์ที่ทำงานด้วยแสงหรือโฟโตนิกส์
              </p>
            </div>

            <div className="text-center m-full my-auto">
              <div className="flex bg-thirdpurple w-full mx-auto rounded-2xl justify-center p-2">
                <input
                  value={answer[0]}
                  onChange={(e) => handleSetAnswer(0, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[1]}
                  onChange={(e) => handleSetAnswer(1, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[3]}
                  onChange={(e) => handleSetAnswer(3, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[4]}
                  onChange={(e) => handleSetAnswer(4, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[5]}
                  onChange={(e) => handleSetAnswer(5, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[5]}
                  onChange={(e) => handleSetAnswer(5, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[5]}
                  onChange={(e) => handleSetAnswer(5, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
                <img src={arrow} className="flex my-auto p-1 h-3" />
                <input
                  value={answer[5]}
                  onChange={(e) => handleSetAnswer(5, e.target.value)}
                  className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                />{" "}
              </div>
              <button
                onClick={handleSubmitAnswer}
                className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
              >
                ส่งคำตอบ
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col justify-center z-10">
          <img className="h-44 w-40 mx-auto mt-16" src={m5} />
          <a href="https://drive.google.com/u/0/uc?id=1QumrLQS_LJU2OH4u4aWhaUAMM0kT1mWb&export=download">
            <button className=" mb-32 mt-6 ml-32   bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full z-10">
              ดาวน์โหลดกระดาษโอริกามิ
            </button>
          </a>
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
