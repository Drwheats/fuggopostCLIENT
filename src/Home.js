
export default function Home() {
    return (
        <div>

            <div className="content">
                <h1>Welcome to Ben dot Place!</h1>
                <h2>Select a board and post away!</h2>
                <a href="/b"><img alt="imageboard" className="board" src={"board.png"}/></a>
                <br/>
                <a href="/Mons"><img alt="pokemonleague" src={"mons.png"}/></a>
            </div>
        </div>

    )
}