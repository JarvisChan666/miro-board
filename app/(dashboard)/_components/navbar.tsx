"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

export function Navbar() {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
      {/* Hidden in mobile */}
      {/* 在大屏幕及以上尺寸上，将 display 属性设置为 flex，使元素显示出来并成为一个 Flex 容器。 */}
      {/* lg:flex-1：在大屏幕及以上尺寸上，设置 flex-grow 属性为 1，使这个元素在 Flex 容器中扩展以填充剩余空间。 */}
      <div className="hidden lg:flex lg:flex-1 ">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          // We can also style login logout clerk component by using "apperance"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}

      <UserButton />
    </div>
  );
}
