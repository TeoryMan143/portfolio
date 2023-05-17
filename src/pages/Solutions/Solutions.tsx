import Article from '../../components/Article';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';
import Title from '../../components/Title';

function Solutions() {
    return (
        <>
            <Title>Tipos de soluciones</Title>
            <div className='flex flex-col gap-10'>
                <Article>
                    <SubTitle>Soluciones insaturadas</SubTitle>
                    <Text>
                        Estas son las soluciones en las que la cantidad de
                        soluto disuelto es menor a la que podría ser disuelta en
                        un volumen dado de solvente a una temperatura
                        específica. En otras palabras, si se añade más soluto a
                        una solución insaturada, este se disolverá.
                    </Text>
                </Article>
                <Article>
                    <SubTitle>Soluciones saturadas</SubTitle>
                    <Text>
                        En estas soluciones, la cantidad de soluto disuelto es
                        la máxima posible a una temperatura dada. Esto significa
                        que el solvente ha disuelto todo el soluto que puede, y
                        si se añade más soluto, no se disolverá, sino que se
                        quedará en el fondo del recipiente.
                    </Text>
                </Article>
                <Article>
                    <SubTitle>Soluciones sobresaturadas</SubTitle>
                    <Text>
                        Son soluciones que contienen más soluto del que
                        normalmente sería capaz de disolver a una temperatura
                        dada. Se logran calentando una solución saturada y
                        añadiendo más soluto, y luego enfriándola lentamente. Si
                        se añade incluso una pequeña cantidad de soluto o si se
                        agita la solución, el exceso de soluto puede
                        precipitarse de la solución.
                    </Text>
                </Article>
            </div>
        </>
    );
}
export default Solutions;
