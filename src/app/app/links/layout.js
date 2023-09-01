"use client";

import Links from "@/components/Links";
export default function LinksLayout({ children }) {
    const data = [
        {
            _id: "abcd",
            title: "YouTube",
            date: "Jun 11",
            shortUrl: "http://youtube.com/",
            longUrl: "http://localhost:3001/aTva9",
            views: "34",
            active: true,
        },
        {
            _id: "123",
            title: "YouTube",
            date: "Jun 11",
            shortUrl: "http://youtube.com/",
            longUrl: "http://localhost:3001/aTva9",
            views: "34",
            active: false,
        },
    ];
    return (
        <div className="flex gap-1 h-full">
            <div className="dark:bg-zinc-800 flex flex-col gap-4 p-1 rounded-sm h-full w-full sm:w-72 overflow-y-scroll small-scrollbar">
                {data.map((url) => {
                    return (
                        <Links
                            key={url._id}
                            date={url.date}
                            longUrl={url.longUrl}
                            shortUrl={url.shortUrl}
                            title={url.title}
                            views={url.views}
                            active={url.active}
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
