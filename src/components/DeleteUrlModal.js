import { Add, Close, Delete } from "@mui/icons-material";
import { useState } from "react";

export default function NewUrlModalForm({ open, setOpen }) {
    const [isLoadingPageTitle, setIsLoadingPageTitle] = useState(false);
    const [urlTitle, setUrlTitle] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formErrors, setFormErrors] = useState({});

    function handleNewUrlSubmit() {}
    function handleUrlInputChange() {}
    return (
        <>
            {open ? (
                <div
                    onClick={(e) => {
                        if (
                            e.target.getAttribute("aria-label") ===
                            "modal-overlay"
                        )
                            setOpen();
                    }}
                    aria-label="modal-overlay"
                    className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center dark:bg-black/70 shadow-lg backdrop-blur-sm"
                >
                    <form
                        onSubmit={handleNewUrlSubmit}
                        className="w-11/12 max-w-lg rounded dark:bg-zinc-800 p-4 dark:text-white"
                    >
                        <div className="flex w-full items-center justify-between">
                            <h1 className="py-3 text-2xl">Delete Url</h1>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-sm p-2 dark:hover:bg-secondary"
                            >
                                <Close />
                            </button>
                        </div>

                        <div className=" flex justify-end py-2">
                            <button
                                type="submit"
                                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                                {isSubmitting ? (
                                    <CircularProgress size={24} />
                                ) : (
                                    <>
                                        <Delete />
                                        Delete
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
