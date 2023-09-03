import Links from "@/components/Links";

export default function LinkSideBar({ data, segment }) {
    return (
        <div className="dark:bg-zinc-800 relative  rounded-sm h-full w-full sm:w-72  ">
            <div className="h-full absolute top-0 left-0 mt-1 p-1 bottom-0 flex flex-col gap-4 right-1 overflow-y-scroll small-scrollbar">
                {Object.keys(data).map((urlId) => {
                    return (
                        <Links
                            id={urlId}
                            key={urlId}
                            createdAt={data[urlId].createdAt}
                            longUrl={data[urlId].longUrl}
                            shortUrl={data[urlId].shortUrl}
                            title={data[urlId].title}
                            clicks={data[urlId].clicks}
                            active={segment === urlId}
                        />
                    );
                })}
            </div>
        </div>
    );
}
