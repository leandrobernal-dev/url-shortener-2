import Url from "@/models/Url";
import { NextResponse } from "next/server";

export const GET = async () => {
    const urls = await Url.find();
    return NextResponse.json({ urls: urls });
};
