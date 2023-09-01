import Links from "@/components/Links";

export default function LinkSideBar({ data, segment }) {
    return (
        <div className="dark:bg-zinc-800 flex flex-col gap-4 p-1 rounded-sm h-full w-full sm:w-72 overflow-y-scroll small-scrollbar">
            {Object.keys(data).map((urlId) => {
                return (
                    <Links
                        id={urlId}
                        key={urlId}
                        date={data[urlId].date}
                        longUrl={data[urlId].longUrl}
                        shortUrl={data[urlId].shortUrl}
                        title={data[urlId].title}
                        clicks={data[urlId].clicks}
                        active={segment === urlId}
                    />
                );
            })}
        </div>
    );
}
