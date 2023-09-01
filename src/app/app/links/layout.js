"use client";

import { UserDataContext } from "@/context/ContextProvider";
import LinkSideBar from "@/layout/LinkSidebar";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext, useEffect } from "react";

export default function LinksLayout({ children }) {
    const { userData } = useContext(UserDataContext);
    const data = userData.urls;

    const segment = useSelectedLayoutSegment();
    const { setActiveLink } = useContext(UserDataContext);

    useEffect(() => {
        if (segment) setActiveLink(segment);
    }, []);

    return (
        <div className="flex gap-1 h-full">
            <LinkSideBar data={data} segment={segment} />

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
