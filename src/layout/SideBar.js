import { UserDataContext } from "@/context/ContextProvider";
import { Add } from "@mui/icons-material";
import { useContext } from "react";

export default function SideBar({ SideBarToggle, openNewUrlModalForm }) {
    const { isSideBarOpen } = useContext(UserDataContext);

    return (
        <aside
            className={`fixed z-20 sm:top-1 sm:block sm:left-1 sm:bottom-1 pt-14 sm:pt-1 p-1 w-14 md:w-56 dark:bg-black dark:sm:bg-zinc-800 rounded-sm ${
                isSideBarOpen
                    ? "top-0 bottom-0 left-0 w-full rounded-none block"
                    : "hidden"
            }`}
        >
            <div className="sm:hidden flex items-center h-14 p-1 absolute top-1 left-1 bottom-1 right-1">
                {SideBarToggle}
            </div>

            <div>
                <button
                    onClick={() =>
                        openNewUrlModalForm((prevState) => !prevState)
                    }
                    className="w-full rounded-sm dark:bg-zinc-600 p-2 dark:hover:bg-zinc-500"
                >
                    <Add /> {isSideBarOpen ? "Create new" : ""}
                </button>
            </div>
        </aside>
    );
}
