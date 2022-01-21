import { useState } from 'react';
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
const Share = () => {
    const [timeline, settimeline] = useState();

    return (
        <div className='shareWrapper'>
            <div className="shareTop"> <img src="../../images/ABT408072DE518F374D8F713A352C18C1661AD0FC6DA2ED7C2F9FCED5B35AA4CEF4.jpg" alt="" />
                <input type="text" name='timeline' value={ timeline }
                    onChange={ (e) => {
                        settimeline(e.target.value);
                    } }
                    placeholder="Whats on your mind?" /></div>
            <hr className='hr' />
            <div className="shareBottom">
                <ul>
                    <li>
                        <PermMedia htmlColor='red'></PermMedia><span>Photos or Videos</span>
                    </li>
                    <li>
                        <Label htmlColor='blue'></Label><span>Tag</span>
                    </li>
                    <li>
                        <Room htmlColor='green'></Room><span>Location</span>
                    </li>
                    <li>
                        <EmojiEmotions htmlColor='goldenrod'></EmojiEmotions><span>Feelings</span>
                    </li>
                </ul>
                <button className="btn1">Share</button>
            </div>
        </div>
    );
};

export default Share;
