import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

import { useState, useEffect } from "react";

export const Search = () => {
  const [input2, setInput2] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    const gitFetcher = async () => {
      const url = `https:api.mapbox.com/geocoding/v5/mapbox.places/${input2}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;

      const result = await axios(url);
      const data = result.data.features.map((user) => {
        return user.place_name;
      });
      console.log(data);
      setArray(data.slice(0, 3));
    };
    gitFetcher();
  }, [input2]);

  return (
    <div>
      <div className="w-[512px] h-[80px] px-[24px] py-[16px] bg-gray-100 flex rounded-[48px]">
        <IoIosSearch
          className="w-[48px] h-[48px] text-gray-400"
          width={48}
          height={48}
        />
        <input
          className="w-[400px]"
          value={input2}
          onChange={(event) => setInput2(event.target.value)}
        ></input>
      </div>
      <div className="w-[512px] h-[200px] bg-gray-100 rounded-[24px]">
        <div className="w-[100%]  bg-red-300">
          {array.map((datas, id) => {
            return (
              <div className="" key={id}>
                {datas}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
