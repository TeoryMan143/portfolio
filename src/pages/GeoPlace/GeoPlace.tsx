import Article from '../../components/Article';
import Image from '../../components/Image';
import Title from '../../components/Title';

function GeoPlace() {
    return (
        <>
            <Title>Lugar Geometrico</Title>
            <Article>
                <div className='flex gap-9'>
                    <Image src='images/geo-1.jpg' />
                    <Image src='images/geo-2.jpg' />
                </div>
            </Article>
        </>
    );
}
export default GeoPlace;
