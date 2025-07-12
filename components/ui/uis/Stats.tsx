"use client";

import React, {  useRef } from "react";
import { useCountUp } from "react-countup";

// --- Stats Data ---
const stats = [
  {
    num: 1,
    text: "Years of experience",
    suffix: "+",
  },
  {
    num: 5,
    text: "Projects completed",
    suffix: "+",
  },
  {
    num: 99,
    text: "Client satisfaction",
    suffix: "%",
  },
  {
    num: 80,
    text: "Commits on Github",
    suffix: "+",
  },
];

// --- CountUp Component ---
const CountUpComponent = ({
  end,
  suffix,
}: {
  end: number;
  suffix?: string;
}) => {
  const countUpRef = useRef<HTMLElement>(null!) as React.RefObject<HTMLElement>;

  useCountUp({
    ref: countUpRef,
    end,
    duration: 8,
    suffix,
  });

  return <span ref={countUpRef} />;
};

const Stats = () => {
  return (
    <section className="  text-white xl:pr-16 xl:pt-14 pt-12">
      {" "}
      {/* Dark background */}
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6  rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <CountUpComponent end={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="text-white/80 text-lg">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
