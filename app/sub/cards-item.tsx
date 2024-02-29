/** @format */

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

interface CardsItemProps {
  title: string;
  description?: string[];
  id: string;
}

const CardsItem = ({ title, description, id }: CardsItemProps) => {
  return (
    <Card className="min-w-[280px] w-[280px] max-w-[280px] min-h-[350px] max-h-[350px] h-[350px] relative text-white bg-[#0074FF]">
      <CardContent className="px-3 absolute top-[15%] flex flex-col py-4 w-full text-left">
        <CardTitle className="font-bold text-2xl text-nowrap ml-4">{title}</CardTitle>
        {description?.map((desc) => (
          <CardDescription
            key={desc.length * 11}
            className="mt-2 text-wrap text-sm text-white">
            {desc}
          </CardDescription>
        ))}
      </CardContent>
      <div className="text-8xl h-full w-full relative">
        <p className="absolute text-[#1A1A1A1A] font-bold top-0">{id}</p>
      </div>
    </Card>
  );
};

export default CardsItem;
