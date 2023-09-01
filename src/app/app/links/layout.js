"use client";

import Links from "@/components/Links";
import { UserDataContext } from "@/context/ContextProvider";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext, useEffect } from "react";

export default function LinksLayout({ children }) {
    const { userData } = useContext(UserDataContext);
    const data = userData.urls;

    const segment = useSelectedLayoutSegment();
    const { setActiveLink } = useContext(UserDataContext);

    // inital get urls
    useEffect(() => {
        if (segment) setActiveLink(segment);
    }, []);

    return (
        <div className="flex gap-1 h-full">
            <div className="dark:bg-zinc-800 flex flex-col gap-4 p-1 rounded-sm h-full w-full sm:w-72 overflow-y-scroll small-scrollbar">
                {data.map((url) => {
                    return (
                        <Links
                            id={url._id}
                            key={url._id}
                            date={url.date}
                            longUrl={url.longUrl}
                            shortUrl={url.shortUrl}
                            title={url.title}
                            views={url.views}
                            active={segment === url._id}
                        />
                    );
                })}
            </div>

            <div className="p-1 rounded-sm hidden sm:flex items-center justify-center flex-1">
                {children}
            </div>
        </div>
    );
}
