"use client";
import AddEditUrl from "@/components/AddEditUrl";
import { UserDataContext } from "@/context/ContextProvider";
import { useContext } from "react";

export default function EditUrlPage() {
    const { activeUrl, setActiveUrl } = useContext(UserDataContext);
    console.log(activeUrl);
    return <AddEditUrl type={"edit"} />;
}
