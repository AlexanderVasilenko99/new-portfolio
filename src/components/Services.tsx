import "@/styles/services.scss";

const services = [
  { title: "Product Design", desc: "UX research, wireframes, UI systems."},
  { title: "Frontend Engineering", desc: "React, animations, performance."},
  { title: "Web Consulting", desc: "Audits, roadmaps, team enablement."},
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="title-lg">Services</h2>
        <div className="grid services">
          {services.map(s => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
