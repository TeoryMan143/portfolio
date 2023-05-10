interface Props {
    children: React.ReactNode;
}

function Article({ children }: Props) {
    return (
        <article className='bg-slate-400 p-8 rounded-md'>{children}</article>
    );
}
export default Article;
