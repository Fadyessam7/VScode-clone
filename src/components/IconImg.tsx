import { svgStyles } from "../styles";

interface IProps {
  src: string;
}
const IconImg = ({ src }: IProps) => {
  return <img src={src} alt="" style={svgStyles} />;
};

export default IconImg;
