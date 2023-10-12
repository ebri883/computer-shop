import { Typography } from "@/components/atoms/Typography";
import IconBox from "@/components/molecules/IconBox";
import { PATHS } from "@/constants/PATHS";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import s from "./NavbarInfo.module.scss";

const NavbarInfo = () => {
  return (
    <div className={clsx(s._SectionInfo)}>
      <div className="container">
        <div className={clsx(s._ContactWrapper)}>
          <a href="https://wa.me/62812223444" target="_blank">
            <IconBox iconName="IcAwesomeWhatsapp" className={clsx("gray-3")}>
              <Typography variant="body-sm">081-222-3444</Typography>
            </IconBox>
          </a>
          <a href="mailto:sales@komputec.com">
            <IconBox
              iconName="IcFeathermail"
              iconSize={20}
              className={clsx("gray-3")}
            >
              <Typography variant="body-sm">sales@komputec.com</Typography>
            </IconBox>
          </a>
        </div>
        <div className={clsx(s._AccountWrapper)}>
          <Link href={PATHS.login}>
            <IconBox
              iconName="IcFeatherUser"
              iconSize={19}
              className={clsx("gray-3")}
            >
              <Typography variant="body-sm">Akun</Typography>
            </IconBox>
          </Link>
          <Link href={PATHS.cart}>
            <IconBox
              iconName="IcFeatherShoppingBag"
              iconSize={19}
              className={clsx("gray-3")}
            >
              <Typography variant="body-sm">Rp 250.000</Typography>
            </IconBox>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarInfo;
