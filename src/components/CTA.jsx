import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} my-6 px-6 py-6 sm:flex-row flex-col bg-black-gradient-2 rounded-[16px] shadow-md`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-[24px] sm:text-[28px] text-white font-semibold leading-tight">
          Let's try our service now!
        </h2>
        <p className="text-dimWhite text-[14px] leading-relaxed max-w-[420px] mt-3">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex items-center justify-center sm:ml-6 ml-0 sm:mt-0 mt-6">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
