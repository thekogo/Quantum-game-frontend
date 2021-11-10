import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo3 from "../assets/images/Mission3/logo-crop.png";
import Cloud from "../assets/images/cloud.png";
import P1 from "../assets/images/Mission3/set1/1.png";
import P2 from "../assets/images/Mission3/set1/2.png";
import P3 from "../assets/images/Mission3/set1/3.png";
import P4 from "../assets/images/Mission3/set1/4.png";
import P5 from "../assets/images/Mission3/set1/5.png";
import arrow from "../assets/images/Mission3/arrow.png";
import footer3 from "../assets/images/footer3.png";
import { useHistory } from "react-router";
import { getDuration, startMission, submitMission3 } from "../services/mission";
import Swal from "sweetalert2";
import star_timer from "../assets/images/star-timer.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import MissionScoreboard from "../components/MissionScoreboard";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  const [timer, setTimer] = useState<string>("00:00");
  const [answer, setAnswer] = useState<(number | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    const isCorrect = await submitMission3(answer);
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

  const handleSetAnswer = (idx: number, value: number) => {
    let temp = [...answer];
    temp[idx] = value;
    setAnswer(temp);
  };
  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title:
        '<strong class="title"><u>ภารกิจ 3</u>: เรียงปีไม่เรียงเบอร์</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl ">1.ผู้เล่นจะได้รับรูปนักวิทยาศาสตร์พร้อมคำบรรยายผลงานและความสามารถ<br/><br/>2.ผู้เล่นต้องเรียงลำดับปีเกิดของนักวิทยาศาสตร์ โดยเรียงลำดับจากน้อยไปมากให้ถูกต้อง จึงจะผ่านภารกิจ</div>',
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

  useEffect(() => {
    showDetailMission1();
  }, []);

  const handleShowManual = () => {
    Swal.fire({
      title:
        '<strong class="title "><u>ภารกิจ 3</u>: เรียงปีไม่เรียงเบอร์</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl ">1.ผู้เล่นจะได้รับรูปนักวิทยาศาสตร์พร้อมคำบรรยายผลงานและความสามารถ<br/><br/>2.ผู้เล่นต้องเรียงลำดับปีเกิด(คศ.) ของนักวิทยาศาสตร์ โดยเรียงลำดับจากน้อยไปมากให้ถูกต้อง จึงจะผ่านภารกิจ<br/><br/>ตัวอย่าง   19XX < 19XX < 19XX < 19XX <19XX</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
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

      <div className="grid grid-cols-12 w-full z-10">
        <div className="col-span-3 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <div className="absolute top-0 right-0 m-8 w-48 h-28">
              <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
                <img
                  className="absolute m-2 self-center top-0 right-0"
                  src={star_timer}
                />
                <p className="text-white font-poppins text-4xl mt-2">{timer}</p>
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
            <MissionScoreboard logo={logo3} missionId="3" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-7 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-8 text-5xl ">
            ภารกิจ 3 : เรียงปีไม่เรียงเบอร์
          </p>
          <p className="text-white font-thaifonts text-2xl mb-8">
            จงเรียงปีเกิดของนักวิทยาศาสตร์ทั้ง 5 ท่านจากก่อนไปหลัง
          </p>
          <div className="flex flex-col p-4 w-full font-thaifonts text-lg">
            <div className="flex flex-wrap grid grid-cols-2 gap-8 w-full">
              {/* PIC 1-1 */}
              <div className="border p-2 rounded-3xl h-36">
                <div className="flex h-full">
                  <img
                    src={P1}
                    className="border h-32 w-1/5 rounded-3xl object-cover"
                  />

                  <p className="p-4 text-white text-lg self-center">
                    ผู้มีส่วนร่วมในความก้าวหน้าของฟิสิกส์เชิงทฤษฎี
                    แต่ก็เป็นผู้ถูกจดจำในฐานะนักฟิสิกส์ผู้ริเริ่มทฤษฎีควอนตัมซึ่งปฏิวัติความเข้าใจของมนุษย์เกี่ยวกับกระบวนการปรมาณูและอะตอม
                  </p>
                </div>
              </div>
              {/* PIC 1-2 */}
              <div className="border p-2 rounded-3xl h-36">
                <div className="flex h-full">
                  <img
                    src={P2}
                    className="border h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white text-lg self-center">
                    ผู้มีส่วนสนับสนุนพื้นฐานในการทำความเข้าใจโครงสร้างอะตอมและทฤษฎีควอนตัม
                    ซึ่งเขาได้รับรางวัลโนเบลสาขาฟิสิกส์จากงานด้านการสำรวจโครงสร้างอะตอมและรังสีที่เล็ดลอดออกมา
                  </p>
                </div>
              </div>
              {/* PIC 2-1 */}
              <div className="border p-2 rounded-3xl h-36">
                <div className="flex h-full">
                  <img
                    src={P3}
                    className="border h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white text-lg self-center">
                    ผู้สร้างเมทริกซ์ 2 × 2
                    ที่เป็นพื้นฐานของตัวดำเนินการการหมุนในทฤษฎีควอนตัม
                  </p>
                </div>
              </div>
              {/* PIC 2-2 */}
              <div className="border p-2 rounded-3xl h-36">
                <div className="flex h-full">
                  <img
                    src={P4}
                    className="border h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white text-lg self-center">
                    นักวิทยาศาสตร์ผู้สร้างการอินทีเกรทตามวิถี (path integral)
                    และผู้ตั้งสมมติฐานว่าหากเราต้องการจำลองระบบควอนตัม
                    เราจำเป็นจะต้องสร้างด้วยควอนตัมคอมพิวเตอร์
                  </p>
                </div>
              </div>
              {/* PIC 3-1 */}
              <div className="border p-2 rounded-3xl h-36 col-span-2 w-1/2 mx-auto">
                <div className="flex h-full">
                  <img
                    src={P5}
                    className="border h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white text-lg self-center">
                    นักวิทยาศาสตร์ผู้คิดค้นควอนตัมอัลกอริทึมสำหรับแยกตัวประกอบเฉพาะของจำนวนเต็มขนาดใหญ่
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="text-center mx-auto my-auto col-span-2 w-4/5">
                <div className="flex flex-wrap bg-thirdpurple w-full mx-auto rounded-full justify-center p-3">
                  <input
                    value={answer[0]}
                    onChange={(e) => handleSetAnswer(0, Number(e.target.value))}
                    className="self-center placeholder-gray-400 font-poppins rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                    placeholder=""
                  />{" "}
                  <img src={arrow} className="flex my-auto w-6" />
                  <input
                    value={answer[1]}
                    onChange={(e) => handleSetAnswer(1, Number(e.target.value))}
                    className="self-center rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                  />{" "}
                  <img src={arrow} className="flex my-auto w-6" />
                  <input
                    value={answer[3]}
                    onChange={(e) => handleSetAnswer(3, Number(e.target.value))}
                    className="self-center rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                  />{" "}
                  <img src={arrow} className="flex my-auto w-6" />
                  <input
                    value={answer[4]}
                    onChange={(e) => handleSetAnswer(4, Number(e.target.value))}
                    className="self-center rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                  />{" "}
                  <img src={arrow} className="flex my-auto w-6" />
                  <input
                    value={answer[5]}
                    onChange={(e) => handleSetAnswer(5, Number(e.target.value))}
                    className="self-center rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
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
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90 "
        src={footer3}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
