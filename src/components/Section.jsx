import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";
import PropTypes from "prop-types";

const Section = ({
  //this section items are props
  id,
  className,
  children,
  crosses,
  crossesOffset,
  customPaddings,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
          className || ""
        }`
      }`}
    >
      {children}
      <div className="hidden absolute top-1 left-5 w-1 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.3 xl:left-9" />
      <div className="hidden absolute top-1 right-5 w-1 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.3 xl:left-9" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.3 right-7.3 h-0.25 bg-stroke-1 ${
              crossesOffset || " "
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

Section.PropTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  crosses: PropTypes.bool.isRequired,
  crossesOffset: PropTypes.string.isRequired,
  customPaddings: PropTypes.string.isRequired,
};

export default Section;
