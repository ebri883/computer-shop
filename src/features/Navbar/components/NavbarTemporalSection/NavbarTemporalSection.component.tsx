import React from "react";
import s from "./NavbarTemporalSection.module.scss";
import clsx from "clsx";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";

interface INavbarTemporalSectionProps {
  children: string;
  onClickNavbarTemporalSectionIc: () => void;
}

const NavbarTemporalSection = ({
  children,
  onClickNavbarTemporalSectionIc,
}: INavbarTemporalSectionProps) => {
  const handleonClickNavbarTemporalSectionIc = () => {
    onClickNavbarTemporalSectionIc();
  };

  return (
    <div className={clsx(s._Wrapper, "navbar-temporal-section")}>
      <div className={"container"}>
        <Typography fontWeight={500}>{children}</Typography>
        <Icon
          iconName="IcAwesomeTimes"
          size={12}
          onClick={handleonClickNavbarTemporalSectionIc}
        />
      </div>
    </div>
  );
};

export default NavbarTemporalSection;
