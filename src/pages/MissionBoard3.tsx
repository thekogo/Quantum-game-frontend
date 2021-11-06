import React, { ReactElement } from "react";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import logo3 from "../assets/images/Mission3/logo-crop.png";
import Cloud from "../assets/images/cloud.png";
import P1 from "../assets/images/Mission3/set1/1.png";
import P2 from "../assets/images/Mission3/set1/2.png";
import P3 from "../assets/images/Mission3/set1/3.png";
import P4 from "../assets/images/Mission3/set1/4.png";
import P5 from "../assets/images/Mission3/set1/5.png";
import arrow from "../assets/images/Mission3/arrow.png";

interface Props {}

export default function MissionBoard({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />
      <img className="absolute top-0 object-cover opacity-90" src={Cloud} />

      <div className="grid grid-cols-12 w-full">
        <div className="col-span-3 flex items-center justify-center">
          <div className=" p-3 rounded-3xl">
            <img src={logo3} />
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
        <div className=" w-auto z-10 col-span-7 flex flex-col items-center justify-evenly mt-2">
          <p className="text-white text-5xl ">
            ภารกิจ 3 : เรียงปีไม่เรียงเบอร์
          </p>
          <div className="flex flex-col p-4 w-full">
            <div className="grid grid-cols-2 gap-8 h-full">
              {/* PIC 1-1 */}
              <div className="border-4 p-2 rounded-3xl h-full">
                <div className="flex h-full">
                  <img
                    src={P1}
                    className="border-2 h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white">
                    ผู้มีส่วนร่วมในความก้าวหน้าของฟิสิกส์เชิงทฤษฎี
                    แต่ก็เป็นผู้ถูกจดจำในฐานะนักฟิสิกส์ผู้ริเริ่มทฤษฎีควอนตัมซึ่งปฏิวัติความเข้าใจของมนุษย์เกี่ยวกับกระบวนการปรมาณูและอะตอม
                  </p>
                </div>
              </div>
              {/* PIC 1-2 */}
              <div className="border-4 p-2 rounded-3xl h-full">
                <div className="flex h-full">
                  <img
                    src={P2}
                    className="border-2 h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white">
                    ผู้มีส่วนสนับสนุนพื้นฐานในการทำความเข้าใจโครงสร้างอะตอมและทฤษฎีควอนตัม
                    ซึ่งเขาได้รับรางวัลโนเบลสาขาฟิสิกส์จากงานด้านการสำรวจโครงสร้างอะตอมและรังสีที่เล็ดลอดออกมา
                  </p>
                </div>
              </div>
              {/* PIC 2-1 */}
              <div className="border-4 p-2 rounded-3xl h-full">
                <div className="flex h-full">
                  <img
                    src={P3}
                    className="border-2 h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white">
                    ผู้สร้างเมทริกซ์ 2 × 2
                    ที่เป็นพื้นฐานของตัวดำเนินการการหมุนในทฤษฎีควอนตัม
                  </p>
                </div>
              </div>
              {/* PIC 2-2 */}
              <div className="border-4 p-2 rounded-3xl h-full">
                <div className="flex h-full">
                  <img
                    src={P4}
                    className="border-2 h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white">
                    นักวิทยาศาสตร์ผู้สร้างการอินทีเกรทตามวิถี (path integral)
                    และผู้ตั้งสมมติฐานว่าหากเราต้องการจำลองระบบควอนตัม
                    เราจำเป็นจะต้องสร้างด้วยควอนตัมคอมพิวเตอร์
                  </p>
                </div>
              </div>
              {/* PIC 3-1 */}
              <div className="border-4 p-2 rounded-3xl h-full">
                <div className="flex h-full">
                  <img
                    src={P5}
                    className="border-2 h-32 w-1/5 rounded-3xl object-cover"
                  />
                  <p className="p-4 text-white">
                    นักวิทยาศาสตร์ผู้คิดค้นควอนตัมอัลกอริทึมสำหรับแยกตัวประกอบเฉพาะของจำนวนเต็มขนาดใหญ่
                  </p>
                </div>
              </div>
              <div className="text-center m-full my-auto">
                <div className="flex bg-thirdpurple w-full mx-auto rounded-2xl justify-center p-2">
                  <input className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center" />{" "}
                  <img src={arrow} className="flex my-auto w-6"/>
                  <input className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center" />{" "}
                  <img src={arrow} className="flex my-auto w-6"/>
                  <input className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center" />{" "}
                  <img src={arrow} className="flex my-auto w-6"/>
                  <input className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center" />{" "}
                  <img src={arrow} className="flex my-auto w-6"/>
                  <input className="mt-2 rounded-full w-1/6 py-1 text-md p-3 font-poppins text-fifthpurple focus:outline-none text-center" />{" "}
                </div>
                <button className="mt-2 mx-auto w-24  bg-secondpurple hover:bg-firstpurple text-white text-sm font-thaifonts hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                  ส่งคำตอบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Maa className="w-60 absolute bottom-0 right-0" /> */}
    </div>
  );
}
