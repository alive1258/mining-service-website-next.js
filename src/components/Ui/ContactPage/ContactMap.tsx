const ContactMap = () => {
  return (
    <div className="relative min-h-[200px] overflow-hidden bg-linear-to-br from-ink-600 to-ink-700 lg:min-h-full">
      <svg width="100%" height="100%" viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g fill="none" stroke="#2a3324" strokeWidth="1.5">
          <circle cx="250" cy="210" r="35" />
          <circle cx="250" cy="210" r="75" />
          <circle cx="250" cy="210" r="115" />
          <circle cx="250" cy="210" r="155" />
        </g>
        <g fill="#3a4633" opacity="0.7">
          <circle cx="150" cy="130" r="2.5" />
          <circle cx="200" cy="90" r="2.5" />
          <circle cx="320" cy="100" r="2.5" />
          <circle cx="380" cy="150" r="2.5" />
          <circle cx="120" cy="240" r="2.5" />
          <circle cx="380" cy="260" r="2.5" />
          <circle cx="180" cy="320" r="2.5" />
          <circle cx="300" cy="330" r="2.5" />
        </g>
        <circle cx="250" cy="210" r="8" fill="#c9ea3f" />
        <circle cx="250" cy="210" r="16" fill="none" stroke="#c9ea3f" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
};

export default ContactMap;
