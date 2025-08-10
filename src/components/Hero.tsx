import useReveal from "@/useReveal";
import "@/styles/hero.scss";
import Marquee from "./Marquee";

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="section hero">
      {/* <div className="container">
        <div ref={ref}>
          <span className="badge">Designer / Developer</span>
          <h1 className="title-xl">Building clean, performant web experiences.</h1>
          <p className="">
            React, TypeScript, animations, and a pinch of taste.
          </p>
          <div className="cta">
            <a className="btn" href="#work">View Work</a>
            <a className="link" href="#contact">Get in touch</a>
          </div>
        </div>
      </div> */}
      <Marquee />
    </section>
  );
}
