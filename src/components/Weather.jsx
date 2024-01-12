import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

export const Light = () => {
  const [input, setInput] = useState("");
  const [tempMax, setTempMax] = useState("0");
  const [tempMin, setTempMin] = useState("0");
  const [city, setCity] = useState("Location");
  const [condition, setCondition] = useState("");

  const gitFetcher = async () => {
    const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${api_key}`;

    const result = await axios(url);
    console.log(result);
    const tempMax = result.data.main.temp_max;
    setTempMax(tempMax);
    const tempMin = result.data.main.temp_min;
    setTempMin(tempMin);
    const location = result.data.name;
    setCity(location);
    const cond = result.data.weather[0].main;
    setCondition(cond);
  };
  const logos = [
    { imgsrc: <FiHome width={30} height={30} className="w-[30px] h-[30px]" /> },
    {
      imgsrc: (
        <CiLocationOn width={30} height={30} className="w-[30px] h-[30px]" />
      ),
    },
    {
      imgsrc: <GoHeart width={30} height={30} className="w-[30px] h-[30px]" />,
    },
    {
      imgsrc: (
        <FaRegUser width={30} height={30} className="w-[30px] h-[30px]" />
      ),
    },
  ];

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  console.log(month);

  return (
    <div className="flex justify-center">
      <div className="w-[1600px] h-[1200px] bg-gray-200 flex justify-center items-center">
        <div className="w-[50%] h-[1200px]  bg-gray-300 relative">
          <div className="w-[512px] h-[80px] px-[24px] py-[16px] bg-gray-100 flex rounded-[48px]">
            <IoIosSearch
              onClick={gitFetcher}
              className="w-[48px] h-[48px] text-gray-400"
              width={48}
              height={48}
            />
            <input
              value={input}
              className="w-[400px]"
              onChange={(event) => setInput(event.target.value)}
            ></input>
          </div>
          <div className="w-[100%] h-[30%]  flex items-end pl-[130px]">
            <Image src="/yellow.png  " width={176} height={176} />
          </div>
          <div className="w-[414px] h-[828px] bg-white absolute z-20 ml-[193px] mt-[-130px] rounded-[48px]">
            <div className="w-[398px] h-[380px]  ">
              <div className="ml-[40px] mt-[81px] flex gap-[112px]">
                <div className="">
                  <p className="text-lg font-medium text-gray-400">
                    January {day}, {year}
                  </p>
                  <div className="font-bold text-5xl  not-italic">{city}</div>
                </div>

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
              <p className="text-[120px] font-bold text-gray-700 h-[195px]">
                {tempMax}
              </p>
              <p className="text-2xl font-bold text-orange-500">{condition}</p>
            </div>
            <div className="flex w-[318px] justify-between mt-[48px] ml-[48px]">
              {logos.map(({ imgsrc }, index) => (
                <div className="text-gray-600" key={index}>
                  {imgsrc}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[1200px] bg-gray-950  ">
          <div className="w-[520px] h-[600px] bg-gray-900 rounded-[48px] relative mt-[216px] p-2 ml-[193px]">
            <div className="w-[398px] h-[504px] bg-gray-800 rounded-[48px]">
              <div className=" flex gap-[112px]">
                <div className=" not-italic mt-[56px] ml-[40px] ">
                  <p className="text-lg font-medium text-gray-400">
                    January {day}, {year}
                  </p>
                  <p className="font-bold text-5xl text-white">{city}</p>
                </div>
                <CiLocationOn
                  className="w-[32px] h-[32px] mt-[85px] text-gray-300 "
                  width={32}
                  height={32}
                />
              </div>
              <Image
                className="w-[262] h-[262] mt-[24px] ml-[65px]"
                src="/moon.png"
                width={262}
                height={262}
              />
            </div>
            <div className="  bottom-[80px] right-[10px] absolute">
              <p className="text-[120px] font-bold text-gray-300 h-[170px]">
                {tempMin}
              </p>
              <p className="text-2xl font-bold text-purple-500">{condition}</p>
            </div>
            <div className="flex w-[318px] justify-between mt-[48px] ml-[20px]">
              {logos.map(({ imgsrc }, index) => (
                <div className="text-gray-300" key={index}>
                  {imgsrc}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] h-[30%]  flex items-end pl-[130px]">
            <Image
              src="/purple.png  "
              className="mb-[50px] ml-[420px]"
              width={128}
              height={128}
            />
          </div>
        </div>
        <div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40">
            <div className="logo-corner" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 h-40 w-40 rounded-full flex items-center justify-center gap-5">
            <Image
              src="/right.png"
              width={43}
              height={85}
              className="w-[43px] h-[85px] "
            />
            <Image
              src="/left.png"
              width={43}
              height={85}
              className="w-[43px] h-[85px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
