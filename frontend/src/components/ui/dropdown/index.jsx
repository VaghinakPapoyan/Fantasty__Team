import "./index.scss";
import ArrowImage from "../../../assets/images/arrow-drop.svg";
import { useState } from "react";
import useOutsideClickDetector from "../../../utils/outside";
import { useRef } from "react";
import { useEffect } from "react";

export const DropDown = ({
  options,
  selectedOption,
  select,
  isHaveIcon,
  icon,
}) => {
  const title = selectedOption.label;

  return (
    <div className="dn">
      <div className="dn__title">
        {isHaveIcon && <img src={selectedOption.icon} width={40} height={50} />}
        <span>{title}</span>
        <img src={ArrowImage} alt="" />
      </div>
      <div className={`dn__content`}>
        {options.map((e) => {
          const title = e.label;
          return (
            <div
              className="dn__content__item"
              onClick={() => {
                select(e);
              }}
            >
              {isHaveIcon && <img width={40} height={50} src={e.icon} />}
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
