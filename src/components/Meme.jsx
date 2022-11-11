import { useState, useEffect } from "react";

function Meme() {
  const [allMemes, setAllMemes] = useState([])
    
  useEffect( () =>{
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));        
  },[])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  });


  function getRandomImage() {
    let randomNumber = allMemes[Math.floor(Math.random() * allMemes.length)];
    let url= randomNumber.url;
    
    setMeme(
       {
          topText: "",
          bottomText: "",
          randomImage: url
       }
      )  
  }

  function handleChange(event){
    const {name, value} = event.target

     setMeme(prevValue => ({
            ...prevValue,
            [name] : value

     }))
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          placeholder="top line"
          name="topText"
          value={meme.topText}
          onChange={handleChange}

        />
        <input 
          type="text" 
          placeholder="bottom line" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}

        />
        <button onClick={getRandomImage}>Get a new meme image</button>
      </div>
      <div className="meme">      
        <img src={meme.randomImage} className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  );
}

export default Meme;
