"use client"

import { UserButton } from "@clerk/nextjs"
import React from "react"

export function Navbar() {
    return(
        <div className="flex items-center gap-x-4 p-5 bg-blue-300">\
            {/* Hidden in mobile */}
            {/* 在大屏幕及以上尺寸上，将 display 属性设置为 flex，使元素显示出来并成为一个 Flex 容器。 */}
            {/* lg:flex-1：在大屏幕及以上尺寸上，设置 flex-grow 属性为 1，使这个元素在 Flex 容器中扩展以填充剩余空间。 */}
            <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
                search
            </div>
            <UserButton/>
        </div>
    )
}