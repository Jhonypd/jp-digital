/** @format */

"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideMenu from "../sub/side-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import SideMenuMobile from "../sub/side-menu-mobile";

const Navbar = () => {
  const [initialWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentWidth(window.innerWidth);
    }

    const verifyWindowWidth = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width !== initialWidth) {
          setCurrentWidth(width);
        }
      }
    };

    const handleResize = () => {
      verifyWindowWidth();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialWidth]);

  return (
    <header className="fixed top-0 w-full z-[50]">
      <Card className="md:border-0 shadow-none rounded-none">
        <CardContent className="p-5 flex justify-between items-center flex-row">
          <Link href={"/"} className="text-nowrap ">
            <p className="font-bold text-black">
              JP<span className="text-[#595959]"> Digital</span>
            </p>
          </Link>
          {initialWidth <= 768 ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <MenuIcon size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <SideMenuMobile />
              </SheetContent>
            </Sheet>
          ) : (
            <SideMenu />
          )}
        </CardContent>
      </Card>
    </header>
  );
};

export default Navbar;
