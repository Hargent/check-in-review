type ErrorProps = {
  children: React.ReactElement;
};

const Error: React.FC<ErrorProps> = ({ children }) => {
  return (
    <div>
      <div className=" h-screen align-middle">{children}</div>
    </div>
  );
};
// export { Box };
export default Error;
