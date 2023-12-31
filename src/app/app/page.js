"use client";

import BarChartY from "@/components/charts/BarChartY";
import LineChart from "@/components/charts/LineChart";

export default function App() {
    const osData = {
        title: "OS",
        labels: ["Windows", "Mac", "Iphone", "Android"],
        datasets: [
            {
                axis: "y",
                label: "OS",
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
    const mostClickedData = {
        title: "Most Clicked Links",
        labels: ["Youtube", "Instagram"],
        datasets: [
            {
                axis: "y",
                label: "Most Clicked",
                data: [65, 59],
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
    const locationData = {
        title: "Locations",
        labels: ["US", "JP"],
        datasets: [
            {
                axis: "y",
                label: "Location",
                data: [65, 59],
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
    const refererData = {
        title: "Referer",
        labels: ["Facebook", "Google"],
        datasets: [
            {
                axis: "y",
                label: "Referer",
                data: [65, 59],
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
    const deviceData = {
        title: "Device",
        labels: ["Desktop", "Mobile"],
        datasets: [
            {
                axis: "y",
                label: "Device",
                data: [65, 59],
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
    const dates = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Youtube",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
            {
                label: "Instagram",
                data: [9, 0, 100, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
            },
        ],
    };
    return (
        <div className="overflow-y-scroll w-full h-full small-scrollbar pr-1 ">
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={osData} />
                </div>
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <LineChart data={dates} />
                </div>
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={mostClickedData} />
                </div>
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={locationData} />
                </div>
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={refererData} />
                </div>
                <div className="dark:bg-zinc-900 rounded-sm relative aspect-video p-2">
                    <BarChartY data={deviceData} />
                </div>
            </div>
        </div>
    );
}
