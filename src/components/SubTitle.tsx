interface Props {
    children: React.ReactNode;
    className?: string;
}

function SubTitle({ children, className }: Props) {
    return (
        <h3
            className={`text-cyan-300 text-5xl font-high flex gap-2 items-center ${className}`}
        >
            {children}
        </h3>
    );
}
export default SubTitle;
