import {useState} from "react"
import Header from "./Header"
import Meme from "./Meme"
export default function App() {
  const [height, setHeight] = useState("15rem")
  function showDiv(){
    setHeight("55rem")
  }
  return (
    <div style={{height: height}} className="container">
        <Header />
        <Meme height={showDiv} />
    </div>
  )
}


