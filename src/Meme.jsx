import {useState,useEffect} from "react"
export default function Meme({height}){
    const [inputData, setInputData] = useState({upperText: "",lowerText: ""})
    const [isShow, setIsShow] = useState(false)
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    }) 
    useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    function handleChange(event){
        setInputData(prevInputData => {
            const {name, value} = event.target
            return { 
                ...prevInputData,
                [name] : value
            } 
        })
    }
    function getRandomImage(){
        height()
        setIsShow(true)
        const randomNumber = Math.floor(Math.random()* allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
    }))
}
    return (
        <main>
        <section className="form">
            <div className="inputs">
            <input value={inputData.upperText} name="upperText" onChange={handleChange} placeholder="Top Text" className="form-input-1" type="text"></input>
            <input value={inputData.lowerText} name="lowerText" onChange={handleChange} placeholder="Bottom Text" className="form-input-2" type="text"></input>
            </div>
            <button  onClick={()=> (getRandomImage())} 
            className="form-btn" type="button">Get a new meme image</button>
        </section>
        <section className="meme-section"> 
           {isShow && <img className="meme-img" src={meme.randomImage} alt=""></img>}
           {isShow && <h1 className="upper-text" >{inputData.upperText}</h1>}
           {isShow && <h1 className="bottom-text">{inputData.lowerText}</h1>}
        </section>
        </main>
    )
}
