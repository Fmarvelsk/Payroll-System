const Spacer = ({ size, className }: { size: number; className?: string }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={className}></div>
  );
};

export default Spacer;
