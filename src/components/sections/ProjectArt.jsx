export default function ProjectArt({ type }) {
  if (type === 'dashboard') {
    return <div className="dashboard-mockup"><div className="mock-sidebar"></div><div className="mock-main"><div className="mock-bar"></div><div className="mock-chart"><span></span><span></span><span></span><span></span><span></span></div><div className="mock-row"><i></i><i></i><i></i></div></div></div>;
  }
  if (type === 'phone') {
    return <div className="phone-mockup"><span className="phone-speaker"></span><div className="phone-heading"></div><div className="phone-ring"></div><div className="phone-lines"><i></i><i></i><i></i></div></div>;
  }
  return <div className="commerce-mockup"><div className="commerce-nav"></div><div className="commerce-copy"><i></i><i></i><i></i></div><div className="commerce-object"></div></div>;
}
