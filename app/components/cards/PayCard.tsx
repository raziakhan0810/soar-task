import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import sendPic from "@/app/assets/icons/send.png";
import vector from '@/app/assets/icons/dashboard/Vector1.png';

interface TeamMember {
  image: string | StaticImageData;
  name: string;
  position: string;
}

interface CardProps {
  images: TeamMember[];
  amount: number;
  onAmountChange: (newAmount: number) => void;
}

const PayCard: React.FC<CardProps> = ({ images, amount, onAmountChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex + 3 < images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const onSend = () =>{

  }
  return (
    <div className="mt-8 mb-4">
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-baseline justify-between w-full mb-[20px]">
          <div className="flex justify-center space-x-4">
            {images.slice(currentImageIndex, currentImageIndex + 3).map((user, index) => (
              <div key={index} className="md:w-24 md:h-24  w-14 h-14 flex flex-col items-center">
                {typeof user.image === 'string' ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                    width={80}
                    height={80}
                  />
                )}
                <h4 className={`mt-2 md:text-[14px] text-[#232323] text-[10px] ${index===0 ? `text-[#000] font-bold`:''}`}>{user.name}</h4>
                <p className="md:text-sm text-gray-500 text-xs">{user.position}</p>
              </div>
            ))}
          </div>

          <button
              className="bg-[#fff] p-2 rounded-full md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer shadow-md"
              onClick={nextImage}
              disabled={currentImageIndex + 3 >= images.length}
            >
              <Image
                src={vector} 
                alt="Next"
                width={10} 
                height={10}
                objectFit="contain" 
              />
            </button>


        </div>
      </div>
     
      <div className="flex items-center justify-between mt-[4rem]">
        <p className={`text-sm font-medium text-[#343C6A]`}>{`Write Amount`}</p>
        <div className=" flex rounded-full overflow-hidden border border-gray-300">
          <input
            type="text"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className="w-full px-4 text-sm border-none focus:outline-none rounded-l-full text-[#718EBF] max-w-[140px]"
            placeholder="Enter amount"
          />
          <button
            onClick={onSend}
            className="flex items-center bg-black text-white py-2 px-4 rounded-r-full rounded-l-full hover:bg-gray-800 w-[120px]"
          >
            <span className="mr-2">Send</span>
            <div className="relative w-4 h-4">
              <Image
                src={sendPic}
                alt="Send Icon"
                layout="fill"
                objectFit="cover"
                className='w-[10px] h-[10px] ml-2'
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default PayCard;
