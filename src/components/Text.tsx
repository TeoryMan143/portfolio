interface Props {
    children: string;
    className?: string;
}

function Text({ children, className }: Props) {
    return <p className={`font-low text-white ${className}`}>{children}</p>;
}
export default Text;
