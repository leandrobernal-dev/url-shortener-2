"use client";

import NewUrlModalForm from "@/components/NewUrlModalForm";
import UserDataContextProvider from "@/context/ContextProvider";
import NavBar from "@/layout/NavBar";
import SideBar from "@/layout/SideBar";
import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function AppLayout({ children }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const [isNewUrlModalFormOpen, setIsNewUrlModalFormOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleResize() {
        setIsSideBarOpen(() => (window.innerWidth > 768 ? true : false));
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
                <SideBar
                    SideBarToggle={SideBarToggle}
                    openNewUrlModalForm={setIsNewUrlModalFormOpen}
                />

                <div className="fixed top-[64px] md:left-[232px] sm:left-16 rounded-sm bottom-1 left-1 right-1">
                    {children}
                </div>
            </main>
            <NewUrlModalForm
                open={isNewUrlModalFormOpen}
                setOpen={setIsNewUrlModalFormOpen}
            />
        </UserDataContextProvider>
    );
}
