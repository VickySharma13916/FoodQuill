import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
const Grocery = () => {
  const [isVisible, setIsVisible] = useState("");
  return (
    <>
      <h1 className="p-4">
        This is grocery section for the delivery of the groceries.
      </h1>
      <Section
        title={"About Grocery"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias voluptate repudiandae eaque expedita officiis eos eum dolore recusandae, molestias totam doloribus nobis, quasi, facere eligendi autem cupiditate. Natus, aspernatur"
        }
        isVisible={isVisible === "about"}
        handleShowDescription={() =>
          setIsVisible(isVisible === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Grocery"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias voluptate repudiandae eaque expedita officiis eos eum dolore recusandae, molestias totam doloribus nobis, quasi, facere eligendi autem cupiditate. Natus, aspernatur"
        }
        isVisible={isVisible === "team"}
        handleShowDescription={() =>
          setIsVisible(isVisible === "team" ? "" : "team")
        }
      />
      <Section
        title={"Instamart Grocery"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias voluptate repudiandae eaque expedita officiis eos eum dolore recusandae, molestias totam doloribus nobis, quasi, facere eligendi autem cupiditate. Natus, aspernatur"
        }
        isVisible={isVisible === "Instamart"}
        handleShowDescription={() =>
          setIsVisible(isVisible === "Instamart" ? "" : "Instamart")
        }
      />
    </>
  );
};

const Section = ({ title, description, isVisible, handleShowDescription }) => {
  return (
    <div
      className="border rounded-lg p-4 m-4"
      onClick={() => handleShowDescription()}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{title}</div>
        <button>{isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</button>
      </div>
      {isVisible && <div className="font-semibold mt-2">{description}</div>}
    </div>
  );
};

export default Grocery;
