/** @format */

interface TextDescProps {
  text: string;
}

const TextDesc = ({ text }: TextDescProps) => {
  return <p className="text-center font-normal mb-4 text-[#595959]">{text}</p>;
};

export default TextDesc;
