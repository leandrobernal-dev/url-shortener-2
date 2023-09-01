import Links from "@/components/Links";

export default function LinkSideBar({ data, segment }) {
    return (
        <div className="dark:bg-zinc-800 flex flex-col gap-4 p-1 rounded-sm h-full w-full sm:w-72 overflow-y-scroll small-scrollbar">
            {data.map((url) => {
                return (
                    <Links
                        id={url._id}
                        key={url._id}
                        date={url.date}
                        longUrl={url.longUrl}
                        shortUrl={url.shortUrl}
                        title={url.title}
                        views={url.views}
                        active={segment === url._id}
                    />
                );
            })}
        </div>
    );
}
