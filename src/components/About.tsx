import useReveal from "@/useReveal";
import "@/styles/about.scss";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="col text" ref={ref}>
          <h2 className="title-lg">About</h2>
          <p>
            I craft reliable, fast web apps with a focus on clarity and detail.
            This starter uses React + TS + SCSS with a minimal animation layer,
            ready for your content.
          </p>
          <ul>
            <li>Performance-first mindset</li>
            <li>Accessible UI patterns</li>
            <li>Modern build tools</li>
          </ul>
        </div>
        <div className="col facts">
          <div className="fact"><span>5+</span><small>Years exp.</small></div>
          <div className="fact"><span>30+</span><small>Projects shipped</small></div>
          <div className="fact"><span>100%</span><small>Client-focused</small></div>
        </div>
      </div>
    </section>
  );
}
