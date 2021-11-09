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
import { getMissionScoreboard, Score } from "../services/scoreboard";
interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  const [answer, setAnswer] = useState<string>();
  const [timer, setTimer] = useState<string>("00:00");
  const [scoreboard, setScoreboard] = useState<Score[]>([]);

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    const isCorrect = await submitMission1(Number(answer));
    if (isCorrect) {
      Swal.fire({
        title: "คำตอบถูกต้อง",
        icon: "success",
        text: `ใช้เวลาไปทั้งหมด ${timer}`,
      });
      history.push("/scoreboard");
      getMissionTimmer();
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
      title: '<strong class="title"><u>ภารกิจ 1</u>: ถาม-ตอบ ควอนตัม</strong>',
      html:
        // '<img src="'+ "{logo1}" +'"/>' +
        "You can use <b>bold text</b>, " +
        '<a href="//sweetalert2.github.io">links</a> ' +
        "and other HTML tags",
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
      setScoreboard(await getMissionScoreboard(1));
    })();
  }, []);

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <img className="absolute  mx-auto h-auto w-full self-center" src={oval} />
      <div className="grid grid-cols-4 w-full">
        <div className="absolute top-0 right-0 m-8 w-48 h-28">
          <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
            <img
              className="absolute m-2 self-center top-0 right-0"
              src={star_timer}
            />
            <p className="text-white font-poppins text-4xl mt-2">{timer}</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <button className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center">
              คู่มือการเล่นเกม
            </button>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center z-10">
          <div className=" p-3 rounded-3xl">
            <img src={logo1} className="mx-auto" />
            <div className="font-poppins text-white text-center mt-2 ">
              SCOREBOARD
            </div>
            <div className="flex flex-col gap-3 h-52 overflow-y-auto">
              {scoreboard.map((log) => (
                <p className="border-2 rounded-full px-3 text-white font-poppins flex gap-2 justify-between">
                  <span>{log.teamName}</span>
                  <span>{log.durationStr}</span>
                </p>
              ))}
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
              <p className="border-2 rounded-full px-3 text-white font-poppins">
                dsd
              </p>
            </div>
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-10 text-5xl ">
            ภารกิจ 1 : ถาม-ตอบ ควอนตัม
          </p>
          <iframe
            className="border-4 p-3 rounded-3xl"
            src="https://www.youtube.com/embed/aehbDMIEmnM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <input
            className="mt-2 rounded-full w-2/4 py-1 text-md p-3 font-poppins text-fifthpurple placeholder-secondpurple focus:outline-none focus:border-thirdpurple"
            placeholder="input your answer"
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
        </div>
      </div>

      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}

      <img className="h-48 w-58 absolute bottom-0 left-0" src={ma} />

      <img className="h-48 w-58 absolute bottom-0 right-0" src={mq} />
    </div>
  );
}
