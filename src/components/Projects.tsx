import useReveal from "@/useReveal";
import { projects } from "@/data/projects";
import "@/styles/projects.scss";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="title-lg">Selected Work</h2>
        <div className="grid projects">
          {projects.map((p, i) => (
            <a key={p.title} className="card" href={p.link} target="_blank" rel="noreferrer">
              <div className="thumb">
                <img src={`src/assets${p.image}`} alt={p.title} loading="lazy" />
              </div>
              <div className="meta">
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.tagline}</p>
                </div>
                <div className="tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
