import React, { ReactElement } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo4 from "../assets/images/logo4.png";
import footer4 from "../assets/images/footer4.png";
import topper4 from "../assets/images/topper4.png";
import star_timer from "../assets/images/star-timer.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <img className="absolute  z-0" src={topper4} />

      <div className="grid grid-cols-4 w-full">
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
            <img src={logo4} />
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
          <p className="text-white  text-5xl ">ภารกิจ 4 : จับคู่ชูชื่น</p>
          <div className="text-white text-sm">
            เนื้อเรื่อง: เราเป็นพนักงาน HR อยู่ในบริษัท QX
            โดยทางผู้บริหารต้องการบุคลาการจำนวนหนึ่งเพื่อมาสร้างควอนตัมคอมพิวเตอร์ในประเทศไทย
            ในบริษัทมีตำแหน่งที่ว่าง และคุณได้รับใบสมัครงานมา
            ให้คัดคนเข้ามาอยู่ในตำแหน่งที่เหมาะสม
            <div>
              <table className=" border-4 mt-2">
                <thead>
                  <tr>
                    <th className="w-1/4 ...">ชื่อ</th>
                    <th className="w-1/4 ...">อาชีพ</th>
                    <th className="w-1/4 ...">งานที่ทำ</th>
                    <th className="w-1/2 ...">ตอบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-forthpurple p-3">
                    <td>Alan</td>
                    <td>วิศวกรรมเครื่องกล</td>
                    <td>ทำระบบหล่อเย็นในโรงงาน</td>
                    <td>
                      <div className="flex items-center relative inline-block w-full h-14 text-black ">
                        <select
                          className="w-full h-10 pl-2 pr-7 text-sm placeholder-secondpurple rounded-md  appearance-none  font-poppins"
                          placeholder="เลือกคำตอบ"
                        >
                          <option>เลือกคำตอบ </option>
                          <option>1.Quantum FPGA Engineers </option>
                          <option>2.Quantum Cryogenic Engineers </option>
                          <option>3.Quantum Computer Architects</option>
                          <option>4.Quantum Algorithms Researcher</option>
                          <option>5.Quantum Complexity Theorists</option>
                          <option>6.Quantum Software Developers</option>
                          <option>7.Quantum Community Builders</option>
                          <option>8.Superconducting Qubit Researchers</option>
                          <option>9.Quantum Microwave Engineers </option>
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

                  <td>Gus</td>
                  <td>วิศวกรรมไฟฟ้า</td>
                  <td>ทำงานเกี่ยวกับอุปกรณ์รับส่งคลื่นแม่เหล็กไฟฟ้า</td>
                  <td>
                    <div className="flex items-center relative inline-block w-full h-14 text-black ">
                      <select
                        className="w-full h-10 pl-2 pr-7 text-sm placeholder-secondpurple rounded-md  appearance-none  font-poppins"
                        placeholder="เลือกคำตอบ"
                      >
                        <option>เลือกคำตอบ </option>
                        <option>1.Quantum FPGA Engineers </option>
                        <option>2.Quantum Cryogenic Engineers </option>
                        <option>3.Quantum Computer Architects</option>
                        <option>4.Quantum Algorithms Researcher</option>
                        <option>5.Quantum Complexity Theorists</option>
                        <option>6.Quantum Software Developers</option>
                        <option>7.Quantum Community Builders</option>
                        <option>8.Superconducting Qubit Researchers</option>
                        <option>9.Quantum Microwave Engineers </option>
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

                  <tr className="bg-forthpurple">
                    <td>Finley</td>
                    <td>ฟิสิกส์</td>
                    <td>เป็นเน็ตไอดอล</td>
                    <td>
                      <div className="flex items-center relative inline-block w-full h-14 text-black ">
                        <select
                          className="w-full h-10 pl-2 pr-7 text-sm placeholder-secondpurple rounded-md  appearance-none  font-poppins"
                          placeholder="เลือกคำตอบ"
                        >
                          <option>เลือกคำตอบ </option>
                          <option>1.Quantum FPGA Engineers </option>
                          <option>2.Quantum Cryogenic Engineers </option>
                          <option>3.Quantum Computer Architects</option>
                          <option>4.Quantum Algorithms Researcher</option>
                          <option>5.Quantum Complexity Theorists</option>
                          <option>6.Quantum Software Developers</option>
                          <option>7.Quantum Community Builders</option>
                          <option>8.Superconducting Qubit Researchers</option>
                          <option>9.Quantum Microwave Engineers </option>
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
                    <td>Belinda </td>
                    <td>คณิตศาสตร์</td>
                    <td>เป็นอาจารย์สอนคณิตศาสตร์ในมหาวิทยาลัย</td>
                    <td>
                      <div className="flex items-center relative inline-block w-full h-14 text-black ">
                        <select
                          className="w-full h-10 pl-2 pr-7 text-sm placeholder-secondpurple rounded-md  appearance-none  font-poppins"
                          placeholder="เลือกคำตอบ"
                        >
                          <option>เลือกคำตอบ </option>
                          <option>1.Quantum FPGA Engineers </option>
                          <option>2.Quantum Cryogenic Engineers </option>
                          <option>3.Quantum Computer Architects</option>
                          <option>4.Quantum Algorithms Researcher</option>
                          <option>5.Quantum Complexity Theorists</option>
                          <option>6.Quantum Software Developers</option>
                          <option>7.Quantum Community Builders</option>
                          <option>8.Superconducting Qubit Researchers</option>
                          <option>9.Quantum Microwave Engineers </option>
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
            <div>
              <button className="mt-6 w-full bg-indigo-500 hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                ส่งคำตอบ
              </button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://drive.google.com/file/d/10r5ABbZM3fpww7ZAVGkI9JDCltfo">
            <button className=" z-10 mb-32 mt-6 ml-32 text-lg w-2/4 bg-mhoored hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full z-10">
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
