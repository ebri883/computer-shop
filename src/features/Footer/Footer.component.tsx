import React from "react";
import s from "./Footer.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { PATHS } from "@/constants/PATHS";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import IconBox from "@/components/molecules/IconBox";

const Footer = () => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className={clsx(s._SectionMain, "container")}>
        <div className={clsx(s._Col, s._CompanyInfo)}>
          <Link href={PATHS.homepage} className={s._SiteLogo}>
            <Icon iconName="IcSiteLogo" width={226} height={47} />
          </Link>
          <a
            href="https://maps.app.goo.gl/7Xy3CreKziKt9xYk9"
            target="_blank"
            className={clsx("body-sm", "white")}
          >
            Jl. Affandi No.17, Soropadan, Condongcatur, Kec. Depok, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55283
          </a>
          <div className={clsx(s._SocialMediaWrapper)}>
            <a href="https://www.facebook.com/" target="_blank">
              <Icon
                className={clsx("white")}
                iconName="IcAwesomeFacebook"
                width={25.36}
                height={25.21}
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <Icon
                className={clsx("white")}
                iconName="IcAwesomeTwitter"
                width={26.18}
                height={21.26}
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <Icon
                className={clsx("white")}
                iconName="IcAwesomeYoutube"
                width={27.92}
                height={19.63}
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Icon
                className={clsx("white")}
                iconName="IcAwesomeInstagram"
                width={22.92}
                height={22.91}
              />
            </a>
          </div>
        </div>
        <div className={clsx(s._Col, s._CompanyAboutPages)}>
          <Typography
            variant="body-lg"
            className={clsx("white")}
            fontWeight={500}
          >
            Komputech
          </Typography>
          <div className={clsx(s._MenuWrapper)}>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Tentang Kami
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Karir
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Akun Komputech
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Hubungi Kami
            </Link>
          </div>
        </div>
        <div className={clsx(s._Col, s._CompanyServicePages)}>
          <Typography
            variant="body-lg"
            className={clsx("white")}
            fontWeight={500}
          >
            Informasi Layanan
          </Typography>
          <div className={clsx(s._MenuWrapper)}>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Pengembalian Barang
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Servis dan Purna Jual
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Syarat dan Ketentuan
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Kebijakan Privasi
            </Link>
            <Link href={"/"} className={clsx("white", "body-md")}>
              Lokasi Toko
            </Link>
          </div>
        </div>
        <div className={clsx(s._Col, s._CompanyContacts)}>
          <Typography
            variant="body-lg"
            className={clsx("white")}
            fontWeight={500}
          >
            Contact Support
          </Typography>
          <a href="https://wa.me/62812223444" target="_blank">
            <IconBox
              iconName="IcAwesomeWhatsapp"
              iconSize={17}
              className={clsx("white")}
            >
              <Typography variant="body-sm">081-222-3444</Typography>
            </IconBox>
          </a>
          <a href="tel:0812223444" target="_blank">
            <IconBox
              iconName="IcFeatherPhone"
              iconSize={15}
              className={clsx("white")}
            >
              <Typography variant="body-sm">081-222-3444</Typography>
            </IconBox>
          </a>
          <a href="mailto:sales@komputec.com" target="_blank">
            <IconBox
              iconName="IcFeathermail"
              iconSize={17}
              className={clsx("white")}
            >
              <Typography variant="body-sm">sales@komputec.com</Typography>
            </IconBox>
          </a>
        </div>
      </div>
      <div className={clsx(s._SectionWatermark, "container")}>
        <span className={s._SeparatorLine}></span>
        <Link href={PATHS.homepage} className={clsx("body-md", "white")}>
          Copyright © 2021 KompuTech
        </Link>
      </div>
    </div>
  );
};

export default Footer;
