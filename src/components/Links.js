import { Visibility } from "@mui/icons-material";

export default function Links({
    title,
    date,
    views,
    shortUrl,
    longUrl,
    active,
}) {
    return (
        <button
            className={`w-full flex flex-col rounded-md ${
                active ? "border-l p-2 shadow-md border-b-2" : ""
            }`}
        >
            <span className="text-xs dark:text-zinc-400">{date}</span>
            <span className="flex justify-between w-full">
                <span className="text-xl">{title}</span>
                <span className="flex items-center gap-1 text-xs">
                    {views} <Visibility sx={{ fontSize: "14px" }} />
                </span>
            </span>
            <span className="flex flex-col items-start text-xs ">
                <span className="dark:text-blue-500">{shortUrl}</span>
                <span className="dark:text-zinc-400">{longUrl}</span>
            </span>
        </button>
    );
}
