import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import footerpageone from "../assets/images/footerpageone.png";
import { ReactComponent as Stars } from "../assets/images/stars.svg";
import { login } from "../services/auth";

export default function Login(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const canLogin = await login(email, password);
    if (!canLogin) {
      Swal.fire({
        title: "เข้าสู่ระบบผิดพลาด",
        text: "อีเมล์ หรือ พาสเวิร์ด ไม่ถูกต้อง",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }
    Swal.fire({
      title: "เข้าสู่ระบบสำเร็จ",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
    });
    history.push("/scoreboard");
  };

  return (
    <div className="bg-gradient-to-b from-forthpurple to-fifthpurple h-screen w-screen font-thaifonts flex overflow-hidden">
      <Stars className="absolute h-full w-full z-0" />

      {/* <BgLogin className=" object-cover overflow-hidden object-bottom"> */}
      <div className="max-w-lg m-auto bg-white py-10  rounded-3xl px-20 z-10 w-96">
        <form onSubmit={handleLogin}>
          <p className="text-fifthpurple text-center text-2xl font-poppins">
            Sign In
          </p>
          <p className="text-firstpurple">E-mail</p>
          <div className="flex mt-1 ">
            <input
              className="border-secondpurple border-2 rounded-lg p-1 w-full text-sm focus:outline-none focus:border-thirdpurple"
              placeholder="กรุณาใส่อีเมล์"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-firstpurple mt-2">Password</p>
          <input
            className="border-secondpurple border-2 rounded-lg p-1 w-full text-sm focus:outline-none focus:border-thirdpurple "
            placeholder="กรอกรหัสผ่าน"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className=" mt-2 bg-secondpurple hover:bg-firstpurple text-white font-poppins text-sm hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {/* </BgLogin> */}
      <img
        draggable={false}
        className="absolute bottom-0 w-full object-cover opacity-90"
        src={footerpageone}
      />
    </div>
  );
}
