/** @format */

import TextDesc from "@/components/text-desc";
import TitleH2 from "@/components/titles";
import CardsItemSegment from "../sub/cards-item-segment";
import { ListSegments } from "@/utils/list-segments";

const Segments = () => {
  return (
    <div
      id="segments"
      className="flex min-w-full max-w-full h-full gap-4 pt-8 flex-col overflow-hidden">
      <TitleH2 text="Segmentos" />
      <div className="flex flex-col items-center gap-4 px-4">
        <TextDesc
          text="
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's 
            "
        />
        <div className="px-4 py-4 flex md:flex-row md:flex-wrap items-center justify-center flex-col gap-8">
          {ListSegments.map((segment) => (
            <CardsItemSegment
              key={segment.name}
              image={segment.image}
              title={segment.name}
              description={segment.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Segments;
