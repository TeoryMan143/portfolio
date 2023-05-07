import { Menu } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

interface Props {
    children: string;
    to: string;
}

function MenuLink({ children, to }: Props) {
    return (
        <Menu.Item>
            <NavLink
                to={to}
                className='ui-not-active:text-blue-600 font-mid ui-not-active:border-b-blue-600 border-b-2 p-2.5  ui-active:border-b-blue-700 ui-active:text-blue-700 ui-not-active:bg-slate-300 ui-active:bg-slate-200 transition-colors'
            >
                {children}
            </NavLink>
        </Menu.Item>
    );
}
export default MenuLink;
