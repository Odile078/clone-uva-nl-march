const SectionWrapper = ({ children, className = "" }) => {
  return (
    <div className={`py-16 -mt-16 mb-16 relative ${className}`}>{children}</div>
  );
};

export default SectionWrapper;
