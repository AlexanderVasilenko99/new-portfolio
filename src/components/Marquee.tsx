import "@/styles/marquee.scss";

// const items = ["React", "TypeScript", "SCSS", "GSAP-lite", "Rive-ready", "WebGL-ready", "SEO", "Accessibility"];
const items = [
  "Brand Strategy",
  "UI/UX Design",
  "Frontend Development",
  "React Engineering",
  "TypeScript",
  "Performance Optimization",
  "Responsive Layouts",
  "Animation & Motion",
  "Accessibility",
  "SEO Optimization",
  "API Integration",
  "E-commerce Solutions",
  "Content Management",
  "Design Systems",
  "Prototyping",
  "Code Reviews"
];

export default function Marquee() {
  // return (
  //   <div className="marquee">
  //     <div className="track">
  //       {Array.from({length: 2}).map((_,i)=>(
  //         <div key={i} className="row">
  //           {items.map((s, idx) => <span key={i+'-'+idx}>{s}</span>)}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="marquee">
      <div className="track">
        <span>
          Alexander Vasilenko —
          Alexander Vasilenko —
        </span>
      </div>
    </div>
  );
}
