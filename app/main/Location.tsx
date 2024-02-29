/** @format */

import MapLocation from "../sub/map-laction";
import TitleH2 from "../sub/titles";

const Location = () => {
  return (
    <div
      id="location"
      className="flex min-w-full max-w-full h-full gap-4 pt-8 flex-col relative after:h-[1px] after:bg-black after:w-[150px] after:m-[auto]">
      <TitleH2 text="Location" />
      <div className="flex-col flex px-4">
        <div className="bg-[#0074FF33] h-[200px] w-[200px] z-[-2] rounded-full absolute left-[-10%]"></div>
        <p className="text-center font-normal mb-4 text-[#595959]">
          Aqui estou apenas demonstrando uma forma de capturar a localização do
          dispositivo para mostrá-la ao usuário em um mapa. Em um cenário mais usual,
          seria mostrado aqui o endereço da empresa. Este exemplo serve apenas para
          colocar em prática o que foi aprendido em aula.
        </p>

        <div
          id="map"
          className="w-full flex items-center h-[300px] bg-[#E2E0E0] drop-shadow-2xl">
          <MapLocation />
        </div>
      </div>
    </div>
  );
};

export default Location;
