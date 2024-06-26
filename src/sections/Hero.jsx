import { useState } from "react";

import { bags,  statistics } from "../constants";
import { Button, BagCard } from "../components";
import { bag6 } from "../assets/photos";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigBagImg, setBigBagImg] = useState(bag6);
  //I am trying to commit changes
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-blue-900 font-medium '>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-sans text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-[1]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-0 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-blue-800 inline-block mt-3 '>BagVerse</span> Bags
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish <span className="text-blue-800 font-semibold inline-block">BVerse</span> arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight}  />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
          {statistics.map((stat, index) => (
            <div className="bg-blue-300 rounded-full p-4" key={index}>
              <div className="flex flex-col items-center">
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center '>
        <img
          src={bigBagImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z--10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 '>
          {bags.map((image, index) => (
            <div key={index}>
              <BagCard
                index={index}
                imgURL={image}
                changeBigBagImage={(bag) => setBigBagImg(bag)}
                bigBagImg={bigBagImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;