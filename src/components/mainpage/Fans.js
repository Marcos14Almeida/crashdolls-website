import './Fans.css';
import fansSVG from '../../assets/vector-fans.svg';
import vectorFrameBorderSVG from '../../assets/vector-frame-border.svg';
import fansImage from '../../assets/fans.png';

const items = [
    {
        id: 1,
        image: fansImage, // Replace with your image URL
        text: 'Diana',
    },
    {
        id: 2,
        image: fansImage, // Replace with your image URL
        text: 'Isabella',
    },
    {
        id: 3,
        image: fansImage, // Replace with your image URL
        text: 'Larissa',
    },
    {
        id: 4,
        image: fansImage, // Replace with your image URL
        text: 'Charles Santos',
    },
    {
        id: 5,
        image: fansImage, // Replace with your image URL
        text: 'Gabriela',
    },
    // Add more items as needed
];

const Fans = () => {
return (
    <div className="fans-section">

        <div className="title-section">
            <h1 className="pink-title">Fans</h1>
            <img src={fansSVG} className="titleSVG" />
        </div>
        <h1 className="pink-title">* Aqui pode ter vídeos que os fans fizeram nos nossos shows</h1>

        <div className="horizontal-list-page">
            {items.map((item) => (
                <div className="picture-container">
                    <div
                        className="svg-container"
                        key={item.id}
                        style={{
                            background: `url(${vectorFrameBorderSVG}) no-repeat center center`,
                            backgroundSize: 'cover',
                        }}
                    >
                    <div className="image-fan">
                        <img src={item.image} alt={item.text} />
                    </div>

                    <p className="text-fan">{item.text}</p>
                    </div>
                </div>
        ))}
        </div>

    </div>
    );
};

export default Fans;