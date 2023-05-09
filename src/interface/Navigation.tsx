import UniMenu from '../components/UniMenu';
import { TbMath } from 'react-icons/tb';
import MenuLink from '../components/ui/MenuLink';
import { BiAtom, BiHome } from 'react-icons/bi';
import { GiPendulumSwing } from 'react-icons/gi';
import { ROUTES } from './Main';
import HomeButton from './HomeButton';

function Navigation() {
    return (
        <nav className='border-b-blue-400 border-b-2 p-4 inline-flex justify-center gap-4 relative'>
            <HomeButton icon={<BiHome />}>Inicio</HomeButton>
            <UniMenu icon={<TbMath />} label='Matematicas'>
                <MenuLink to={ROUTES.MATH.GEO}>Lugar Geometrico</MenuLink>
                <MenuLink to={ROUTES.MATH.CIRCUM}>Circumferencia</MenuLink>
            </UniMenu>
            <UniMenu icon={<BiAtom />} label='Quimica'>
                <MenuLink to={ROUTES.QUIM.TYPES}>Tipos de reacciónes</MenuLink>
                <MenuLink to={ROUTES.QUIM.SOL}>Soluciones</MenuLink>
            </UniMenu>
            <UniMenu icon={<GiPendulumSwing />} label='Fisica'>
                <MenuLink to={ROUTES.FIS.MRU}>MRU</MenuLink>
                <MenuLink to={ROUTES.FIS.NEWTON_LAWS}>Leyes de Newton</MenuLink>
            </UniMenu>
        </nav>
    );
}
export default Navigation;
