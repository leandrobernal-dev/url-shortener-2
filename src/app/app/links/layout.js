"use client";

import LinkSideBar from "@/layout/LinkSidebar";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

export default function LinksLayout({ children }) {
    // const data = userData.urls;
    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const segment = useSelectedLayoutSegment();

    // fetch user-data here
    useEffect(() => {
        fetch("/api/urls")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsLoadingData(false);
                setData(data.urls);
            });
    }, []);

    return (
        <div className="flex gap-1 h-full">
            <LinkSideBar
                data={data}
                segment={segment}
                isLoading={isLoadingData}
            />

            <div
                className={`rounded-sm  sm:flex  justify-center flex-1 ${
                    segment ? "items-start" : "hidden items-center"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
