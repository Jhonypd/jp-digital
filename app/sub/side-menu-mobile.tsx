/** @format */

import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ItemMenu from "../../components/item-menu";
import { listMenu } from "../../utils/list-menu";

const SideMenuMobile = () => {
  return (
    <>
      <SheetHeader className="text-left flex-row items-center border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-3 items-start py-5 px-2">
        {listMenu.map((menu) => (
          <SheetClose key={menu.name} asChild>
            <ItemMenu name={menu.name} url={menu.url} />
          </SheetClose>
        ))}
      </div>
    </>
  );
};

export default SideMenuMobile;
