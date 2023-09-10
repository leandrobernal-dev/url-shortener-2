"use client";

import DoughnutChart from "@/components/charts/DoughnutChart";
import LoadingSpin from "@/components/LoadingSpin";
import MapChart from "@/components/charts/MapChart";
import { CalendarMonth, Close, Delete, Edit, Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LinksDetails({ params }) {
    const router = useRouter();

    const urlId = params.id;

    const [urlDetails, setUrlDetails] = useState({});
    const [stats, setStats] = useState([]);
    const [mapChartData, setMapChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [urlStatus, setUrlStatus] = useState(true);

    // fetch url info
    useEffect(() => {
        fetch(`/api/urls/?id=${urlId}`)
            .then((res) => {
                if (!res.ok) setUrlStatus(false);
                return res.json();
            })
            .then((data) => {
                setUrlDetails(data.data);
                console.log(data);
                setStats(data.statistics);
                setMapChartData(data.statistics[2].data);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
            });
    }, []);

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

            {isLoading ? (
                <LoadingSpin />
            ) : !urlDetails && urlStatus ? (
                <div className="flex w-full h-full justify-center items-center select-none text-red-600">
                    Error Finding Url
                </div>
            ) : (
                <div className="flex flex-col gap-1 overflow-y-scroll h-full small-scrollbar pr-1 w-full">
                    <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-bold">
                                    {urlDetails.name}
                                </h1>
                                <span className="text-xs flex flex-col gap-1">
                                    <p className="dark:text-blue-500">
                                        <a
                                            href={
                                                location.origin +
                                                "/" +
                                                urlDetails.shortenedUrl
                                            }
                                        >
                                            {location.origin +
                                                "/" +
                                                urlDetails.shortenedUrl}
                                        </a>
                                    </p>
                                    <p className="dark:text-zinc-400">
                                        <a href={urlDetails.url}>
                                            {urlDetails.url}
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
                            <span>
                                {new Date(
                                    urlDetails.createdAt
                                ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        </span>
                    </div>

                    {urlStatus === false ? (
                        <div className="flex w-full h-full justify-center items-center select-none dark:text-white">
                            Not Enough Data For this URL
                        </div>
                    ) : (
                        <>
                            <MapChart data={mapChartData} />
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
                                {stats.map((stat, index) => {
                                    const data = {
                                        title: stat.title,
                                        labels: stat.data.map(
                                            (label) => label._id
                                        ),
                                        datasets: [
                                            {
                                                label: stat.title,
                                                data: stat.data.map(
                                                    (label) => label.count
                                                ),
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
                                            key={data.labels + index}
                                            className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative"
                                        >
                                            <DoughnutChart data={data} />
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
