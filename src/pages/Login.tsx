import React, { ReactElement } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";
import { ReactComponent as Footerpageone } from "../assets/images/footerpageone.svg";
import { ReactComponent as Stars } from "../assets/images/stars.svg";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex">
      <Stars className="absolute h-full w-full z-0" />
      {/* <BgLogin className=" object-cover overflow-hidden object-bottom"> */}
      <div className="max-w-lg m-auto bg-white py-10  rounded-3xl px-20 z-10">
        <p className="text-fifthpurple text-center text-2xl">เข้าสู่ระบบ</p>
        <p className="text-firstpurple">E-mail</p>
        <div className="flex mt-1 ">
          <input
            className="border-secondpurple border-2 rounded-lg p-1 "
            placeholder="กรุณาใส่อีเมล์"
          />
        </div>
        <p className="text-fifthpurple text-center text-2xl">เข้าสู่ระบบ</p>
      </div>
      {/* </BgLogin> */}
      <Footerpageone className="absolute bottom-0 object-cover" />
    </div>
  );
}
