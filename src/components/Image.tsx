interface Props {
    src: string;
}

function Image({ src }: Props) {
    return <img src={src} className='w-[min(100%,42rem)] object-contain' />;
}

export default Image;
