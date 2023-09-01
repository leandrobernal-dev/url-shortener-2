import { Visibility } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Links({
    title,
    date,
    clicks,
    shortUrl,
    longUrl,
    active,
    id,
}) {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push(`/app/links/${id}`)}
            className={`w-full flex flex-col rounded-md border-l
            border-b-2 p-2 shadow-md ${
                active ? "" : "border-transparent hover:border-white/50"
            }`}
        >
            <span className="text-xs dark:text-zinc-400">{date}</span>
            <span className="flex justify-between w-full">
                <span className="text-xl">{title}</span>
                <span className="flex items-center gap-1 text-xs">
                    {clicks} <Visibility sx={{ fontSize: "14px" }} />
                </span>
            </span>
            <span className="flex flex-col items-start text-xs ">
                <span className="dark:text-blue-500">{shortUrl}</span>
                <span className="dark:text-zinc-400">{longUrl}</span>
            </span>
        </button>
    );
}
