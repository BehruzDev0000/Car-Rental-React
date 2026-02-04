const Href = ({ href, style = "", children }) => {
  return (
    <a href={href} className={`inline-block ${style}`}>
      {children}
    </a>
  );
};

export default Href;
