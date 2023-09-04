import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
const BarChartY = ({ data }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const pieChart = new Chart(ctx, {
            type: "bar",
            data,
            options: {
                responsive: true,
                indexAxis: "y",
            },
        });

        return () => {
            pieChart.destroy();
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default BarChartY;
