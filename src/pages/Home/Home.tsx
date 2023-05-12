import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Article from '../../components/Article';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';
import Title from '../../components/Title';
import Image from '../../components/Image';

function Home() {
    return (
        <>
            <Title>TECNOLOGIAS USADAS</Title>
            <div className='flex flex-col gap-10 mb-10'>
                <Article>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <SubTitle className='mb-5'>
                                React <FaReact />
                            </SubTitle>
                            <Text>
                                React es una biblioteca de JavaScript para
                                construir interfaces de usuario interactivas y
                                dinámicas en aplicaciones web. Fue desarrollada
                                por Facebook, lanzada en 2013 y desde entonces
                                ha ganado una gran popularidad en la comunidad
                                de desarrollo web.
                            </Text>
                        </div>
                        <div className='flex gap-8 flex-wrap 2xl:flex-nowrap justify-center'>
                            <Image src='src/pages/Home/assets/react-ex.gif' />
                            <div className='flex flex-col gap-8'>
                                <Text>
                                    React se basa en el concepto de componentes,
                                    que son bloques de código reutilizables que
                                    representan partes de una interfaz de
                                    usuario, como botones, listas o formularios.
                                    Estos componentes pueden ser combinados y
                                    anidados para construir aplicaciones web más
                                    complejas. React maneja de forma eficiente
                                    la actualización del DOM (Document Object
                                    Model), lo que permite que las aplicaciones
                                    tengan un rendimiento óptimo y una
                                    experiencia de usuario fluida.
                                </Text>
                                <Text>
                                    Una característica clave de React es el uso
                                    de un &ldquo;DOM virtual&rdquo;, que es una
                                    representación en memoria del DOM real.
                                    React crea y actualiza esta representación
                                    antes de aplicar los cambios al DOM real, lo
                                    que minimiza las costosas operaciones de
                                    actualización y mejora el rendimiento de la
                                    aplicación.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Article>
                <Article>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <SubTitle className='mb-5'>
                                Tailwind <SiTailwindcss />
                            </SubTitle>
                            <Text>
                                Tailwind CSS es un marco de diseño de utilidades
                                (utility-first) para la creación de interfaces
                                de usuario rápidas y personalizables. Fue creado
                                por Adam Wathan y lanzado en 2017. A diferencia
                                de otros frameworks CSS como Bootstrap o
                                Foundation, que ofrecen componentes predefinidos
                                y estilos globales, Tailwind CSS proporciona
                                clases de utilidad de bajo nivel que se pueden
                                combinar y personalizar fácilmente.
                            </Text>
                        </div>
                        <div className='flex gap-8 flex-wrap 2xl:flex-nowrap flex-row-reverse justify-center'>
                            <Image src='src/pages/Home/assets/tailwind-ex.jpg' />
                            <div className='flex flex-col gap-8'>
                                <Text>
                                    El enfoque &ldquo;utility-first&rdquo; de
                                    Tailwind CSS permite a los desarrolladores
                                    construir componentes y diseños desde cero
                                    utilizando clases atómicas que representan
                                    propiedades individuales de CSS. Estas
                                    clases pueden ser aplicadas directamente a
                                    los elementos HTML, lo que proporciona un
                                    control granular sobre la apariencia y el
                                    comportamiento de los componentes.
                                </Text>
                                <Text>
                                    Una de las ventajas de Tailwind CSS es su
                                    configuración altamente personalizable. Los
                                    desarrolladores pueden ajustar fácilmente el
                                    sistema de diseño (como colores, tipografía,
                                    espaciado y otros) mediante un archivo de
                                    configuración centralizado. Esto hace que
                                    Tailwind CSS sea adaptable a diferentes
                                    proyectos y estilos visuales sin necesidad
                                    de sobrescribir estilos preexistentes o
                                    luchar contra la especificidad de CSS.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Article>
            </div>
        </>
    );
}
export default Home;
