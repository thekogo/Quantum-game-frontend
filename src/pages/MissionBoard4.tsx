import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo4 from "../assets/images/logo4.png";
import footer4 from "../assets/images/footer4.png";
import topper4 from "../assets/images/topper4.png";
import Swal from "sweetalert2";
import {
  getDuration,
  getMission,
  startMission,
  submitMission4,
} from "../services/mission";
import star_timer from "../assets/images/star-timer.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MissionScoreboard from "../components/MissionScoreboard";
import m4 from "../assets/images/m4.png";
import { IUser } from "../interface/user";
import { questionList } from "../constrants/question4";

interface Props {
  user: IUser;
}

export default function MissionBoard({ user }: Props): ReactElement {
  const [timer, setTimer] = useState<string>("00:00");
  const [isFinish, setIsFinish] = useState(false);
  const myQuestion = questionList[user.id % questionList.length];
  const [answer, setAnswer] = useState<(string | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const history = useHistory();

  const handleSubmitAnswer = async () => {
    submitMission4(answer)
      .then((res) => {
        Swal.fire({
          title: "คำตอบถูกต้อง",
          icon: "success",
          text: `ใช้เวลาไปทั้งหมด ${timer}`,
        });
        history.push("/scoreboard");
        getMissionTimmer(4);
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
          setIsFinish(true);
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

  const showDetailMission1 = () => {
    if (timer !== "00:00") return;
    Swal.fire({
      title: '<strong class="title"><u>ภารกิจ 4</u>: จับคู่ชู้ชื่น</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl">1.ผู้เล่นจะสวมบทเป็นพนักงาน HR ในบริษัท QX โดยทางผู้บริหารต้องการบุคลากรจำนวนหนึ่งเพื่อสร้างควอนตัมคอมพิวเตอร์ในประเทศไทย<br/><br/>2.ผู้เล่นจะต้องคัดเลือกคนให้เหมาะสมกับตำแหน่งที่เปิดรับ โดยพิจารณาจากใบสมัครงานของพวกเขา</div>',
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
        startMission(4)
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

  const handleSetAnswer = (e: any, idx: number) => {
    let temp = [...answer];
    temp[idx] = e.target.value;
    setAnswer(temp);
  };

  useEffect(() => {
    (async () => {
      getMissionTimmer(4);
    })();
  }, []);

  const handleShowManual = () => {
    Swal.fire({
      title: '<strong class="title "><u>ภารกิจ 4</u>: จับคู่ชู้ชื่น</strong>',
      html: '<div class="text-left px-52 font-thaifonts text-xl">1.ผู้เล่นจะสวมบทเป็นพนักงาน HR ในบริษัท QX โดยทางผู้บริหารต้องการบุคลากรจำนวนหนึ่งเพื่อสร้างควอนตัมคอมพิวเตอร์ในประเทศไทย<br/><br/>2.ผู้เล่นจะต้องคัดเลือกคนให้เหมาะสมกับตำแหน่งที่เปิดรับ โดยพิจารณาจากใบสมัครงานของพวกเขา</div>',
      customClass: {
        popup: "manual-wide",
      },
    });
  };
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-full w-screen font-thaifonts flex">
      <Stars className="absolute h-full w-full z-0" />
      <Link to="/scoreboard" className="z-50">
        <img
          draggable={false}
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>
      <img draggable={false} className="absolute  z-0" src={topper4} />
      <div className="absolute top-0 right-0 m-8 w-48 h-28 z-40">
        <div className="top-0 right-0 mt-4 mr-4 mb-2 w-full h-full border-2 rounded-3xl flex flex-wrap content-center justify-center relative">
          <img
            draggable={false}
            className="absolute m-2 self-center top-0 right-0"
            src={star_timer}
          />
          <p className="text-white font-poppins text-4xl mt-2">{timer}</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <button
            onClick={handleShowManual}
            className="w-4/5 mt-2  bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 hover:border-transparent rounded-full self-center"
          >
            กติกาภารกิจที่ 4
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full z-10">
        <div className="col-span-1 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <MissionScoreboard logo={logo4} missionId="4" />
          </div>
        </div>
        <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-evenly mt-2">
          <div className=" w-auto z-10 col-span-2 flex flex-col items-center justify-center mt-2">
            <p className="text-white mb-8 text-5xl ">
              ภารกิจ 4 : จับคู่ชู้ชื่น
            </p>
            <p className="text-2xl font-thaifonts text-center text-white mb-8">
              จงเลือกงานเกี่ยวกับเทคโนโลยีควอนตัมที่เหมาะสมกับแต่ละคน
              <p />
            </p>
            <p className="font-thaifonts text-lg text-white">
              เราเป็นพนักงาน HR อยู่ในบริษัท QX
              โดยทางผู้บริหารต้องการบุคลาการจำนวนหนึ่งเพื่อมาสร้างควอนตัมคอมพิวเตอร์ในประเทศไทย
              ในบริษัทมีตำแหน่งที่ว่าง และคุณได้รับใบสมัครงานมา
              ให้คัดคนเข้ามาอยู่ในตำแหน่งที่เหมาะสม
            </p>

            <div>
              <div className=" border-2 p-2 rounded-2xl mt-8 ">
                <table className="border border-collapse border-transparent mt-2 text-base 3xl:text-lg text-white">
                  <thead>
                    <tr>
                      <th className="border border-l-0 border-t-0 px-4 pb-5">
                        ชื่อ
                      </th>
                      <th className="border border-l-0 border-t-0 px-4 pb-5">
                        อาชีพ
                      </th>
                      <th className="border border-l-0 border-t-0 px-4 pb-5">
                        งานที่ทำ
                      </th>
                      <th className="border border-l-0 border-t-0 border-r-0 px-4 pb-5">
                        ตอบ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="p-2">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4 ">
                        {myQuestion[0].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[0].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[0].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[0]}
                            onChange={(e) => handleSetAnswer(e, 0)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[1].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[1].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[1].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[1]}
                            onChange={(e) => handleSetAnswer(e, 1)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[2].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[2].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[2].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[2]}
                            onChange={(e) => handleSetAnswer(e, 2)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[3].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[3].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[3].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[3]}
                            onChange={(e) => handleSetAnswer(e, 3)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[4].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[4].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[4].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[4]}
                            onChange={(e) => handleSetAnswer(e, 4)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[5].name}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[5].carrer}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        {myQuestion[5].duty}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select
                            value={answer[5]}
                            onChange={(e) => handleSetAnswer(e, 5)}
                            className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins"
                          >
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum FPGA Engineers"
                            >
                              1.Quantum FPGA Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Cryogenic Engineers"
                            >
                              2.Quantum Cryogenic Engineers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Computer Architects"
                            >
                              3.Quantum Computer Architects
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Algorithms Researcher"
                            >
                              4.Quantum Algorithms Researcher
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Complexity Theorists"
                            >
                              5.Quantum Complexity Theorists
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Software Developers"
                            >
                              6.Quantum Software Developers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Community Builders"
                            >
                              7.Quantum Community Builders
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Superconducting Qubit Researchers"
                            >
                              8.Superconducting Qubit Researchers
                            </option>
                            <option
                              className="bg-lbFirstpurple"
                              value="Quantum Microwave Engineers"
                            >
                              9.Quantum Microwave Engineers
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              {!isFinish && (
                <button
                  onClick={handleSubmitAnswer}
                  className="mt-6 w-24  bg-indigo-500 hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
                >
                  ส่งคำตอบ
                </button>
              )}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col justify-center items-center z-10">
          <div>
            <img draggable={false} className="h-44 w-40 mx-auto " src={m4} />
            <a href="https://drive.google.com/u/0/uc?id=10r5ABbZM3fpww7ZAVGkI9JDCltfoOdqG&export=download">
              <button className="  mt-6   bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full z-10">
                ข้อมูลของตำแหน่งงาน
              </button>
            </a>
          </div>
        </div>
      </div>
      <img
        draggable={false}
        className="fixed bottom-0 object-cover opacity-90 "
        src={footer4}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
