export default function Loading() {
    return (
        <div className="fixed top-1 right-1 left-1 w-full bottom-1  h-full dark:bg-black sm:static pt-[60px] sm:pt-0">
            <div className="flex flex-col gap-1 animate-pulse h-full small-scrollbar pr-1 w-full">
                <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 dark:bg-zinc-800 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 dark:bg-zinc-800 rounded col-span-2 py-2"></div>
                                <div class="h-2 dark:bg-zinc-800 rounded col-span-1 py-2"></div>
                            </div>
                            <div class="h-2 dark:bg-zinc-800 rounded py-2"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
                    <div className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative">
                        <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 dark:bg-zinc-800 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-2 py-4"></div>
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-1 py-4"></div>
                                    </div>
                                    <div class="h-2 dark:bg-zinc-800 rounded py-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative">
                        <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 dark:bg-zinc-800 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-2 py-4"></div>
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-1 py-4"></div>
                                    </div>
                                    <div class="h-2 dark:bg-zinc-800 rounded py-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative">
                        <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 dark:bg-zinc-800 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-2 py-4"></div>
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-1 py-4"></div>
                                    </div>
                                    <div class="h-2 dark:bg-zinc-800 rounded py-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-900 rounded-sm  aspect-square p-2 relative">
                        <div className="w-full py-2 px-4 dark:bg-zinc-900 rounded-sm">
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 dark:bg-zinc-800 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-2 py-4"></div>
                                        <div class="h-2 dark:bg-zinc-800 rounded col-span-1 py-4"></div>
                                    </div>
                                    <div class="h-2 dark:bg-zinc-800 rounded py-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
