type SubHeadingProps = {
  text?: any;
  variant?: any;
};
export const SubHeading = ({ text, variant }: SubHeadingProps) => {
  return (
    <div style={{ backgroundColor: variant }}>
      <h1>{text}</h1>
    </div>
  );
};
