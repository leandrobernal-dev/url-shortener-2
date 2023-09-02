"use client";

import MapChart from "@/components/MapChart";
import { UserDataContext } from "@/context/ContextProvider";
import { CalendarMonth, Close, Delete, Edit, Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function LinksDetails({ params }) {
    const router = useRouter();

    const { userData } = useContext(UserDataContext);
    const urlId = params.id;
    const urlData = userData.urls[urlId];
    return (
        <div className="fixed top-1 right-1 left-1 small-scrollbar bottom-1 w-full overflow-y-scroll h-full dark:bg-black sm:static pt-[60px] sm:pt-0">
            <nav className="fixed flex items-center top-1 h-14 left-1 right-1 dark:bg-zinc-800 sm:hidden">
                <div className="w-full flex justify-between p-2">
                    <span className="flex items-center gap-1">
                        <Info /> Link Details
                    </span>
                    <button onClick={() => router.push("/app/links")}>
                        <Close />
                    </button>
                </div>
            </nav>

            <div className="flex flex-col gap-1">
                <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">
                                {userData.urls[urlId].title}
                            </h1>
                            <span className="text-xs flex flex-col gap-1">
                                <p className="dark:text-blue-500">
                                    <a href={urlData.shortUrl}>
                                        {urlData.shortUrl}
                                    </a>
                                </p>
                                <p className="dark:text-zinc-400">
                                    <a href={urlData.longUrl}>
                                        {urlData.longUrl}
                                    </a>
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="h-9 dark:bg-zinc-600 text-sm gap-1 dark:hover:bg-zinc-500 p-2 flex items-center rounded-sm">
                                <Edit fontSize="small" />
                                <span>Edit</span>
                            </button>
                            <button className="h-9 dark:bg-zinc-600 text-sm gap-1 dark:hover:bg-zinc-500 p-2 flex items-center rounded-sm">
                                <Delete fontSize="small" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>

                    <span className="text-xs dark:text-zinc-400 flex items-center gap-1 p-1">
                        <CalendarMonth fontSize="small" />
                        <span>{urlData.createdAt}</span>
                    </span>
                </div>
                <MapChart data={urlData.mapChartData} id={"noen"} />
            </div>
        </div>
    );
}
