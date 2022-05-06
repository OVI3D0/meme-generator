import React from "react";
import '../styles/meme.css';
import memesData from '../memesData.js';

function Meme() {
    function memeClick() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(url);
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
        </>
    )
}

export default Meme;