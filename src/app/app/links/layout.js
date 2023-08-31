"use client";

export default function LinksLayout({ children }) {
    return (
        <div className="flex gap-1 h-full">
            <div className="dark:bg-zinc-800 p-1 rounded-sm h-full w-full sm:w-72">
                links here
            </div>
            {/* {children} */}
            <div className="p-1 rounded-sm hidden sm:flex items-center justify-center flex-1">
                {children}
            </div>
        </div>
    );
}
