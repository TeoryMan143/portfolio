import { NavLink } from 'react-router-dom';
import { ROUTES } from './Main';

interface Props {
    children: string;
    icon: JSX.Element;
}

function HomeButton({ children, icon }: Props) {
    return (
        <NavLink
            to={ROUTES.HOME}
            className='font-mid text-lg text-blue-600 bg-slate-200 inline-flex items-center p-3 gap-1 rounded-lg border-2 border-blue-600 hover:bg-slate-100 relative transition-colors'
        >
            <span className='text-2xl'>{icon}</span>
            {children}
        </NavLink>
    );
}
export default HomeButton;
