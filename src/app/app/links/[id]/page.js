"use client";

export default function LinksDetails({ params }) {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 dark:bg-zinc-800 sm:static">
            <h1 className="text-white">{params.id}</h1>
        </div>
    );
}
