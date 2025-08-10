import "@/styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <small>© {new Date().getFullYear()} Alexander Vasilenko</small>
        <small>Built with ReactTS + SCSS</small>
      </div>
    </footer>
  );
}
