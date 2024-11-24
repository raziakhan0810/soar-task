import React, { useState } from 'react';

interface TabsProps {
  tabs: string[]; 
  children: React.ReactNode[]; 
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0); 
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="rounded-xl bg-white shadow-md p-6">
      <div className="flex border-b border-gray-300 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-4 min-w-[100px] text-left text-sm font-medium ${
              activeTab === index
                ? 'border-b-2 border-[#232323] text-[#232323]'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
