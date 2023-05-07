import Navigation from './Navigation';

function Header() {
    return (
        <header className='bg-blue-400 flex items-center justify-between'>
            <h1 className='text-white text-6xl font-high text-center p-8'>
                NUCLEO CIENCIA Y TECNOLOGIA
            </h1>
            <Navigation />
        </header>
    );
}
export default Header;
