import React from 'react'
import gif1 from '../assets/gif1.gif'
import gif2 from '../assets/gif2.gif'

const Home = () => {

    const copyLink = (id) => {
        console.log(id)
        navigator.clipboard.writeText(`http://127.0.0.1:5173/share/${id}`)
    }

    const copyGif = (id) => {
        var imageElem = document.getElementById(id);
        console.log(imageElem);
        var range = document.createRange();
        range.selectNode(imageElem);
        window.getSelection().addRange(range);
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy image command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();
    }

    return (
        <div className='App'>
            <div className='Button-Wrapper'>
                <img id="1" src={gif1} alt="" />
                <button onClick={() => copyGif("1")} >Copy Linked GIF</button>
                <button onClick={() => copyLink("1")} >Copy Link</button>
            </div>
            <div className='Button-Wrapper'>
                <img id="2" src={gif2} alt="" />
                <button onClick={() => copyGif("2")} >Copy Linked GIF</button>
                <button onClick={() => copyLink("2")} >Copy Link</button>
            </div>
        </div>
    )
}

export default Home