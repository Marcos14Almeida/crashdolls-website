import "./ListBands.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../../widgets/Checkbox"; // Import the Checkbox component

const ListBands = () => {

    const navigate  = useNavigate();

    const [bandsData, setBandsData] = useState([
        { checked: false, text: 'AXTY', image: 'https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2021/05/AXTY.jpg?resize=1170%2C658&ssl=1' },
        { checked: false, text: 'Avril Lavigne', image: 'https://i.scdn.co/image/ab6761610000e5eb581efa688945cbb092df1726' },
        { checked: false, text: 'Bad Luv', image: 'https://yt3.googleusercontent.com/tAXS3WBdoKj2-rtA9u8lyjd7yHvfu-miRlkc2Whd4vJiHqv-9B1EbRBFkff7JDcm3xX39ecR=s900-c-k-c0x00ffffff-no-rj' },
        { checked: false, text: 'Bring Me The Horizon', image: 'https://rocknbold.com/wp-content/uploads/2020/04/jota-benfica-1552826759-21157.jpg' },
        { checked: false, text: 'Ego Kill Talent', image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/08/ego-kill-talent-logotipo.jpg' },
        { checked: false, text: 'Far From Alaska', image: 'https://s2-g1.glbimg.com/LBeappNSyNyt9VXutx7-4eTpRl0=/0x58:960x640/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/a/B/wyuh2TTKqspBpR5k1P5Q/30725602-1683828885036200-8385136628938845443-n.jpg' },
        { checked: false, text: 'Odeon', image: 'https://i0.wp.com/guitarload.com.br/wp-content/uploads/2021/08/dream-odeon.jpg?resize=800%2C800&ssl=1' },
        { checked: false, text: 'Mayra', image: 'https://yt3.googleusercontent.com/nEREOmMWt0vaja43ynhuRiAMnw7YFyUwM6mvX-D2pE65XPfI03ER5ayXrlb4_0gZRV-nnBSC=s900-c-k-c0x00ffffff-no-rj' },
        { checked: false, text: 'Molho Negro', image: 'https://rollingstone.uol.com.br/media/_versions/lolla2019_molhonegro_milamaluhy_019_widelg.jpg' },
        { checked: false, text: 'Paramore', image: 'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2017/06/paramore.jpg',  },
        { checked: false, text: 'Pierce The Veil', image: 'https://www.radiorock.com.br/wp-content/uploads/2023/02/Pierce-the-Veil.jpg' },
        { checked: false, text: 'While She Sleeps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhop-tCbd2nkiCicHt-WJ0pfb2DG4Cu03vmiV_05khrkjezJqL7AEZ-uvOfTIxIkxvkc&usqp=CAU' },
        { checked: false, text: 'Zander', image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2023/04/zander-formacao-2023.jpg' },
        { checked: false, text: '1', image: '1' },
        // Add data for the remaining 8 bands
    ]);

    const handleCheckboxChange = (index) => {
        const updatedBandsData = [...bandsData];
        updatedBandsData[index] = {
            ...updatedBandsData[index],
            checked: !updatedBandsData[index].checked,
        };
        setBandsData(updatedBandsData);
    };

    const handleNextButtonClick = () => {
        // Pass the selected bands as state to the next page
        navigate("/SelectedBands", {
            state: { selectedBands: bandsData.filter((band) => band.checked) },
        });
    };


        return (
            <div className="end-register-container">

            <div className="top-bar">
                <Link to="/MainMenu">
                <i className="material-icons" style={{ fontSize: '24px', color: 'black' }}>arrow_back</i>
                </Link>
                <div className="top-bar-title">List of Bands</div>
                
                <i className="material-icons" onClick={handleNextButtonClick} style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>bookmark_border</i>

            </div>
        
            {bandsData.map((band, index) => (
                <div className={`bands-list`} key={index}>
                <img className="image" alt="Image" src={band.image} />
                <div className="band-name">{band.text}</div>
                <Checkbox
                    checked={band.checked}
                    onChange={() => handleCheckboxChange(index)}
                />
                </div>
            ))}
            </div>
        );
        };

export default ListBands;
