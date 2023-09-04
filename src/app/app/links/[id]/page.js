"use client";

import DoughnutChart from "@/components/DoughnutChart";
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

    if (!urlData)
        return (
            <div className="flex items-center h-full select-none text-red-600">
                Error Finding Url
            </div>
        );

    const charts = urlData.statistics.map((stats) => {
        const data = {
            title: stats.title,
            labels: stats.data.map((label) => label.id),
            datasets: [
                {
                    label: stats.title,
                    data: stats.data.map((label) => label.count),
                    fill: false,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                    ],
                    borderWidth: 1,
                },
            ],
        };
        return (
            <div
                key={data.labels}
                className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative"
            >
                <DoughnutChart data={data} />
            </div>
        );
    });
    return (
        <div className="fixed top-1 right-1 left-1 w-full bottom-1  h-full dark:bg-black sm:static pt-[60px] sm:pt-0">
            <nav className="fixed flex z-50 items-center top-1 h-14 left-1 right-1 dark:bg-zinc-800 sm:hidden">
                <div className="w-full flex justify-between p-2">
                    <span className="flex items-center gap-1">
                        <Info /> Link Details
                    </span>
                    <button onClick={() => router.push("/app/links")}>
                        <Close />
                    </button>
                </div>
            </nav>

            <div className="flex flex-col gap-1 overflow-y-scroll h-full small-scrollbar pr-1 w-full">
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
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
                    {charts}
                </div>
            </div>
        </div>
    );
}
