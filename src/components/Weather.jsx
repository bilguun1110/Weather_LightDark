import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

export const Light = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1600px] h-[1200px] bg-gray-200 flex justify-center items-center">
        <div className="w-[50%] h-[1200px]  bg-gray-100 relative">
          <div className="w-[100%] h-[30%]  flex items-end pl-[130px]">
            <Image src="/yellow.png  " width={176} height={176} />
          </div>
          <div className="w-[414px] h-[828px] bg-white absolute z-20 ml-[193px] mt-[-130px] rounded-[48px]">
            <div className="w-[398px] h-[380px]  ">
              <div className="ml-[40px] mt-[81px] flex gap-[112px]">
                <div className="font-bold text-5xl  not-italic">Kraków</div>
                <CiLocationOn
                  className="w-[32px] h-[32px] "
                  width={32}
                  height={32}
                />
              </div>

              <Image
                className="w-[262] h-[262] mt-[49px] ml-[65px]"
                src="/sun.png"
                width={262}
                height={262}
              />
            </div>
            <div className="  ml-[48px]">
              <p className="text-[144px] font-bold text-gray-700 h-[195px]">
                26°
              </p>
              <p className="text-2xl font-bold text-orange-500">Bright</p>
            </div>
            <div className="flex w-[318px] justify-between mt-[48px] ml-[48px]">
              <FiHome
                className="w-[32px] h-[32px] text-gray-500"
                width={32}
                height={32}
              />
              <CiLocationOn
                className="w-[32px] h-[32px] text-gray-300"
                width={32}
                height={32}
              />
              <GoHeart
                className="w-[32px] h-[32px] text-gray-300 "
                width={32}
                height={32}
              />
              <FaRegUser
                className="w-[32px] h-[32px] text-gray-300 "
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[1200px] bg-gray-900"></div>
        <div className="border-solid border-neutral-300 w-[340px] h-[340px] absolute  border-[1px] rounded-[50%]"></div>
        <div className="border-solid border-neutral-300 w-[140px] h-[140px] absolute  border-[1px] rounded-[50%]"></div>
        <div className="border-solid border-neutral-300 w-[540px] h-[540px] absolute  border-[1px] rounded-[50%]"></div>
        <div className="border-solid border-neutral-300 w-[1340px] h-[1340px] absolute  border-[1px] rounded-[50%]"></div>
        <div className="border-solid border-neutral-300 w-[940px] h-[940px] absolute  border-[1px] rounded-[50%] "></div>
      </div>
    </div>
  );
};
