import troll from '../assets/troll-face.png'

function Header() {

  return (
    <header className="header">
        <img src={troll} />
        <h2>Meme generator</h2>
        <h3>React Course - Project 3</h3>
    </header>
  )
}

export default Header
