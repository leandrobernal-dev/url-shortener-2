"use client";

import UserDataContextProvider from "@/context/ContextProvider";
import NavBar from "@/layout/NavBar";
import SideBar from "@/layout/SideBar";
import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Home() {
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
            <main className=" relative">
                <NavBar SideBarToggle={SideBarToggle} />
                <SideBar SideBarToggle={SideBarToggle} />
            </main>
        </UserDataContextProvider>
    );
}
