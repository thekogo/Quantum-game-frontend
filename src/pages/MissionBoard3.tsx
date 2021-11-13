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
import {
  getDuration,
  getMission,
  startMission,
  submitMission3,
} from "../services/mission";
import Swal from "sweetalert2";
import star_timer from "../assets/images/star-timer.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import MissionScoreboard from "../components/MissionScoreboard";
import { IUser } from "../interface/user";
import { questionList } from "../constrants/question3";
interface Props {
  user: IUser;
}

export default function MissionBoard({ user }: Props): ReactElement {
  const [timer, setTimer] = useState<string>("00:00");
  const [isFinish, setIsFinish] = useState(false);
  const [answer, setAnswer] = useState<string[]>(["", "", "", "", ""]);

  const myQuestion = questionList[user.id % questionList.length];

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    submitMission3(answer)
      .then((res) => {
        Swal.fire({
          title: "คำตอบถูกต้อง",
          icon: "success",
          text: `ใช้เวลาไปทั้งหมด ${timer}`,
        });
        history.push("/scoreboard");
        getMissionTimmer(3);
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

  const handleSetAnswer = (idx: number, value: string) => {
    let temp = [...answer];
    temp[idx] = value;
    setAnswer(temp);
  };
  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title:
        '<strong class="title"><u>ภารกิจ 3</u>: เรียงปีไม่เรียงเบอร์</strong>',
      html:
        '<div class="text-left px-52 font-thaifonts text-xl ">1.ผู้เล่นจะได้รับรูปนักวิทยาศาสตร์ที่เกี่ยวข้องกับเทคโนโลยีควอนตัมพร้อมคำบรรยายผลงานและความสามารถ<br/><br/>2.ผู้เล่นต้องเรียงลำดับปีเกิดของนักวิทยาศาสตร์ โดยเรียงลำดับจากน้อยไปมากให้ถูกต้อง จึงจะผ่านภารกิจ</div>' +
        '<br/><br/><div class="flex justify-center">' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1880</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1890</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1900</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1910</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1920</div>' +
        '</div><div class="font-thaifonts mt-2">ตัวอย่างคำตอบ</div>',
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
              setTimer(stringDuration);
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
            history.push("/scoreboard");
          });
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
        history.push("/scoreboard");
      });
  };

  useEffect(() => {
    (async () => {
      getMissionTimmer(3);
    })();
  }, []);

  const handleShowManual = () => {
    Swal.fire({
      title:
        '<strong class="title "><u>ภารกิจ 3</u>: เรียงปีไม่เรียงเบอร์</strong>',
      html:
        '<div class="text-left px-52 font-thaifonts text-xl ">1.ผู้เล่นจะได้รับรูปนักวิทยาศาสตร์ที่เกี่ยวข้องกับเทคโนโลยีควอนตัมพร้อมคำบรรยายผลงานและความสามารถ<br/><br/>2.ผู้เล่นต้องเรียงลำดับปีเกิดของนักวิทยาศาสตร์ โดยเรียงลำดับจากน้อยไปมากให้ถูกต้อง จึงจะผ่านภารกิจ</div>' +
        '<br/><br/><div class="flex justify-center">' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1880</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1890</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1900</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1910</div>' +
        '<div class="bg-gray-200 px-8 py-2 rounded-full font-poppins text-2xl mx-2">1920</div>' +
        '</div><div class="font-thaifonts mt-2">ตัวอย่างคำตอบ</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
  };
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple  h-full min-h-screen w-full font-thaifonts flex overflow-x-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <Link to="/scoreboard" className="z-50">
        <img
          draggable={false}
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>

      <div className="grid grid-cols-12 w-full z-10">
        <div className="col-span-3 flex items-center justify-center">
          <div className="absolute top-0 right-0 m-8 md:w-40 xl:w-48 md:h-20 xl:h-28">
            <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
              <img
                draggable={false}
                className="absolute m-2 self-center top-0 right-0 transform md:scale-75 xl:scale-100"
                src={star_timer}
              />
              <p className="text-white font-poppins md:text-2xl xl:text-4xl mt-2">{timer}</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <button
                onClick={handleShowManual}
                className="w-4/5 xl:mt-2 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center"
              >
                กติกาภารกิจที่ 3
              </button>
            </div>
          </div>
          <div className=" p-3 rounded-3xl z-10">
            <MissionScoreboard logo={logo3} missionId="3" />
          </div>
        </div>
        <div className=" w-auto z-10 md:col-span-9 md:mr-4 xl:col-span-8 3xl:col-span-7 flex flex-col items-center justify-center mt-2">
          <p className="text-white mb-8 md:text-4xl md:mr-40 xl:mr-28 3xl-mr-0 xl:text-5xl mt-20">
            ภารกิจ 3 : เรียงปีไม่เรียงเบอร์
          </p>
          <p className="text-white font-thaifonts md:mr-40 xl:mr-28 3xl-mr-0 md:text-xl  xl:text-2xl md:mb-8 xl:mb-1 3xl:mb-8 ">
            จงเรียงปีเกิดของนักวิทยาศาสตร์ทั้ง 5 ท่านจากก่อนไปหลัง
          </p>
          <div className="flex flex-col p-4 w-full h-full font-thaifonts text-lg">
            <div className="flex-wrap grid grid-cols-2 3xl:gap-8 md:gap-4 w-full">
              {/* PIC 1-1 */}
              <div className="border p-2 rounded-3xl md:h-28 3xl:h-32">
                <div className="flex h-full">
                  <img
                    draggable={false}
                    src={myQuestion[0].imgPath}
                    className="border  w-1/5 rounded-3xl object-cover"
                  />

                  <p className="p-4 text-white self-center md:text-sm xl:text-base 3xl:text-lg">
                    {myQuestion[0].description}
                  </p>
                </div>
              </div>
              {/* PIC 1-2 */}
              <div className="border p-2 rounded-3xl md:h-28 3xl:h-32">
                <div className="flex h-full">
                  <img
                    draggable={false}
                    src={myQuestion[1].imgPath}
                    className="border w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white md:text-sm xl:text-base 3xl:text-lg self-center">
                    {myQuestion[1].description}
                  </p>
                </div>
              </div>
              {/* PIC 2-1 */}
              <div className="border p-2 rounded-3xl md:h-28 3xl:h-32">
                <div className="flex h-full">
                  <img
                    draggable={false}
                    src={myQuestion[2].imgPath}
                    className="border w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white md:text-sm xl:text-base 3xl:text-lg self-center">
                    {myQuestion[2].description}
                  </p>
                </div>
              </div>
              {/* PIC 2-2 */}
              <div className="border p-2 rounded-3xl md:h-28 3xl:h-32">
                <div className="flex h-full">
                  <img
                    draggable={false}
                    src={myQuestion[3].imgPath}
                    className="border w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white md:text-sm xl:text-base 3xl:text-lg self-center">
                    {myQuestion[3].description}
                  </p>
                </div>
              </div>
              {/* PIC 3-1 */}
              <div className="border p-2 rounded-3xl md:h-28 3xl:h-32 col-span-2 w-1/2 mx-auto">
                <div className="flex h-full">
                  <img
                    draggable={false}
                    src={myQuestion[4].imgPath}
                    className="border w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white md:text-sm xl:text-base 3xl:text-lg self-center">
                    {myQuestion[4].description}
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="text-center mx-auto my-auto col-span-2 md:w-full xl:w-4/5">
                {!isFinish && (
                  <>
                    <div className="flex flex-wrap bg-thirdpurple w-full mx-auto rounded-full justify-center p-3 ">
                      <input
                        value={answer[0]}
                        onChange={(e) => handleSetAnswer(0, e.target.value)}
                        className="self-center placeholder-gray-400 rounded-full w-1/6 py-1 md:text-base xl:text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                        placeholder=""
                      />{" "}
                      <img
                        draggable={false}
                        src={arrow}
                        className="flex my-auto w-6"
                      />
                      <input
                        value={answer[1]}
                        onChange={(e) => handleSetAnswer(1, e.target.value)}
                        className="self-center rounded-full w-1/6 py-1 md:text-base xl:text-mdmd:text-base xl:text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                      />{" "}
                      <img
                        draggable={false}
                        src={arrow}
                        className="flex my-auto w-6"
                      />
                      <input
                        value={answer[2]}
                        onChange={(e) => handleSetAnswer(2, e.target.value)}
                        className="self-center rounded-full w-1/6 py-1 md:text-base xl:text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                      />{" "}
                      <img
                        draggable={false}
                        src={arrow}
                        className="flex my-auto w-6"
                      />
                      <input
                        value={answer[3]}
                        onChange={(e) => handleSetAnswer(3, e.target.value)}
                        className="self-center rounded-full w-1/6 py-1 md:text-base xl:text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                      />{" "}
                      <img
                        draggable={false}
                        src={arrow}
                        className="flex my-auto w-6"
                      />
                      <input
                        value={answer[4]}
                        onChange={(e) => handleSetAnswer(4, e.target.value)}
                        className="self-center rounded-full w-1/6 py-1 md:text-base xl:text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center"
                      />
                    </div>

                    <button
                      onClick={handleSubmitAnswer}
                      className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
                    >
                      ส่งคำตอบ
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        draggable={false}
        className="fixed bottom-0 object-cover w-full opacity-90 "
        src={footer3}
      />
    </div>
  );
}
