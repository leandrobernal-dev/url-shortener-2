"use client";

import MapChart from "@/components/MapChart";
import { Close, Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function LinksDetails({ params }) {
    const router = useRouter();
    const urlId = params.id;
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
            <MapChart
                data={[
                    { id: "PH", count: 21 },
                    { id: "JP", count: 451 },
                ]}
                id={"noen"}
            />
        </div>
    );
}
