import s from "./PopupContainer.module.scss";
import clsx from "clsx";
import React, { ReactNode, useEffect, useState } from "react";

export interface IPopupContainerProps {
  headElement: ReactNode;
  bodyElement: ReactNode;
  footElement: ReactNode;
  isOpen: boolean;
  className?: string;
}

const PopupContainer = ({
  headElement,
  bodyElement,
  footElement,
  isOpen = false,
  className,
}: IPopupContainerProps) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupIsVisible, setIsVisiblePopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPopupIsOpen(true);

      setTimeout(() => {
        setIsVisiblePopup(true);
      }, 10);
    } else {
      setIsVisiblePopup(false);

      setTimeout(() => {
        setPopupIsOpen(false);
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      {popupIsOpen && (
        <div
          className={clsx(
            s._Wrapper,
            popupIsVisible && s._IsVisible,
            className
          )}
        >
          <div className={clsx(s._Overlay)}></div>
          <div className={clsx(s._PopupCard)}>
            <div className={s._PopupHead}>{headElement}</div>
            <div className={s._PopupBody}>{bodyElement}</div>
            <div className={s._PopupFoot}>{footElement}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupContainer;
