/** @format */

import CardsItem from "../sub/cards-item";
import ListHorizontal from "../sub/list-horizontal";
import TitleH2 from "../sub/titles";
import { listServices } from "@/utils/list-service";

const Services = () => {
  return (
    <div
      id="services"
      className="flex min-w-full max-w-full h-full gap-4 pt-8 flex-col overflow-hidden relative">
      <TitleH2 text="Service" />
      <div className="flex-col flex relative  px-4">
        <div className="border-[4px] h-[300px] w-[300px] rounded-full absolute right-[-20%] top-[-35%] z-[-2] py-8"></div>

        <p className="text-center font-normal mb-4 text-[#595959]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard
        </p>

        <div className="px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <ListHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Services;
