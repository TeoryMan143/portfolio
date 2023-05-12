interface Props {
    children: string;
    className?: string;
}

function Title({ children, className }: Props) {
    return (
        <h2
            className={`text-blue-500 text-6xl font-high text-center p-8 ${className}`}
        >
            {children}
        </h2>
    );
}
export default Title;
