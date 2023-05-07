import { Menu } from '@headlessui/react';
import { IoMdArrowDropright } from 'react-icons/io';

interface Props {
    children: string;
    icon: JSX.Element;
}

function MenuButton({ children, icon }: Props) {
    return (
        <Menu.Button className='font-mid text-lg text-blue-600 bg-slate-200 inline-flex items-center p-3 gap-1 rounded-lg border-2 border-blue-600 hover:bg-opacity-60'>
            <span className='text-2xl'>{icon}</span>
            {children}
            <span className='ui-open:rotate-90 transition-transform'>
                <IoMdArrowDropright />
            </span>
        </Menu.Button>
    );
}
export default MenuButton;
