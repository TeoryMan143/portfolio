interface Props {
    children: React.ReactNode;
    className?: string;
}

function Article({ children, className }: Props) {
    return (
        <article className={`bg-slate-400 p-8 rounded-md ${className}`}>
            {children}
        </article>
    );
}
export default Article;
