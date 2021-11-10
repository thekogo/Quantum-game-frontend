import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";

import logo6 from "../assets/images/Mission6/logo-crop.png";
import footer6 from "../assets/images/footer6.png";
import beamDetector from "../assets/images/Mission6/beamDetector.png";
import beamSlitterL from "../assets/images/Mission6/beamSlitter-l.png";
import beamSlitterR from "../assets/images/Mission6/beamSlitter-r.png";
import beamSlitterT from "../assets/images/Mission6/beamSlitter-t.png";
import laserGun from "../assets/images/Mission6/laserGun.png";
import mirrorLT from "../assets/images/Mission6/mirror-lt.png";
import mirrorRB from "../assets/images/Mission6/mirror-rb.png";
import opaquePlate from "../assets/images/Mission6/OpaquePlate.png";
import equipment from "../assets/images/Mission6/equipment.png";
import classNames from "classnames";
import {
  getDuration,
  getMission,
  startMission,
  submitMission6,
} from "../services/mission";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import star_timer from "../assets/images/star-timer.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import "./alert.css";
import MissionScoreboard from "../components/MissionScoreboard";
interface Props {}

export default function MissionBoard(): ReactElement {
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

  const handleClickAnswer = (row: number, col: number) => {
    let temp = [...answer];
    temp[row][col] = !temp[row][col];
    console.log("OK");
    setAnswer(temp);
  };
  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title:
        '<strong class="title"><u>ภารกิจ 6</u>: เรียงปีไม่เรียงเบอร์</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl">1.ก่อนการเล่น ผู้เล่นควรทำความรู้จักสัญลักษณ์ต่าง ๆ และหน้าที่ของเครื่องมือแต่ละประเภท<br/><br/>2.เมื่อเริ่มเล่น ผู้เล่นจะเห็นแผ่นภาพ ที่ประกอบด้วย ตารางพร้อมทั้งสัญลักษณ์ของเครื่องมืออยู่ประจำช่องต่าง ๆ<br/> <br/>3.ให้ผู้เล่นเลือกกดช่องที่มีสัญลักษณ์ของเครื่องมือที่ต้องการเพื่อสร้างเส้นทางเดินของแสง โดยช่องที่ไม่ได้เลือกจะไม่เกี่ยวข้องกับทางเดินของแสง<br/><br/>4.ผู้เล่นสามารถยกเลิกเครื่องมือที่เลือกไว้โดยการกดที่รูปอีกครั้ง<br/><br/>5.ผู้เล่นจะต้องสร้างเส้นทางการเดินของแสงจากจุดเริ่มต้นให้เดินทางไปยังเป้าหมาย โดยกำหนดให้แสงต้องแยกการเดินทางออกมากกว่า 1 เส้นทาง และถึงเป้าหมาย ณ จุดเดียวกัน</div>',
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
        startMission(3)
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
      title: '<strong class="title "><u>ภารกิจ 6</u>: ลำแสงแห่งอนาคต</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl">1.ก่อนการเล่น ผู้เล่นควรทำความรู้จักสัญลักษณ์ต่าง ๆ และหน้าที่ของเครื่องมือแต่ละประเภท<br/><br/>2.เมื่อเริ่มเล่น ผู้เล่นจะเห็นแผ่นภาพ ที่ประกอบด้วย ตารางพร้อมทั้งสัญลักษณ์ของเครื่องมืออยู่ประจำช่องต่าง ๆ<br/> <br/>3.ให้ผู้เล่นเลือกกดช่องที่มีสัญลักษณ์ของเครื่องมือที่ต้องการเพื่อสร้างเส้นทางเดินของแสง โดยช่องที่ไม่ได้เลือกจะไม่เกี่ยวข้องกับทางเดินของแสง<br/><br/>4.ผู้เล่นสามารถยกเลิกเครื่องมือที่เลือกไว้โดยการกดที่รูปอีกครั้ง<br/><br/>5.ผู้เล่นจะต้องสร้างเส้นทางการเดินของแสงจากจุดเริ่มต้นให้เดินทางไปยังเป้าหมาย โดยกำหนดให้แสงต้องแยกการเดินทางออกมากกว่า 1 เส้นทาง และถึงเป้าหมาย ณ จุดเดียวกัน</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
  };
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full" />
      <Link to="/scoreboard" className="z-50">
        <img
          draggable={false}
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>

      <div className="absolute top-0 right-0 m-8 w-48 h-28 z-20">
        <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
          <img
            draggable={false}
            className="absolute m-2 self-center top-0 right-0"
            src={star_timer}
            alt="star"
          />
          <p className="text-white font-poppins text-4xl mt-2">{timer}</p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <button
            onClick={handleShowManual}
            className="w-4/5 mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center"
          >
            คู่มือการเล่นเกม
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full z-10">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <MissionScoreboard logo={logo6} missionId="6" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-8 text-5xl">ภารกิจ 6 : ลำแสงแห่งอนาคต</p>
          <p className="text-2xl font-thaifonts text-center text-white mb-8">
            ยิงแสงให้โดนเป้าโดยต้องแยกแสงออกเป็นสองเส้นทาง
            <p />
          </p>
          <div className="flex flex-col gap-4 p-4 w-full">
            <div className="grid grid-cols-4 gap-4">
              {/* ROW 1 */}
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={laserGun}
                  className={classNames("object-contain", "cursor-pointer")}
                  alt="gun"
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][1],
                  })}
                  onClick={() => handleClickAnswer(0, 1)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamSlitterL}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][2],
                  })}
                  onClick={() => handleClickAnswer(0, 2)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamSlitterL}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[0][3],
                  })}
                  onClick={() => handleClickAnswer(0, 3)}
                />
              </div>
              {/* ROW 2 */}
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][0],
                  })}
                  onClick={() => handleClickAnswer(1, 0)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={mirrorRB}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][1],
                  })}
                  onClick={() => handleClickAnswer(1, 1)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={mirrorLT}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][2],
                  })}
                  onClick={() => handleClickAnswer(1, 2)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamSlitterT}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[1][3],
                  })}
                  onClick={() => handleClickAnswer(1, 3)}
                />
              </div>
              {/* ROW 3 */}
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamSlitterR}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][0],
                  })}
                  onClick={() => handleClickAnswer(2, 0)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={opaquePlate}
                  alt="block"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][1],
                  })}
                  onClick={() => handleClickAnswer(2, 1)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamSlitterT}
                  alt="change"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][2],
                  })}
                  onClick={() => handleClickAnswer(2, 2)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={mirrorLT}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[2][3],
                  })}
                  onClick={() => handleClickAnswer(2, 3)}
                />
              </div>
              {/* ROW 4 */}
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={beamDetector}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer")}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={opaquePlate}
                  alt="plate"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[3][1],
                  })}
                  onClick={() => handleClickAnswer(3, 1)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
                  src={mirrorRB}
                  alt="mirror"
                  className={classNames("object-contain", "cursor-pointer", {
                    "filter grayscale opacity-20": !answer[3][2],
                  })}
                  onClick={() => handleClickAnswer(3, 2)}
                />
              </div>
              <div className="bg-white justify-center flex flex-wrap">
                <img
                  draggable={false}
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
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <img
              draggable={false}
              className="h-44 w-40 mx-auto "
              src={equipment}
            />
            <a href="https://drive.google.com/u/1/uc?id=1stByaWJZkoXQU6_7Iop3htdY9toHfpfZ&export=download">
              <button className="  mt-2   bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full z-10">
                รายละเอียดอุปกรณ์
              </button>
            </a>
          </div>
        </div>
      </div>

      <img
        draggable={false}
        className="absolute bottom-0 object-cover opacity-90"
        src={footer6}
        alt="footer"
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
