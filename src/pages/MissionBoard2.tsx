import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo2 from "../assets/images/logo2.png";
import footer2 from "../assets/images/footermission2.png";
import { useHistory } from "react-router";
import { getDuration, startMission, submitMission2 } from "../services/mission";
import Swal from "sweetalert2";
import star_timer from "../assets/images/star-timer.png";
import { Link } from "react-router-dom";
import back from "../assets/images/backward.png";
import MissionScoreboard from "../components/MissionScoreboard";
import crossword from "../assets/images/Mission2/crossword.png";

export default function MissionBoard(): ReactElement {
  const [answer, setAnswer] = useState<string>();
  const [timer, setTimer] = useState<string>("00:00");

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

  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title: '<strong class="title"><u>ภารกิจ 2</u>: อักษรที่หายไป</strong>',
      html:
        '<div class="text-left px-52 font-thaifonts text-xl"><p className="text-left">1.ผู้เล่นต้องแก้ Crossword ที่กำหนด โดยใช้คำตอบเป็นภาษาอังกฤษ<br/><br/>' +
        "2.เมื่อแก้ปริศนา Crossword เสร็จสิ้น จะได้รับ Password สำหรับผ่านด่าน โดยพิจารณาตัวอักษรตามที่กำหนด</div>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: '<i class="fa fa-thumbs-down"> กลับหน้าหลัก </i>',
      cancelButtonAriaLabel: "Thumbs down",
      confirmButtonText: "เริ่มเล่น!",
      reverseButtons: true,
      customClass: {
        popup: "manual-wide",
      },
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        startMission(2)
          .then((res) => {
            if (res.data.endTime) {
              const stringDuration = getDuration(
                new Date(res.data.startTime),
                new Date(res.data.endTime)
              ).toString();
              console.log(stringDuration);
              setTimer(stringDuration);
            } else {
              setInterval(() => {
                const stringDuration = getDuration(
                  new Date(res.data.startTime),
                  new Date()
                ).toString();
                console.log(stringDuration);
                setTimer(stringDuration);
              }, 1000);
            }
          })
          .catch((err) => {
            console.log(err);
            history.push("/scoreboard");
          });
        console.log("OK");
      } else if (result.isDismissed) {
        history.push("/scoreboard");
      }
    });
  };
  const handleShowManual = () => {
    Swal.fire({
      title: '<strong class="title "><u>ภารกิจ 1</u>: ถาม-ตอบ ควอนตัม</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl ">1.ให้ผู้เล่นชมและศึกษาความรู้จากคลิปเพื่อค้นหาคำตอบ<br/><br/>2.ตอบคำถามทั้งสามข้อที่อยู่ด้านขวามือ<br/><br/>3.เมื่อได้คำตอบแล้วนำตัวเลขมาเรียงกันโดยไม่ต้องเว้นวรรค</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
  };
  useEffect(() => {
    showDetailMission1();
  }, []);

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
          <div className="absolute top-0 right-0 m-8 w-48 h-28">
            <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
              <img
                className="absolute m-2 self-center top-0 right-0"
                src={star_timer}
              />
              <p className="text-white font-poppins text-4xl mt-2">00:00</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <button
                onClick={handleShowManual}
                className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center"
              >
                คู่มือการเล่นเกม
              </button>
            </div>
          </div>
          <div className=" p-3 rounded-3xl">
            <MissionScoreboard logo={logo2} missionId="2" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-evenly mt-2">
          <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
            <p className="text-white mb-8 text-5xl ">
              ภารกิจ 2 : อักษรที่หายไป
            </p>
            <p className="text-2xl font-thaifonts text-center text-white mb-8">
              แก้ปริศนาของอักษรที่หายไปจากคำตอบของ crossword
              <p />
            </p>

            <div className="border rounded-3xl p-6">
              <div className="bg-fadepurple rounded-3xl flex flex-wrap justify-center items-center">
                <img src={crossword} className="my-5" />
                <div className="absolute">
                  {/* INSERT CROSSWORD HERE */}
                  <a href="https://drive.google.com/u/0/uc?id=18PHzI4o6XDpRPa6gFwwUyPROOU4XaSUV&export=download">
                    <button className="bg-mhoored border-fifthpurple hover:bg-firstpurple text-white text-lg font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                      ดาวน์โหลด Crossword และคำใบ้
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <input
                  className="mt-2 rounded-full w-4/5 py-1 text-md p-4  text-fifthpurple placeholder-gray-400 focus:outline-none focus:border-thirdpurple font-thaifonts"
                  placeholder="เขียนคำตอบตามลำดับข้อโดยไม่ต้องเว้นวรรค "
                  type="number"
                  autoComplete="nope"
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

        <div className="flex flex-col justify-center w-2/3">
          <div className="text-3xl text-white text-center font-poppins mt-24 mb-2 ml-2 ">
            Password
          </div>
          <div className="border p-3 rounded-3xl w-full h- mr-auto flex flex-col justify-between text-md  text-white font-thaifont text-lg text-center">
            <p className="pb-2">คำที่ 01 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 02 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 03 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 04 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 05 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 06 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 07 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 08 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 09 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 10 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 11 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 12 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 13 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 14 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
            <p className="pb-2">คำที่ 15 &nbsp;&nbsp;&nbsp; ตัวอักษรที่ X</p>
          </div>
        </div>
      </div>

      <img
        className="absolute bottom-0 object-cover opacity-10"
        src={footer2}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
