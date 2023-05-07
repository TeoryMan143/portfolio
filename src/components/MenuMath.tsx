import { Menu } from '@headlessui/react';
import MenuButton from '../components/ui/MenuButton';
import { TbMath } from 'react-icons/tb';
import MenuLink from './ui/MenuLink';

function MenuMath() {
    return (
        <Menu>
            <MenuButton icon={<TbMath />}>Matematicas</MenuButton>
            <Menu.Items className='absolute right-0'>
                <MenuLink to='/math1' />
            </Menu.Items>
        </Menu>
    );
}
export default MenuMath;
