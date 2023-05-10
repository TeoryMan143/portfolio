import { BsGithub } from 'react-icons/bs';
import FooLi from '../components/FooLi';
import { FaUserTie, FaPencilRuler } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='p-3 bg-blue-500'>
            <ul className='flex gap-3 flex-col'>
                <FooLi
                    target='_blank'
                    href='https://github.com/TeoryMan143/portfolio'
                >
                    <span className='text-xl'>
                        <BsGithub />
                    </span>
                    Codigo Fuente
                </FooLi>
                <FooLi target='_blank' href='https://github.com/TeoryMan143'>
                    <span className='text-xl'>
                        <FaUserTie />
                    </span>
                    Jonathan David Cortes Castaño
                </FooLi>
                <FooLi href='#' target='_self'>
                    <span className='text-xl'>
                        <FaPencilRuler />
                    </span>
                    Grado 10-2
                </FooLi>
            </ul>
        </footer>
    );
}
export default Footer;
