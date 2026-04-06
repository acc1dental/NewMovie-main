import React from "react";
import Marquees from "../Main/Marquee";

const Header = () => {
  return (
    <div className="h-[90vh] ">
      <div className="w-[100%] h-[800px] flex flex-col pt-25 top-0 absolute z-100 items-center bg-transparent text-white ">
        <div className="play_img pt-[30px]">
          <img src="./public/home-header.png" alt="" />
        </div>

        <div className="pt-[50px] text-center ">
          <h1 className="font-[700] text-[48px]">
            The Best Streaming Experience
          </h1>
          <p className="font-[400] text-[14px] pt-[10px] pb-[40px]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of <br />
            content, including the latest blockbusters, classic movies, popular
            TV shows, and more. You can also create your own watchlists, so you
            can easily find the content you want to <br />
            watch.
          </p>
        </div>

        
      </div>
      
      <div className="">
        <Marquees />
      </div>
    </div>
  );
};

export default Header;


