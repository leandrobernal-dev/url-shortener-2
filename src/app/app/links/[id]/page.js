"use client";

import { Close, Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function LinksDetails({ params }) {
    const router = useRouter();
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 dark:bg-black sm:static pt-[60px] sm:pt-0 p-1">
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
            <h1 className="text-white">{params.id}</h1>
        </div>
    );
}
