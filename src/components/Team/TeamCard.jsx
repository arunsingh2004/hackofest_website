import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import herobg from "../../assets/herobg.png";
const TeamCard = ({ member }) => {
  const backgroundStyle = {
    backgroundImage: `url(${herobg})`,
  };
  return (
    <div
      data-aos="zoom-in"
      className="border w-[18.5rem] border-gray-800 bg-[#a59e9e4a] hover:bg-[#6461616c] p-5  rounded-3xl transition-all delay-[15ms] ease-in-out hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500 mt-6 md:ml-12 -ml-28"
      style={backgroundStyle}
      id="Team_main_1"
    >
      <div className="flex items-center justify-center my-3 ">
        <div>
          <img
            className="rounded-full h-[7rem] w-[7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1 hover:scale-[150%] transition-all delay-75 ease-in"
            id="Team_img"
            src={member.image}
            alt={member.image}
          />
        </div>
      </div>

      <div className="text-xl text-white  mt-6 text-center font-bold">
        {member.name}
      </div>
      <div className="text-sky-500 font-medium text-2xl text-center">
        {member.role}
      </div>
      {/* <div className=' my-3 text-sm text-white '>
                {member.about}
            </div> */}
      <div className="py-3 text-center">
        <a href={`mailto:${member.email}`}>
          <span className="text-sky-400 px-4 py-1.5 rounded-xl bg-sky-900 hover:bg-white ">
            {member.email}
          </span>
        </a>
      </div>

      <div
        className="flex gap-3 items-center justify-center mt-5"
        id="Team_icon"
      >
        {member.github && (
          <a
            target="_blank"
            className="hover:scale-105 transition-all bg-white rounded-xl delay-[20ms] ease-in"
            href={member.github}
          >
            <FaGithub size={22} />
          </a>
        )}
        {member.twitter && (
          <a
            target="_blank"
            className="hover:scale-105 transition-all delay-[20ms] ease-in"
            href={member.twitter}
          >
            <FaTwitter className="text-sky-500" size={22} />
          </a>
        )}
        {member.instagram && (
          <a
            target="_blank"
            className="hover:scale-105 transition-all delay-[20ms] ease-in"
            href={member.instagram}
          >
            <FaInstagram className="text-rose-500" size={22} />
          </a>
        )}
        {member.linkedin && (
          <a
            target="_blank"
            className="hover:scale-105 transition-all delay-[20ms] ease-in"
            href={member.linkedin}
          >
            <FaLinkedinIn className="text-blue-500" size={22} />
          </a>
        )}
        {member.discord && (
          <a
            target="_blank"
            className="hover:scale-105 transition-all delay-[20ms] ease-in"
            href={member.discord}
          >
            <FaDiscord className="text-slate-400" size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
