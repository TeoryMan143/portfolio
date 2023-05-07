import { Menu, Transition } from '@headlessui/react';
import MenuButton from './ui/MenuButton';

interface Props {
    children: JSX.Element[];
    icon: JSX.Element;
    label: string;
}

function UniMenu({ children, icon, label }: Props) {
    return (
        <Menu as='div' className='relative'>
            {({ open }) => (
                <>
                    <MenuButton icon={icon}>{label}</MenuButton>
                    <Transition
                        show={open}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items className='absolute right-0 inline-flex flex-col top-2 rounded-md overflow-hidden min-w-max'>
                            {children}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
export default UniMenu;
