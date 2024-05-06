import React, { useEffect } from "react";
import { useRef } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { InvoiceSkeleton } from "../../../Components/skeletons/InvoiceSkeleton";
import { useSelector } from "react-redux";

const DateRangePickers = ({ click, setClick, loading, date, setDate }) => {
  const dateRef = useRef(null);
  const color = useSelector((state) => state.animateSlice);

  const parentElement = document.querySelector(".rdrDateRangePickerWrapper");
  const exceptEl = document.querySelector(".rdrDays");

  const dateRangeHandler = () => {
    setClick(!click);
  };
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentStartDate = date[0].startDate.toLocaleDateString("en", options);
  const currentEndDate = date[0].endDate.toLocaleDateString("en", options);

  function changeCssValue(parent, propertyName, newValue) {
    if (!parent || !parent.childNodes || parent === exceptEl) {
      return; // Exit if no parent or no child nodes
    }

    for (let i = 0; i < parent.childNodes.length; i++) {
      const childNode = parent.childNodes[i];

      parent !== exceptEl &&
        childNode.style?.setProperty(propertyName?.BgProp, newValue?.BgColor);
      parent !== exceptEl &&
        childNode.style?.setProperty(
          propertyName?.TextProp,
          newValue?.TextColor
        );

      if (childNode.nodeType === Node.ELEMENT_NODE) {
        changeCssValue(childNode, propertyName, newValue);
      }
    }
  }

  changeCssValue(
    parentElement,
    {
      BgProp: "background-color",

      TextProp: "color",
    },
    { BgColor: color.cardBgColor, TextColor: color.textColor }
  );

  useEffect(() => {
    changeCssValue(
      parentElement,
      {
        BgProp: "background-color",

        TextProp: "color",
      },
      {
        BgColor: color.cardBgColor,
        TextColor: color.textColor,
      }
    );
  }, [click]);

  return (
    <div className="min-w-[30%]  relative" ref={dateRef}>
      <li>
        {loading ? (
          <InvoiceSkeleton />
        ) : (
          <button
          style={{
            backgroundColor:color.bgColor,
            color:color.textColor
          }}
            className={`bg-white border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[${color.textColor}] placeholder-current
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
            space-x-1 hover:border-blue-500`}
            onClick={dateRangeHandler}
          >
            <span className="font-light text-gray-500">From :</span>
            <span>{currentStartDate}</span>
            <span> - </span>
            <span className="font-light text-gray-500">To :</span>
            <span>{currentEndDate}</span>
          </button>
        )}
      </li>

      <li
        style={{
          visibility: click ? "visible" : "collapse",

        }}
        className="absolute shadow rounded-md right-0 top-[48px] z-50"
      >
        <DateRangePicker
        
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          color={color.textColor}
          retainEndDateOnFirstSelection
          rangeColors={[color.bgColor,color.textColor]}
        />
      </li>
    </div>
  );
};

export default DateRangePickers;
