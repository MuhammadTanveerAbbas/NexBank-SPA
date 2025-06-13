import React from "react";
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Stop overpaying on your credit cards. Discover smarter, faster, and
          more secure card deals tailored just for you. Top rated cards deal.
        </p>

        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="credit card"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
