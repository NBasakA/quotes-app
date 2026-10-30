export const Card = ({ children, className }) => {
  return <div className={`bg-slate-100 border-md p-8 ${className}`}>{children}</div>;
};
