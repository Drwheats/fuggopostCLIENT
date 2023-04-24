import HighScores from "./HighScores";

export default function Home() {
    return (
        <div>

            <div className="content">
                <h1>Welcome to Ben dot Place!</h1>
                <h2>Select a board and post away!</h2>
                <a href="/b"><img className="board" src={"board.png"}/></a>
                <br/>
                <a href="/Mons"><img src={"mons.png"}/></a>
            </div>
        </div>

    )
}