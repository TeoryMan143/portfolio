import Article from '../../components/Article';
import Image from '../../components/Image';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';
import Title from '../../components/Title';

function UnOrgTypes() {
    return (
        <>
            <Title>Tipos de reacciones inorgánicas</Title>
            <div className='flex flex-col gap-10'>
                <Article>
                    <SubTitle>Síntesis</SubTitle>
                    <div className='flex flex-col gap-8'>
                        <Text>
                            Una reacción de síntesis, también conocida como
                            reacción de combinación, es un tipo de reacción
                            química en la cual dos o más sustancias simples
                            (elementos o compuestos) se combinan para formar una
                            sustancia más compleja. Este proceso implica la
                            formación de enlaces químicos entre los átomos de
                            las sustancias iniciales, lo que resulta en la
                            producción de un compuesto con propiedades
                            diferentes a las de sus precursores.
                        </Text>
                        <Text>
                            En una reacción de síntesis, la estructura general
                            de la reacción puede representarse de la siguiente
                            manera:
                        </Text>
                        <Text className='text-center text-5xl'>A + B → AB</Text>
                        <Text>
                            Donde A y B representan las sustancias simples que
                            se combinan, y AB representa el compuesto
                            resultante. Un ejemplo clásico de una reacción de
                            síntesis es la formación de agua a partir de
                            hidrógeno y oxígeno:
                        </Text>
                        <Image
                            src='images/sint-ex.jpg'
                            className='self-center'
                        />
                    </div>
                </Article>
                <Article>
                    <SubTitle>Descomposición</SubTitle>
                    <div className='flex flex-col gap-8'>
                        <Text>
                            Una reacción de descomposición es un tipo de
                            reacción química en la cual una sustancia se
                            descompone en dos o más sustancias más simples. Las
                            reacciones de descomposición son el opuesto de las
                            reacciones de síntesis o combinación.
                        </Text>
                        <Text>
                            En una reacción de descomposición, la estructura
                            general de la reacción puede representarse de la
                            siguiente manera:
                        </Text>
                        <Text className='text-center text-5xl'>AB → A + B</Text>
                        <Text>
                            Un ejemplo de este tipo de rección podria ser el
                            agua oxigenada (H&#8322;O&#8322;) puede
                            descomponerse para formar agua (H&#8322;O) y oxígeno
                            (O&#8322;). La reacción química sería la siguiente:
                        </Text>
                    </div>
                </Article>
                <Article>
                    <SubTitle>Sustitución simple</SubTitle>
                    <div className='flex flex-col gap-8'>
                        <Text>
                            Una reacción de sustitución simple (también conocida
                            como reacción de desplazamiento simple) es un tipo
                            de reacción química en la que un elemento reacciona
                            con un compuesto y se desplaza o sustituye a otro
                            elemento en ese compuesto.
                        </Text>
                        <Text>
                            Un ejemplo de una reaccion de este tipo podria ser
                            el siguiente:
                        </Text>
                        <Text>
                            Imagina que se tiene una solución de sulfato de
                            cobre (CuSO&#8324;) y se añade zinc metálico (Zn) a
                            esta. En este caso, el zinc reaccionará con el
                            sulfato de cobre, desplazando al cobre y formando
                            sulfato de zinc (ZnSO&#8324;) y cobre metálico (Cu).
                        </Text>
                        <Text>
                            La reacción química se vería de la siguiente manera:
                        </Text>
                        <Text className='text-center text-5xl'>
                            Zn + CuSO&#8324; → ZnSO&#8324; + Cu
                        </Text>
                        <Text>
                            Un ejemplo de este tipo de rección podria ser el
                            agua oxigenada (H&#8322;O&#8322;) puede
                            descomponerse para formar agua (H&#8322;O) y oxígeno
                            (O&#8322;). La reacción química sería la siguiente:
                        </Text>
                    </div>
                </Article>
            </div>
        </>
    );
}
export default UnOrgTypes;
