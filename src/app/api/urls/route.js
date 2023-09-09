import { NextResponse } from "next/server";

import Url from "@/models/Url";
import Clicks from "@/models/Clicks";
import dbConnect from "@/mongodb/mongodb";

export const GET = async (request) => {
    await dbConnect();
    // check user auth here

    const { searchParams } = new URL(request.url);

    // if GET request has 'id' parameter, return single url data
    if (searchParams.get("id")) {
        const id = searchParams.get("id").toString().trim();
        const data = await Url.findOne({ shortenedUrl: id }).populate("clicks");

        if (!data.clicks) {
            return NextResponse.json(
                { msg: "Not Enough Data", data },
                { status: 404 }
            );
        }
        const currentYear = new Date().getFullYear();
        const clickPeriod = await Clicks.aggregate([
            {
                $match: {
                    url: data._id,
                    createdAt: {
                        $gte: new Date(currentYear, 0, 1), // Start of the year
                        $lt: new Date(currentYear + 1, 0, 1), // Start of the next year
                    },
                },
            },
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    count: { $sum: 1 },
                },
            },
        ]);
        const device = await Clicks.aggregate([
            { $match: { url: data._id } },
            {
                $group: {
                    _id: "$device",
                    count: { $sum: 1 },
                },
            },
        ]);
        const os = await Clicks.aggregate([
            { $match: { url: data._id } },
            {
                $group: {
                    _id: "$os",
                    count: { $sum: 1 },
                },
            },
        ]);
        const location = await Clicks.aggregate([
            { $match: { url: data._id } },
            {
                $group: {
                    _id: "$location",
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    id: "$_id",
                    count: "$count",
                },
            },
        ]);
        console.log(location);
        const referrer = await Clicks.aggregate([
            { $match: { url: data._id } },
            {
                $group: {
                    _id: "$referrer",
                    count: { $sum: 1 },
                },
            },
        ]);
        const statistics = [
            { title: "Device", data: device },
            { title: "Operating System", data: os },
            { title: "Top Locations", data: [...location] },
            { title: "Top Referrer", data: referrer },
        ];

        return NextResponse.json({ data, statistics }, { status: 200 });
    }

    const urls = await Url.find().populate("clicks");
    return NextResponse.json({ urls: urls });
};
