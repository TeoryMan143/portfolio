import { FaReact } from 'react-icons/fa';
import Article from '../components/Article';
import SubTitle from '../components/SubTitle';
import Text from '../components/Text';
import Title from '../components/Title';

function Home() {
    return (
        <>
            <Title>TECNOLOGIAS USADAS</Title>
            <Article>
                <div className='flex gap-14'>
                    <div>
                        <SubTitle>
                            React <FaReact />
                        </SubTitle>
                        <Text>
                            React es una biblioteca de JavaScript para construir
                            interfaces de usuario interactivas y dinámicas en
                            aplicaciones web. Fue desarrollada por Facebook y se
                            utiliza ampliamente en la industria de desarrollo
                            web.
                        </Text>
                    </div>
                    <img src='/react-ex.gif' className='max-w-2xl' />
                </div>
            </Article>
        </>
    );
}
export default Home;
