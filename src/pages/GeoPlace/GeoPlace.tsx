import Article from '../../components/Article';
import Image from '../../components/Image';
import Title from '../../components/Title';

function GeoPlace() {
    return (
        <>
            <Title>Lugar Geometrico</Title>
            <Article>
                <div className='flex gap-9'>
                    <Image src='src/pages/GeoPlace/assets/geo-1.jpg' />
                    <Image src='src/pages/GeoPlace/assets/geo-2.jpg' />
                </div>
            </Article>
        </>
    );
}
export default GeoPlace;
