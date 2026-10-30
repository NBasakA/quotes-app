export const Card = ({children, ...props}) => {
    return (
        <div className="bg-slate-100 border-md p-8" {...props}>
            {children}
        </div>)
};