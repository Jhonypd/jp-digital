/** @format */

interface textProps {
  text: string;
}
const TitleH2 = ({ text }: textProps) => {
  return <h2 className="font-bold text-2xl text-center">{text}</h2>;
};

export default TitleH2;
