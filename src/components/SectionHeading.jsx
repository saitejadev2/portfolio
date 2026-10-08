export default function SectionHeading({ index, label, children }) {
  return (
    <div className="section-heading reveal">
      <p className="section-index">{index} / {label}</p>
      <h2 id={`${label.toLowerCase()}-title`}>{children}</h2>
    </div>
  );
}
