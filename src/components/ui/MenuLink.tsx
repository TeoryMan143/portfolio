import { NavLink } from 'react-router-dom';

interface Props {
    to: string;
}

function MenuLink({ to }: Props) {
    return <NavLink to={to}>MenuLink</NavLink>;
}
export default MenuLink;
