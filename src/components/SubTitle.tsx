interface Props {
    children: React.ReactNode;
}

function SubTitle({ children }: Props) {
    return (
        <h3 className='text-cyan-300 text-3xl font-high flex gap-2 items-center'>
            {children}
        </h3>
    );
}
export default SubTitle;
