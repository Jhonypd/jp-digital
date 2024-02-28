/** @format */

import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ItemMenu from "../../components/item-menu";
import { listMenu } from "../../utils/list-menu";

const SideMenuMobile = () => {
  return (
    <>
      <SheetHeader className="text-left flex-row items-center border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-3 px-5">
        {listMenu.map((menu) => (
          <ItemMenu key={menu.name} name={menu.name} url={menu.url} />
        ))}
      </div>
    </>
  );
};

export default SideMenuMobile;
