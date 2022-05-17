import React, {useState} from "react";
import '../styles/meme.css';
import memesData from '../memesData.js';

function Meme() {

    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg");

    function memeClick() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <>
            <div className="d-flex justify-content-around pt-5 mt-5">
                <input type="text" class="form-control" id="topText" placeholder="Top text" />
                <input type="text" class="form-control" id="bottomText" placeholder="Bottom text" />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button onClick={memeClick} className="memebtn btn btn-primary w-50 fw-bold"><h4 className="d-inline">Get a new meme image</h4><i className="fa-solid fa-image ms-2 d-inline"></i></button>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <img src={memeImage} className="meme-img" alt="" />
            </div>
        </>
    )
}

export default Meme;