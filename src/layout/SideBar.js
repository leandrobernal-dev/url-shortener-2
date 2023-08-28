import { UserDataContext } from "@/context/ContextProvider";
import { useContext } from "react";

export default function SideBar({ SideBarToggle }) {
    const { isSideBarOpen } = useContext(UserDataContext);

    return (
        <aside
            className={`fixed sm:top-1 sm:block sm:left-1 sm:bottom-1 w-14 md:w-56 dark:bg-black dark:sm:bg-zinc-800 rounded-sm ${
                isSideBarOpen
                    ? "top-0 bottom-0 left-0 w-full rounded-none block"
                    : "hidden"
            }`}
        >
            <div className="flex items-center h-14 p-1 absolute top-1 left-1 bottom-1 right-1">
                {SideBarToggle}
            </div>
        </aside>
    );
}
