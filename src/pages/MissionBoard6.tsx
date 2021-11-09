import React, { ReactElement, useEffect, useState } from "react";
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
import classNames from "classnames";
import {
  getDuration,
  getMission,
  startMission,
  submitMission1,
  submitMission6,
} from "../services/mission";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import star_timer from "../assets/images/star-timer.png";
import "./alert.css";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  const [answer, setAnswer] = useState([
    [true, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [true, false, false, false],
  ]);
  const [timer, setTimer] = useState<string>("00:00");

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    const isCorrect = await submitMission6(answer);
    if (isCorrect) {
      Swal.fire({
        title: "คำตอบถูกต้อง",
        icon: "success",
        text: `ใช้เวลาไปทั้งหมด ${timer}`,
      });
      history.push("/scoreboard");
      getMissionTimmer(6);
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
      title: '<strong class="title"><u>ภารกิจ 6</u>: ลำแสงแห่งอนาคต</strong>',
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
        startMission(6)
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

  const getMissionTimmer = (missionId: number | string) => {
    getMission(missionId)
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
    getMissionTimmer(6);
  }, []);

  const classIsChoose = (row: number, col: number): string => {
    return answer[row][col] ? "" : "filter grayscale opacity-20";
  };

  const handleClickAnswer = (row: number, col: number) => {
    let temp = [...answer];
    temp[row][col] = !temp[row][col];
    console.log("OK");
    setAnswer(temp);
  };

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
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
      <div className="grid grid-cols-4 w-full">
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
                <button className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center">
                  คู่มือการเล่นเกม
                </button>
              </div>
            </div>
            <img src={logo5} alt="logo mission" />
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
                  src={laserGun}
                  className={classNames("object-contain", "cursor-pointer")}
                  alt="gun"
                />
              </div>
              <div className="bg-white">
                <img
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][1],
                  })}
                  onClick={() => handleClickAnswer(0, 1)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={beamSlitterL}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][2],
                  })}
                  onClick={() => handleClickAnswer(0, 2)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={beamSlitterL}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][3],
                  })}
                  onClick={() => handleClickAnswer(0, 3)}
                />
              </div>
              {/* ROW 2 */}
              <div className="bg-white">
                <img
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][0],
                  })}
                  onClick={() => handleClickAnswer(1, 0)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={mirrorRB}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][1],
                  })}
                  onClick={() => handleClickAnswer(1, 1)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={mirrorLT}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][2],
                  })}
                  onClick={() => handleClickAnswer(1, 2)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={beamSlitterT}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][3],
                  })}
                  onClick={() => handleClickAnswer(1, 3)}
                />
              </div>
              {/* ROW 3 */}
              <div className="bg-white">
                <img
                  src={beamSlitterR}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][0],
                  })}
                  onClick={() => handleClickAnswer(2, 0)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][1],
                  })}
                  onClick={() => handleClickAnswer(2, 1)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={beamSlitterT}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][2],
                  })}
                  onClick={() => handleClickAnswer(2, 2)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={mirrorLT}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][3],
                  })}
                  onClick={() => handleClickAnswer(2, 3)}
                />
              </div>
              {/* ROW 4 */}
              <div className="bg-white">
                <img
                  src={beamDetector}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer")}
                />
              </div>
              <div className="bg-white">
                <img
                  src={opaquePlate}
                  alt="plate"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[3][1],
                  })}
                  onClick={() => handleClickAnswer(3, 1)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={mirrorRB}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[3][2],
                  })}
                  onClick={() => handleClickAnswer(3, 2)}
                />
              </div>
              <div className="bg-white">
                <img
                  src={mirrorLT}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[3][3],
                  })}
                  onClick={() => handleClickAnswer(3, 3)}
                />
              </div>
            </div>
            <button
              onClick={handleSubmitAnswer}
              className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
            >
              ส่งคำตอบ
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90"
        src={footer6}
        alt="footer"
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
