"use client";
import { header } from "@/app/constants/header.constant";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import profPic from "@/app/assets/prof-pic-header.png";
import SettingPic from "@/app/assets/settings.png";
import Notificationc from "@/app/assets/notification.png";
import Link from "next/link";


interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: FC<HeaderProps> = ({ onSidebarToggle }) => {
  let pathname = usePathname();
  pathname = `${pathname.split("/")[1]}`;
  let headerContent: any = "SOAR";
  if (header && pathname && pathname in header) {
    headerContent = header?.[pathname];
  }

  return (
    <div className="flex md:flex-row flex-col bg-white">
    <header className="bg-white p-2 text-white flex justify-between items-center lg:p-4 md:flex-1">
      
      <button
        className="lg:hidden text-[#343C6A]"
        onClick={onSidebarToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <h1 className="text-2xl font-semibold text-[#343C6A]">{headerContent}</h1>

      <div className="flex items-center space-x-4">
        <div className="relative w-64 lg:block hidden">
          <div className="absolute inset-y-0 left-[1rem] flex items-center justify-center">
            <FaSearch className="text-gray-500" size={16} color="#718EBF" />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="bg-[#F5F7FA] text-[#8BA3CB] rounded-full pl-10 pr-4 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>

        <div className="relative w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center lg:block hidden">
          <Link href={'/settings'}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-none flex items-center justify-center">
              <Image
                src={SettingPic}
                alt="Settings"
                width={20}
                height={20}
                className="object-cover rounded-full"
              />
            </div>
          </Link>
        </div>

        <div className="relative w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center lg:block hidden">
          <div className="relative w-10 h-10 rounded-full border-none flex items-center justify-center">
            <Image
              src={Notificationc}
              alt="Notifications"
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative w-[60px] h-[60px] rounded-full  border-2 border-white">
          <Image src={profPic}
            alt="Profile Image"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
      </div>
      
    </header>
    <div className="relative md:hidden block my-1 mb-2 px-4 ">
          <div className="absolute inset-y-0 left-[2rem] flex items-center justify-center">
            <FaSearch className="text-gray-500" size={16} color="#718EBF" />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="bg-[#F5F7FA] text-[#8BA3CB] rounded-full pl-10 pr-4 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
    </div> 
    </div>
  );
};

export default Header;
