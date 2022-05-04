import '../styles/header.css';
import Troll from '../images/troll-face.png';

function Header() {
    return (
        <>
            <div className="header-body d-flex align-items-center">
                <img src={Troll} className="troll-img me-2" alt='' />
                <h1>Meme Generator</h1>
                <h4 className='ms-auto me-5'>React Course - Project 3</h4>
            </div>
        </>
    )
}

export default Header;