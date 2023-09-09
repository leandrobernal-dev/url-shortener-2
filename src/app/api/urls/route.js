import { NextResponse } from "next/server";

import Url from "@/models/Url";
import Clicks from "@/models/Clicks";

export const GET = async (request) => {
    // check user auth here

    const { searchParams } = new URL(request.url);

    // if GET request has 'id' parameter, return single url data
    if (searchParams.get("id")) {
        const id = searchParams.get("id").toString().trim();
        const data = await Url.findOne({ shortenedUrl: id }).populate(
            "detailedClicks"
        );
        const currentYear = new Date().getFullYear();
        const device = await Clicks.aggregate([
            { $match: { url: data._id } },
            {
                $group: {
                    _id: "$device",
                    count: { $sum: 1 },
                },
            },
        ]);

        const statistics = [{ title: "Operating System", data: device }];

        return NextResponse.json({ data, statistics });
    }

    const urls = await Url.find().populate("clicks");
    return NextResponse.json({ urls: urls });
};
