/** @format */

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardsItemSegmentProps {
  title: string;
  image: string;
  description?: string[];
}

const CardsItemSegment = ({ title, image, description }: CardsItemSegmentProps) => {
  return (
    <Card className="h-[200px] w-[390px] border-0 shadow-none max-[600px]:w-[90%]">
      <CardContent className="flex flex-row px-0 border-0">
        <div className="w-11 h-16 border-black border-r-[1px] border-b-[1px] flex items-center justify-center">
          <Image
            className="h-5 w-5"
            src={image}
            alt={title}
            height={0}
            width={0}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex flex-col px-4 gap-2 w-[85%] mt-9">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-[#595959] font-normal text-sm text-wrap text-left">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardsItemSegment;
