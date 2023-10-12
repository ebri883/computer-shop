import React from "react";
import s from "./Breadcrumb.module.scss";
import clsx from "clsx";
import Link from "next/link";

export interface IBreadcrumbItemProps {
  breadcrumbTitle: string;
  breadcrumbUrl?: string;
}

export interface IBreadcrumbProps {
  arrBreadcrumbItem: IBreadcrumbItemProps[];
  className?: string;
}

const Breadcrumb = ({ arrBreadcrumbItem, className }: IBreadcrumbProps) => {
  return (
    <div className={clsx(s._Wrapper, className)}>
      {arrBreadcrumbItem?.map((breadCrumbItem, key) => {
        return (
          <Link
            key={key}
            href={
              breadCrumbItem?.breadcrumbUrl ? breadCrumbItem.breadcrumbUrl : ""
            }
            className={clsx("body-lg", "gray-4")}
          >
            {breadCrumbItem.breadcrumbTitle}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
