import {CgTrash} from "react-icons/cg";
import {FiMinusSquare, FiPlusSquare, FiXSquare} from "react-icons/fi";
import theScream from './public/theScream.png'
import {useState} from "react";
import {useEffect} from "react";

export default function Post({
                                 postName,
                                 postTopic,
                                 postBody,
                                 postNumber,
                                 postVisibility,
                                 postNumberReplies,
                                 timePosted,
                                 replies,
                                 children,
                                 zIndexProps,
                                 createModalIsOpen,
                                 setCreateModalIsOpen

                             }) {
    const [fullRes, setFullRes] = useState();

    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [styles, setStyles] = useState({});

    const dragStart = (e) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setIsDragging(true);
    };
    const dragging = (e) => {
        if (isDragging) {
            var left = e.screenX - diffX;
            var top = e.screenY - diffY;
            setStyles({
                left: left,
                top: top
            });
        }
    };
    const dragEnd = (e) => {
        setIsDragging(false);
    };

    function formatDate() {
        let currentTime = new Date(timePosted)
        timePosted = String(currentTime)
        timePosted = timePosted.split(' ').slice(0, 5).join(' ')
    }

    function deletePost() {

        let json_body = JSON.stringify(
            {postName: postBody, postNumber: postNumber, isReply: false})
        const scoreJSON = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: json_body
        }

        console.log(scoreJSON)
        fetch("https://fuggo.lol:4000/delete", scoreJSON)
            .then(response => response.json());
        document.getElementById("reply" + postNumber).style.display = "none";
    }

    function hidePost() {
        let plusSign = document.createElement('span')
        plusSign.innerHTML = "+";
        plusSign.id = "plusSign" + document.getElementById("entirePost" + postNumber);
        plusSign.postNumber = document.getElementById("entirePost" + postNumber);
        plusSign.setAttribute("onClick", "this.postNumber.style.display = 'block'; this.style.display = 'none'");
        plusSign.className = "plusGuy"
        document.getElementById("entirePost" + postNumber).style.display = "none";
        // document.getElementById("reply"+postNumber).parentElement.append(plusSign)
        document.getElementById("entirePost" + postNumber).parentNode.insertBefore(plusSign, document.getElementById("entirePost" + postNumber).nextSibling);
    }

    function trimReplies() {
        let random = replies.sort(() => .5 - Math.random()).slice(0, 3)
        return random;
    }

    function showFullRes() {
        if (!fullRes) {

            document.getElementById("reply" + postNumber).style.maxWidth = "100%"
            document.getElementById("reply" + postNumber).style.maxHeight = "100%"
            document.getElementById("postImage" + postNumber).style.maxHeight = "100%"
            document.getElementById("postImage" + postNumber).style.maxWidth = "100%"

            setFullRes(true);
        } else {
            document.getElementById("reply" + postNumber).style.maxWidth = "500px"
            document.getElementById("reply" + postNumber).style.maxHeight = "400px"
            document.getElementById("postImage" + postNumber).style.maxHeight = "100px"
            document.getElementById("postImage" + postNumber).style.maxWidth = "100px"


            setFullRes(false)
        }
    }

    formatDate();
    return (
    <div className="theEntirePost" id={"entirePost"+postNumber}><div className="postHolder" id={"reply" + postNumber}>
            <h5 className="postHeader"> #{postNumber} {postName} <span className="trashHolder">{timePosted} </span>
                <span className="minusIconHolder"><FiMinusSquare size={16} onClick={hidePost}/></span> <span
                    className="plusIconHolder"><FiPlusSquare onClick={showFullRes} size={16}/> </span> <span
                    className="xIconHolder"><FiXSquare size={16} onClick={deletePost}/>  </span></h5>

            <span className="postTopic" id={"reply" + postNumber} href={"/post/" + postNumber}><a
                href={"/post/" + postNumber}>{postTopic} </a>
            </span>
            {/*<div href={"/post/" + postNumber}>*/}
            <br/>
            <br/>
            <br/>

            <div className="postBody">
                    <img alt="" onClick={showFullRes}
                         id={"postImage" + postNumber} className="postImage"
                         src={"https://fuggo.lol:4000/fuggosimageworld/" + postNumber + ".png"}/>
                    <a href={"/post/" + postNumber} className="postText">{postBody}</a>

                </div>



            <a href={"/post/" + postNumber} className="postFooter"
            ><h5 className="replies">{postNumberReplies} replies <span className="replyNow">View Thread</span></h5></a>
        </div>
    <div className="floatingReplies">{

        trimReplies().map((r) => {
            return <a className="floatingReply"
                      href={"/post/" + postNumber + "#reply" + r.postNumber}>{
                <img alt="" onClick={showFullRes} className="enemyPostImage" id={"enemyPostImage" + r.postNumber}
                src={"https://fuggo.lol:4000/fuggosimageworld/" + r.postNumber + ".png"}/>
            }{r.replyName + ": " + r.replyBody + " "}</a>
        })
    }
    </div>     </div>
    )
}