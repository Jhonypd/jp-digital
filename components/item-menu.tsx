/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface ItemMenuProps {
  name: string;
  url?: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({ name, url = "" }) => {
  return (
    <>
      <Button variant={"outline"} className="border-0" asChild>
        <Link href={url} className="text-sm text-left">
          {name}
        </Link>
      </Button>
    </>
  );
};

export default ItemMenu;
