import React from "react";
import FAQ from "../../components/FAQ";
import Section from "../../components/Header";
import FAQs from "../../imgs/header/faqs.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Section backgroundImage={FAQs} title="FAQs" />
        <FAQ />
      </div>
    </>
  );
};
