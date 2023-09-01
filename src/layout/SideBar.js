import { UserDataContext } from "@/context/ContextProvider";
import { Add, Apps, LinkRounded, QrCode } from "@mui/icons-material";
import { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar({ SideBarToggle, openNewUrlModalForm }) {
    const { isSideBarOpen, setIsSideBarOpen } = useContext(UserDataContext);

    const pathname = usePathname();
    const router = useRouter();
    const navLinks = [
        { name: "Dashboard", href: "/app", icon: <Apps /> },
        {
            name: "Links",
            href: "/app/links",
            icon: (
                <span className="rotate-45">
                    <LinkRounded />
                </span>
            ),
        },
        {
            name: "QR Codes",
            href: "/app/qrcodes",
            icon: <QrCode />,
        },
    ];
    const currentPath = () => {
        function calculateJaccardSimilarity(arr1, arr2) {
            const set1 = new Set(arr1);
            const set2 = new Set(arr2);
            const intersectionSize = new Set(
                [...set1].filter((item) => set2.has(item))
            ).size;
            const unionSize = new Set([...set1, ...set2]).size;
            return intersectionSize / unionSize;
        }

        const currentPath = pathname.split("/").filter(Boolean);
        currentPath.unshift("/");
        const paths = navLinks.map((link) => {
            const targetPath = link.href.split("/").filter(Boolean);
            targetPath.unshift("/");
            return targetPath;
        });

        const active = paths
            .map((href, index) => ({
                index: index,
                similarity: calculateJaccardSimilarity(currentPath, href),
            }))
            .reduce((prev, current) =>
                current.similarity > prev.similarity ? current : prev
            ).index;
        return navLinks[active].href;
    };

    const [activeNav, setActiveNav] = useState(currentPath);

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

            <div className="flex flex-col">
                <div>
                    <button
                        onClick={() =>
                            openNewUrlModalForm((prevState) => !prevState)
                        }
                        className="w-full rounded-sm dark:bg-zinc-600 p-2 dark:hover:bg-zinc-500"
                    >
                        <Add /> {isSideBarOpen ? "Create new" : ""}
                    </button>

                    <hr className="my-6 dark:text-slate-500" />
                </div>
                <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => {
                        return (
                            <li
                                key={link.name + link.href}
                                className={`group relative flex`}
                            >
                                <button
                                    className={`${
                                        activeNav === link.href
                                            ? "bg-primary text-white "
                                            : "border-transparent hover:border-white/50"
                                    } relative z-10 flex h-full border-b-2 shadow-sm border-l w-full items-center gap-1 rounded-md p-2 `}
                                    onClick={() => {
                                        setIsSideBarOpen(
                                            window.innerWidth > 768
                                                ? true
                                                : false
                                        );
                                        router.push(link.href);
                                        setActiveNav(() => link.href);
                                    }}
                                >
                                    {link.icon}
                                    <span
                                        className={`${
                                            isSideBarOpen
                                                ? ""
                                                : "whitespace-nowrap rounded-sm p-1 sm:absolute sm:left-full sm:hidden sm:bg-zinc-400 sm:text-black sm:shadow-md sm:group-hover:block"
                                        }  origin-left`}
                                    >
                                        {link.name}
                                    </span>
                                    {/* <span
                                        className={`absolute bottom-0 left-0 top-0 w-1 bg-slate-700  ${
                                            activeNav === link.href
                                                ? ""
                                                : "hidden"
                                        }`}
                                    ></span> */}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
