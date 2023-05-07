interface Props {
    children: React.ReactNode;
    href: string;
}

function FooLi({ children, href }: Props) {
    return (
        <li className='text-center flex justify-center font-mid'>
            <a
                href={href}
                className='inline-flex items-center gap-2 text-md text-white'
            >
                {children}
            </a>
        </li>
    );
}
export default FooLi;
