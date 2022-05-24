import React, {useState, useEffect} from "react";
import '../styles/meme.css';

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function memeClick() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="d-flex justify-content-around pt-5 mt-5">
                <input 
                    type="text" 
                    className="form-control" 
                    id="topText" 
                    placeholder="Top text" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="form-control" 
                    id="bottomText" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button onClick={memeClick} className="memebtn btn btn-primary w-50 fw-bold"><h4 className="d-inline">Get a new meme image</h4><i className="fa-solid fa-image ms-2 d-inline"></i></button>
            </div>
            <div className="d-flex justify-content-center pt-5 position-relative">
                <h1 className="top-text fw-bolder">{meme.topText}</h1>
                <img src={meme.randomImage} className="meme-img" alt="" />
                <h1 className="bottom-text fw-bolder">{meme.bottomText}</h1>
            </div>
        </>
    )
}

export default Meme;