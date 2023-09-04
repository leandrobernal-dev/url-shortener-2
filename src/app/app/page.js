"use client";

import BarChartY from "@/components/BarChartY";

export default function App() {
    const data = {
        title: "Most Devices Used",
        labels: ["Windows", "Mac", "Iphone", "Android"],
        datasets: [
            {
                axis: "y",
                label: "Most Devices Used",
                data: [65, 59, 80, 81],
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
        <div className="overflow-y-scroll w-full h-full small-scrollbar pr-1 ">
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={data} />
                </div>
            </div>
        </div>
    );
}
