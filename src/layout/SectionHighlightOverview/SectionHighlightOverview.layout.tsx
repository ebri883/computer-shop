import React, { ReactNode } from "react";
import s from "./SectionHighlightOverview.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";

export interface ISectionHighlightOverviewProps {
  title: string;
  detailText?: string;
  detailUrl?: string;
  bodyClass?: string;
  children: ReactNode;
}

const SectionHighlightOverview = ({
  title,
  detailText,
  detailUrl,
  bodyClass,
  children,
}: ISectionHighlightOverviewProps) => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        <div className={clsx(s._Head)}>
          <Typography variant="h4" fontWeight={700} className={clsx("gray-4")}>
            {title}
          </Typography>
          {detailText && (
            <Link
              href={detailUrl ? detailUrl : ""}
              className={clsx("body-lg", "gray-3")}
            >
              {detailText}
            </Link>
          )}
        </div>
        <div className={clsx(s._Body, bodyClass)}>{children}</div>
      </div>
    </div>
  );
};

export default SectionHighlightOverview;
