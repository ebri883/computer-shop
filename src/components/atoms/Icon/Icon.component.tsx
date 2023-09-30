import clsx from "clsx";
import s from "./Icon.module.scss";
import Icons from "./Icons";

export type TIconName = keyof typeof Icons;

interface IIconProps {
  iconName?: TIconName;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({
  iconName = "IcAwesomeWhatsapp",
  size = 20,
  color,
  width = size,
  height = size,
  className = "",
  onClick,
}: IIconProps) => {
  return (
    <span
      className={clsx(s._Wrapper, className)}
      style={{
        width: width,
        height: height,
        color,
      }}
      onClick={onClick}
    >
      {Icons[iconName]}
    </span>
  );
};

export default Icon;
