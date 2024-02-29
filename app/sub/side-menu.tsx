/** @format */

import React from "react";
import { listMenu } from "../../utils/list-menu";
import ItemMenu from "../../components/item-menu";
import { SheetClose } from "@/components/ui/sheet";

const SideMenu = () => {
  return (
    <div className="flex flex-row gap-5 px-5">
      {listMenu.map((menu) => (
        <SheetClose asChild key={menu.name}>
          <ItemMenu name={menu.name} url={menu.url} />
        </SheetClose>
      ))}
    </div>
  );
};

export default SideMenu;
