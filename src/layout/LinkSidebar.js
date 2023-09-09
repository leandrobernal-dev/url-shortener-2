import Links from "@/components/Links";
import LoadingSpin from "@/components/LoadingSpin";

export default function LinkSideBar({ data, segment, isLoading }) {
    return (
        <div className="dark:bg-zinc-800 relative  rounded-sm h-full w-full sm:w-72  ">
            <div className="h-full absolute top-0 left-0 mt-1 p-1 bottom-0 flex flex-col gap-4 right-1 overflow-y-scroll small-scrollbar">
                {isLoading ? (
                    <div className="p-4">
                        <LoadingSpin />
                    </div>
                ) : (
                    <>
                        {data.map((url) => {
                            return (
                                <Links
                                    key={url.id}
                                    id={url.id}
                                    createdAt={new Date(
                                        url.createdAt
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                    shortUrl={url.shortenedUrl}
                                    title={url.name}
                                    clicks={url.clicks}
                                    active={segment === url.shortenedUrl}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}
