import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import mq from "../assets/images/karn.png";
import ma from "../assets/images/mr-quantum.png";
import oval from "../assets/images/object-missionone-edit.png";
import logo1 from "../assets/images/logo1.png";
import {
  getDuration,
  getMission,
  startMission,
  submitMission1,
} from "../services/mission";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import star_timer from "../assets/images/star-timer.png";
import "./alert.css";
import { assert } from "console";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";

import MissionScoreboard from "../components/MissionScoreboard";
interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  const [answer, setAnswer] = useState<string>("");
  const [timer, setTimer] = useState<string>("00:00");
  const [isFinish, setIsFinish] = useState(false);

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    submitMission1(answer)
      .then((res) => {
        Swal.fire({
          title: "คำตอบถูกต้อง",
          icon: "success",
          text: `ใช้เวลาไปทั้งหมด ${timer}`,
        });
        history.push("/scoreboard");
        getMissionTimmer();
      })
      .catch((err) => {
        if (err.response.status === 403) {
          Swal.fire({
            title: `<span className="font-thaifonts">ด่านคุณผ่านไปแล้ว</span>`,
            icon: "success",
          }).finally(() => {
            history.push("/scoreboard");
          });
        } else {
          Swal.fire({
            title: `<span className="font-thaifonts">คำตอบไม่ถูกต้อง</span>`,
            iconHtml: "",
          });
        }
      });
  };

  const handleShowManual = () => {
    Swal.fire({
      title: '<strong class="title "><u>ภารกิจ 1</u>: ถาม-ตอบ ควอนตัม</strong>',
      html:
        '<div class="text-left px-52 font-thaifonts text-xl">' +
        "1.ให้ผู้เล่นชมและศึกษาความรู้จากคลิปเพื่อค้นหาคำตอบ<br/><br/>" +
        "2.ตอบคำถามทั้งสามข้อที่อยู่ด้านขวามือ<br/><br/>" +
        "3.เมื่อได้คำตอบแล้วนำตัวเลขมาเรียงกันโดยไม่ต้องเว้นวรรค</div>" +
        '<br/><br/><div class="font-poppins text-2xl">' +
        '<div class="flex flex-wrap justify-center"><div class="bg-gray-200 w-1/4 py-2 rounded-full">123456</div></div>' +
        "</div>" +
        '<div class="font-thaifonts">ตัวอย่างคำตอบ</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
  };

  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title: '<strong class="title"><u>ภารกิจ 1</u>: ถาม-ตอบ ควอนตัม</strong>',
      html:
        '<div class="text-left px-52 font-thaifonts text-xl">' +
        "1.ให้ผู้เล่นชมและศึกษาความรู้จากคลิปเพื่อค้นหาคำตอบ<br/><br/>" +
        "2.ตอบคำถามทั้งสามข้อที่อยู่ด้านขวามือ<br/><br/>" +
        "3.เมื่อได้คำตอบแล้วนำตัวเลขมาเรียงกันโดยไม่ต้องเว้นวรรค</div>" +
        '<br/><br/><div class="font-poppins text-2xl">' +
        '<div class="flex flex-wrap justify-center"><div class="bg-gray-200 w-1/4 py-2 rounded-full">123456</div></div>' +
        "</div>" +
        '<div class="font-thaifonts">ตัวอย่างคำตอบ</div>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "กลับหน้าหลัก",
      cancelButtonAriaLabel: "Thumbs down",
      confirmButtonText: "เริ่มเล่น!",
      reverseButtons: true,
      customClass: {
        popup: "manual-wide",
      },
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        startMission(1)
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

  const getMissionTimmer = () => {
    getMission(1)
      .then((res) => {
        if (res.data.endTime) {
          const stringDuration = getDuration(
            new Date(res.data.startTime),
            new Date(res.data.endTime)
          ).toString();
          setTimer(stringDuration);
          setIsFinish(true);
        } else {
          setInterval(() => {
            const stringDuration = getDuration(
              new Date(res.data.startTime),
              new Date()
            ).toString();
            setTimer(stringDuration);
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          showDetailMission1();
          return;
        }
        console.log(err);
        history.push("/scoreboard");
      });
  };

  useEffect(() => {
    (async () => {
      getMissionTimmer();
    })();
  }, []);

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <Link to="/scoreboard" className="z-50">
        <img
          draggable={false}
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>

      <div className="grid grid-cols-4 w-full">
        <div className="absolute top-0 right-0 m-8 md:w-40 xl:w-48 md:h-20 xl:h-28">
          <div className="top-0 right-0 mt-4 mr-4 xl:mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
            <img
              draggable={false}
              className="absolute m-2 self-center top-0 right-0 transform md:scale-75 xl:scale-100"
              src={star_timer}
            />
            <p className="text-white font-poppins md:text-2xl xl:text-4xl mt-2">
              {timer}
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <button
              onClick={handleShowManual}
              className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center"
            >
              กติกาภารกิจที่ 1
            </button>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center z-10">
          <div className=" p-3 rounded-3xl z-20">
            <MissionScoreboard logo={logo1} missionId="1" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-8 md:text-4xl xl:text-5xl ">
            ภารกิจ 1 : ถาม-ตอบ ควอนตัม
          </p>
          <p className="md:text-xl xl:text-2xl font-thaifonts text-center text-white ">
            ดูคลิปและตอบคำถาม
          </p>
          <p className="md:text-md xl:text-2xl font-thaifonts text-center text-white mb-8">
            Password คือ คำตอบของข้อ 1, 2, 3 เรียงตามลำดับ โดยไม่ต้องเว้นวรรค
          </p>
          <iframe
            className="border p-3 rounded-3xl h-3/6 w-4/5"
            src="https://www.youtube.com/embed/-bY0EBSTbdQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          {!isFinish && (
            <>
              <input
                className="mt-2 rounded-full w-4/5 py-1 text-md p-3  text-fifthpurple placeholder-gray-400 focus:outline-none focus:border-thirdpurple font-thaifonts"
                placeholder="เขียนคำตอบเป็นตัวเลขตามลำดับข้อโดยไม่ต้องเว้นวรรค"
                type="number"
                autoComplete="nope"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />{" "}
              <button
                onClick={handleSubmitAnswer}
                className="mt-2 bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
              >
                ส่งคำตอบ
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center w-9/12 md:mt-24 xl:mt-20 3xl:my-auto">
          <div className="flex md:p-0 xl:p-3 text-white w-full justify-center">
            <p className="md:text-xl xl:text-2xl  font-poppins text-white">
              {" "}
              Question
            </p>
          </div>

          <div className="border rounded-2xl p-4 text-white">
            1. กระบวนการทำงานของคอมพิวเตอร์แบ่งเป็นกี่ขั้น
            (จากที่ได้รับฟังบรรยาย)
            <br /> <br />
            2. ค่าที่เป็นไปได้ของ 1 บิต มีอะไรบ้าง (เรียงจากน้อยไปมาก)
            <br />
            <br />
            3. สำหรับการประมวลผลด้วยควอนตัมคอมพิวเตอร์
            หากพบว่ามีโอกาสได้ค่าคิวบิตเป็น 0 เท่ากับร้อยละ 75
            โอกาสที่จะได้ค่าคิวบิตเป็น 1 จะเป็นร้อยละเท่าใด
          </div>
        </div>
      </div>

      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}

      <img
        draggable={false}
        className="h-48 w-58 absolute bottom-0 left-0 transform origin-bottom-left md:scale-50 xl:scale-75 3xl:scale-100"
        src={ma}
      />

      <img
        draggable={false}
        className="h-48 w-58 absolute bottom-0 right-0 transform origin-bottom-right md:scale-50 xl:scale-75 3xl:scale-100"
        src={mq}
      />
    </div>
  );
}
