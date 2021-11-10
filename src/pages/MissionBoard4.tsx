import React, { ReactElement, useEffect, useState } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo4 from "../assets/images/logo4.png";
import footer4 from "../assets/images/footer4.png";
import topper4 from "../assets/images/topper4.png";
import Swal from "sweetalert2";
import { getDuration, startMission } from "../services/mission";
import star_timer from "../assets/images/star-timer.png";
import back from "../assets/images/backward.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MissionScoreboard from "../components/MissionScoreboard";
import m4 from "../assets/images/m4.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  const [timer, setTimer] = useState<string>("00:00");

  const history = useHistory();

  // const showDetailMission1 = () => {
  //   Swal.fire({
  //     title: '<strong class="title"><u>ภารกิจ 1</u>: ถาม-ตอบ ควอนตัม</strong>',
  //     html:
  //       // '<img src="'+ "{logo1}" +'"/>' +
  //       "You can use <b>bold text</b>, " +
  //       '<a href="//sweetalert2.github.io">links</a> ' +
  //       "and other HTML tags",
  //     showCloseButton: true,
  //     showCancelButton: true,
  //     focusConfirm: false,
  //     cancelButtonText: '<i class="fa fa-thumbs-down"> กลับหน้าหลัก </i>',
  //     cancelButtonAriaLabel: "Thumbs down",
  //     confirmButtonText: "เริ่มเล่น!",
  //     reverseButtons: true,
  //     customClass: {
  //       popup: "manual-wide",
  //     },
  //   }).then(async (result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       startMission(2)
  //         .then((res) => {
  //           if (res.data.endTime) {
  //             const stringDuration = getDuration(
  //               new Date(res.data.startTime),
  //               new Date(res.data.endTime)
  //             ).toString();
  //             console.log(stringDuration);
  //             setTimer(stringDuration);
  //           } else {
  //             setInterval(() => {
  //               const stringDuration = getDuration(
  //                 new Date(res.data.startTime),
  //                 new Date()
  //               ).toString();
  //               console.log(stringDuration);
  //               setTimer(stringDuration);
  //             }, 1000);
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           history.push("/scoreboard");
  //         });
  //       console.log("OK");
  //     } else if (result.isDismissed) {
  //       history.push("/scoreboard");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   showDetailMission1();
  // });
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <Link to="/scoreboard" className="z-50">
        <img
          className="absolute  mx-auto mt-16 ml-14 cursor-pointer z-10"
          src={back}
        />
      </Link>
      <img className="absolute  z-0" src={topper4} />
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
                <table className="border border-collapse border-transparent mt-2 text-base text-white">
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
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        Alan
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        วิศวกรรมเครื่องกล
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        ทำระบบหล่อเย็นในโรงงาน
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
                        Gus
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        วิศวกรรมไฟฟ้า
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        ทำงานเกี่ยวกับอุปกรณ์รับส่งคลื่นแม่เหล็กไฟฟ้า
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
                        Finley
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        ฟิสิกส์
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        เป็นเน็ตไอดอล
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
                        Belinda{" "}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        คณิตศาสตร์
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        เป็นอาจารย์สอนคณิตศาสตร์ในมหาวิทยาลัย
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
                        Belinda{" "}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        คณิตศาสตร์
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        เป็นอาจารย์สอนคณิตศาสตร์ในมหาวิทยาลัย
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
                        Belinda{" "}
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        คณิตศาสตร์
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 px-4">
                        เป็นอาจารย์สอนคณิตศาสตร์ในมหาวิทยาลัย
                      </td>
                      <td className="border border-l-0 border-t-0 border-b-0 border-r-0 px-4">
                        <div className="flex items-center relative inline-block w-full h-14 text-white ">
                          <select className="w-full h-10 pl-2 pr-7 text-sm  border bg-transparent  rounded-md  appearance-none  font-poppins">
                            <option className="bg-lbFirstpurple text-thaifonts">
                              เลือกคำตอบ{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              1.Quantum FPGA Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              2.Quantum Cryogenic Engineers{" "}
                            </option>
                            <option className="bg-lbFirstpurple">
                              3.Quantum Computer Architects
                            </option>
                            <option className="bg-lbFirstpurple">
                              4.Quantum Algorithms Researcher
                            </option>
                            <option className="bg-lbFirstpurple">
                              5.Quantum Complexity Theorists
                            </option>
                            <option className="bg-lbFirstpurple">
                              6.Quantum Software Developers
                            </option>
                            <option className="bg-lbFirstpurple">
                              7.Quantum Community Builders
                            </option>
                            <option className="bg-lbFirstpurple">
                              8.Superconducting Qubit Researchers
                            </option>
                            <option className="bg-lbFirstpurple">
                              9.Quantum Microwave Engineers{" "}
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
              <button className="mt-6 w-24  bg-indigo-500 hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                ส่งคำตอบ
              </button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col justify-center z-10">
          <img className="h-44 w-40 mx-auto mt-16" src={m4} />
          <a href="https://drive.google.com/u/0/uc?id=10r5ABbZM3fpww7ZAVGkI9JDCltfoOdqG&export=download">
            <button className=" mb-32 mt-6 ml-32   bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full z-10">
              ข้อมูลของตำแหน่งงาน
            </button>
          </a>
        </div>
      </div>
      <img
        className="absolute bottom-0 object-cover opacity-90 "
        src={footer4}
      />
      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
