export default function ThreeImagesBack({ img1, img2, img3, borderColor='white', children }) {
    const images = [
        `url(${img1})`,
        `url(${img2})`,
        `url(${img3})`,
    ];

    return (
        <div
            style={{
                display: "flex",
                height: "400px",
                position: "relative", // nécessaire pour les Clouds en absolute
                overflow: "hidden"
            }}
        >
            {images.map((bg, i) => (
                <div
                    key={i}
                    style={{
                        flex: 1,
                        backgroundImage: bg,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: `2px solid ${borderColor}`
                    }}
                />
            ))}
            {children} {/* les Clouds seront rendus ici */}
        </div>
    );
}
