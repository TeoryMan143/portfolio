interface Props {
    children: string;
    clasName?: string;
}

function Text({ children, clasName }: Props) {
    return <p className={`font-low text-white ${clasName}`}>{children}</p>;
}
export default Text;
