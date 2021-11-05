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
      <div className="max-w-lg m-auto bg-white py-10  rounded-3xl px-20 z-10 w-96">
        <p className="text-fifthpurple text-center text-2xl">เข้าสู่ระบบ</p>
        <p className="text-firstpurple">E-mail</p>
        <div className="flex mt-1 ">
          <input
            className="border-secondpurple border-2 rounded-lg p-1 w-full text-sm focus:outline-none focus:border-thirdpurple"
            placeholder="กรุณาใส่อีเมล์"
          />
        </div>
        <p className="text-firstpurple mt-2">Password</p>
        <input
          className="border-secondpurple border-2 rounded-lg p-1 w-full text-sm focus:outline-none focus:border-thirdpurple "
          placeholder="กรอกรหัสผ่าน"
        />

        <div className="flex justify-center mt-4">
          <button
            className="bg-gradient-to-r from-fifthpurple to-secondpurple hover:bg-indigo-400 
        text-white font-poppins py-1 px-5 rounded-full text-xs "
          >
            Log in
          </button>
        </div>
      </div>
      {/* </BgLogin> */}
      <Footerpageone className="absolute bottom-0 object-cover " />
    </div>
  );
}
