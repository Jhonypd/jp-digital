/** @format */

import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-6 w-full h-20 bg-[#1a1a1a] px-4">
      <div className="flex flex-row h-full justify-between items-center">
        <Link href={"/"} className="text-nowrap ">
          <p className="font-bold text-white">
            JP<span className="text-[#595959]"> Digital</span>
          </p>
        </Link>
        <p className="text-white text-sm">
          {`\u00A9 Copyright ${year} | All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
