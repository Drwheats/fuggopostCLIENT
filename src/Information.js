import NavBar from "./NavBar";

export default function Information() {
    return (
        <div className="content">
            <NavBar/>
            <div className="marginParagraphAbout">

            <img src="/bendotplace.png"/>
            <h1>ABOUT</h1>
            <p>ben dot place slash b is an imageboard written in react. It is meant to mimic 4chan.</p>
            <p>All posts are the legal property of their respective poster, and I, Ben, take no ownership of them</p>
            <p>All media, rap lyrics, and any combination of 0s and 1s are posted here under fair use</p>
            <p>Assume that your IP is being collected and uploaded to every 3-letter agency before you post</p>
            <p>Have fun and be yourself!</p>
            <p>@postnumber to reply to somebody, use the > key to greentext. newline exits greentext.</p>
            <p>The character limit of posts is 3000.</p>

        </div>
        </div>
    )
}