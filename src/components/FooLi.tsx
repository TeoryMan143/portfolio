interface Props {
    children: React.ReactNode;
    href: string;
    target: '_blank' | '_self';
}

function FooLi({ children, href, target }: Props) {
    return (
        <li className='text-center flex justify-center font-mid'>
            <a
                href={href}
                target={target}
                rel='noreferrer'
                className='inline-flex items-center gap-2 text-md text-white'
            >
                {children}
            </a>
        </li>
    );
}
export default FooLi;
