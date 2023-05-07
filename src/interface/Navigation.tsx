import UniMenu from '../components/UniMenu';
import { TbMath } from 'react-icons/tb';
import MenuLink from '../components/ui/MenuLink';
import { BiAtom } from 'react-icons/bi';
import { GiPendulumSwing } from 'react-icons/gi';

function Navigation() {
    return (
        <nav className='border-b-blue-400 border-b-2 p-4 inline-flex justify-center gap-4 relative'>
            <UniMenu icon={<TbMath />} label='Matematicas'>
                <MenuLink to='math1'>Lugar Geometrico</MenuLink>
                <MenuLink to='math2'>Circumferencia</MenuLink>
            </UniMenu>
            <UniMenu icon={<BiAtom />} label='Quimica'>
                <MenuLink to='math1'>Tipos de reacciónes</MenuLink>
                <MenuLink to='math2'>Soluciones</MenuLink>
            </UniMenu>
            <UniMenu icon={<GiPendulumSwing />} label='Fisica'>
                <MenuLink to='math1'>MRU</MenuLink>
                <MenuLink to='math2'>Leyes de Newton</MenuLink>
            </UniMenu>
        </nav>
    );
}
export default Navigation;
