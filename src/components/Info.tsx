import useReveal from "@/useReveal";
import "@/styles/Info.scss";

export default function Info() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="info" className="section">
      <div className="container">
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
      </div>
    </section>
  );
}
