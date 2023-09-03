"use client";

import NewUrlModalForm from "@/components/NewUrlModalForm";
import UserDataContextProvider from "@/context/ContextProvider";
import NavBar from "@/layout/NavBar";
import SideBar from "@/layout/SideBar";
import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function AppLayout({ children }) {
    const [userData, setUserData] = useState({
        urls: {
            abcd: {
                title: "YouTube",
                createdAt: "Jun 11",
                shortUrl: "http://youtube.com/",
                longUrl: "http://localhost:3001/aTva9",
                clicks: "34",
                active: true,
                mapChartData: [
                    { id: "US", count: 21 },
                    { id: "JP", count: 451 },
                ],
                statistics: [
                    {
                        title: "Operating System",
                        data: [
                            { id: "Windows", count: 2 },
                            { id: "MacOS", count: 2 },
                            { id: "Iphone", count: 2 },
                            { id: "Android", count: 2 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Device",
                        data: [
                            { id: "Desktop", count: 2 },
                            { id: "Mobile", count: 2 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Location",
                        data: [
                            { id: "US", count: 21 },
                            { id: "JP", count: 21 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Referrer",
                        data: [
                            { id: "YouTube", count: 21 },
                            { id: "Facebook", count: 21 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                ],
            },
            123: {
                title: "Instagram",
                createdAt: "Jun 11",
                shortUrl: "http://instagram.com/",
                longUrl: "http://localhost:3001/bT_2a9",
                clicks: "34",
                active: false,
                mapChartData: [
                    { id: "US", count: 21 },
                    { id: "JP", count: 451 },
                ],
                statistics: [
                    {
                        title: "Operating System",
                        data: [
                            { id: "Windows", count: 2 },
                            { id: "MacOS", count: 2 },
                            { id: "Iphone", count: 2 },
                            { id: "Android", count: 2 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Device",
                        data: [
                            { id: "Desktop", count: 2 },
                            { id: "Mobile", count: 2 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Location",
                        data: [
                            { id: "US", count: 21 },
                            { id: "JP", count: 21 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                    {
                        title: "Referrer",
                        data: [
                            { id: "YouTube", count: 21 },
                            { id: "Facebook", count: 21 },
                            { id: "Unknown", count: 2 },
                        ],
                    },
                ],
            },
        },
    });

    const [isSideBarOpen, setIsSideBarOpen] = useState(
        window.innerWidth > 768 ? true : false
    );

    const [isNewUrlModalFormOpen, setIsNewUrlModalFormOpen] = useState(false);

    // window resize handler
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
        <UserDataContextProvider
            value={{
                isSideBarOpen,
                setIsSideBarOpen,
                userData,
            }}
        >
            <main className="">
                <NavBar SideBarToggle={SideBarToggle} />
                <SideBar
                    SideBarToggle={SideBarToggle}
                    openNewUrlModalForm={setIsNewUrlModalFormOpen}
                />

                <div className="fixed sm:top-1 top-[64px] md:left-[232px] sm:left-16 rounded-sm bottom-1 left-1 right-1">
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
