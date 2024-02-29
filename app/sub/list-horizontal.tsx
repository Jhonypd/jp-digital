/** @format */

import { listServices } from "@/utils/list-service";
import CardsItem from "./cards-item";

const ListHorizontal = () => {
  return (
    <div className="flex flex-row gap-4">
      {listServices.map((service) => (
        <CardsItem
          key={service.id}
          id={service.id}
          title={service.name}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ListHorizontal;
