"use client";

import UserDataContextProvider from "@/context/ContextProvider";
import NavBar from "@/layout/NavBar";
import SideBar from "@/layout/SideBar";
import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function AppLayout({ children }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleResize() {
        if (window.innerWidth > 640) setIsSideBarOpen(() => false);
    }

    const SideBarToggle = (
        <button
            className="sm:hidden"
            onClick={() => setIsSideBarOpen((prevState) => !prevState)}
        >
            {isSideBarOpen ? <Close /> : <Menu />}
        </button>
    );

    return (
        <UserDataContextProvider value={{ isSideBarOpen, setIsSideBarOpen }}>
            <main className="">
                <NavBar SideBarToggle={SideBarToggle} />
                <SideBar SideBarToggle={SideBarToggle} />

                <div className="fixed top-[64px] md:left-[232px] sm:left-16 rounded-sm bottom-1 left-1 right-1">
                    {children}
                </div>
            </main>
        </UserDataContextProvider>
    );
}
