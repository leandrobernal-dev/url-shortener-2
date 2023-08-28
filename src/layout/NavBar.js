export default function NavBar({ SideBarToggle }) {
    return (
        <nav className="absolute top-1 left-1 sm:left-16 md:left-[232px] right-1 h-14 dark:bg-zinc-800 rounded-sm flex items-center p-1">
            {SideBarToggle}
        </nav>
    );
}
