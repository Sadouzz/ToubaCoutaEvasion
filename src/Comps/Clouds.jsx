import clouds from '../assets/clouds_top.png';

export default function Clouds({ rotate = '0deg', pos = 'top' }) {
    return (
        <div
            style={{
                backgroundImage: `url(${clouds})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'repeat-x',
                height: '40px',
                width: '100%',
                position: 'absolute',
                [pos]: 0, // position dynamique : top ou bottom
                left: 0,
                zIndex: 4,
                transform: `rotate(${rotate})`,
            }}
        />
    );
}
