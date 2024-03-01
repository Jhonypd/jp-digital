/** @format */

import React from "react";
import { listMenu } from "../../utils/list-menu";
import ItemMenu from "../../components/item-menu";

const SideMenu = () => {
  return (
    <div className="flex flex-row gap-5 px-5">
      {listMenu.map((menu) => (
        <ItemMenu key={menu.name} name={menu.name} url={menu.url} />
      ))}
    </div>
  );
};

export default SideMenu;
