interface Props {
    src: string;
    className?: string;
}

function Image({ src, className }: Props) {
    return (
        <img
            src={src}
            className={`w-[min(100%,42rem)] object-contain ${className}`}
        />
    );
}

export default Image;
