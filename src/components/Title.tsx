interface Props {
    children: string;
}

function Title({ children }: Props) {
    return (
        <h2 className='text-blue-500 text-4xl font-high text-center p-8'>
            {children}
        </h2>
    );
}
export default Title;
