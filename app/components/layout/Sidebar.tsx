import { sidebarItems } from "@/app/mock-data/sidebar";
import React , { FC, useState } from "react";
import SidebarItems from "./SidebarItems";
import TaskPic from '@/app/assets/icons/mingcute-task-fill.png';
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onSidebarToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onSidebarToggle }) => {
  const [activeUrl, setActiveUrl] = useState('/dashboard');

  const handleClick = (url: string) => {
    setActiveUrl(url);
  };
  return (
    <div className="min-h-screen">
      <div
        className={`fixed inset-0 bg-[#E6EFF5]  z-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onSidebarToggle}
      ></div>
      <div
        className={`fixed top-0 left-0 w-60 bg-white shadow-md h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex justify-between p-4 pl-6 pt-[30px]">
          <h2 className="text-xl font-semibold text-[#343C6A] flex items-center">
            <span className="mr-2">
              <Image 
                src={TaskPic}
                alt='soar'
                width={20}
                height={20}
                className="w-[25px] h-[25px]"
              />
            </span>
            Soar Task
          </h2>
          <button
            className="lg:hidden text-gray-600"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 p-4 pl-6">
        {
            sidebarItems ? sidebarItems?.map((item,index)=>{
                return(
                    <React.Fragment key={index}>
                        <SidebarItems 
                            item={item}
                            activeUrl={activeUrl}
                            handleClick={handleClick}
                        />
                    </React.Fragment>
                )
            }):''
        }
        </ul>
        {/* <ul className="space-y-4 p-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Profile
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
