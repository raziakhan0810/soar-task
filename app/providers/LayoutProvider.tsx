
"use client"
import React , {useState} from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const LayoutProvider = ({ children }: { children: React.ReactNode }) =>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return(
        <>
        <div className="flex bg-gray-100">
             <Sidebar isOpen={sidebarOpen} onSidebarToggle={toggleSidebar} />
             <div className="flex-1 flex flex-col">
                <Header onSidebarToggle={toggleSidebar} />
                <main className="flex-1 p-6">
                    {children}
                </main>
             </div>
        </div>
        </>
    )
}

export default LayoutProvider