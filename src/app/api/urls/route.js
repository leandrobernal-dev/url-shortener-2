import { NextResponse } from "next/server";

import Url from "@/models/Url";
import Clicks from "@/models/Clicks";
import dbConnect from "@/mongodb/mongodb";
import shortid from "shortid";

export const GET = async (request) => {
    await dbConnect();

    //TODO: GET USER HERE

    const { searchParams } = new URL(request.url);

    // if GET request has 'id' parameter, return single url data
    if (searchParams.get("id")) {
        const id = searchParams.get("id").toString().trim();
        const urlData = await Url.findOne({ shortenedUrl: id }).populate(
            "clicks"
        );

        if (!urlData.clicks) {
            return NextResponse.json(
                { msg: "Not Enough Data", data: urlData },
                { status: 404 }
            );
        }
        const currentYear = new Date().getFullYear();
        const clickPeriod = await Clicks.aggregate([
            {
                $match: {
                    url: urlData._id,
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
            { $match: { url: urlData._id } },
            {
                $group: {
                    _id: "$device",
                    count: { $sum: 1 },
                },
            },
        ]);
        const os = await Clicks.aggregate([
            { $match: { url: urlData._id } },
            {
                $group: {
                    _id: "$os",
                    count: { $sum: 1 },
                },
            },
        ]);
        const location = await Clicks.aggregate([
            { $match: { url: urlData._id } },
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
        const referrer = await Clicks.aggregate([
            { $match: { url: urlData._id } },
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
        const data = { urlData };
        data.statistics = statistics;

        return NextResponse.json({ data }, { status: 200 });
    }

    const urls = await Url.find().populate("clicks");
    return NextResponse.json({ urls: urls });
};

export const POST = async (request) => {
    await dbConnect();

    //TODO: GET USER HERE

    const { name, url, customBackHalf, generateQR } = await request.json();

    // Check if user included custom backhalf and check if it already exist
    const backhalf = await Url.findOne({
        shortenedUrl: customBackHalf,
    });
    try {
        if (backhalf) {
            return NextResponse.json(
                {
                    error: "Back half already Exist, please pick a unique one...",
                },
                { status: 403 }
            );
        }
        const urlId = backhalf ? customBackHalf : shortid.generate();

        const newUrl = new Url({
            name: name,
            url: url,
            shortenedUrl: urlId,
        });
        await newUrl.save();

        console.log("Url created:", newUrl);
        return NextResponse.json({ msg: "Url Generated Successfully", newUrl });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            { msg: "Internal Server Error" },
            { status: 500 }
        );
    }
};
