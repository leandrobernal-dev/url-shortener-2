"use client";

export default function LinksLayout({ children }) {
    return (
        <div className="flex gap-1 h-full">
            <div className="dark:bg-zinc-800 rounded-sm h-full w-full sm:w-72">
                links here
            </div>
            {children}
        </div>
    );
}
