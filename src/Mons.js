import {useEffect, useState} from "react";
import CoachMap from "./CoachMap";

export default function Mons() {
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [week, setWeek] = useState(0);

    useEffect(() => {
        if (leData) {
            const scoreJSON = {
                method: 'post',
                headers: {
                    "access-control-allow-origin": "*",
                    'Content-Type': 'application/json'
                },
            }
            fetch("https://fuggo.lol:4000/coaches", scoreJSON)
                .then(res => res.json())
                .then(
                    (result) => {
                        setAllCoaches(result);
                        setLeData(false);
                    }
                )
        }

    }, [leData, allCoaches])



    return (
        <div className="monPage">
            <h1>Week {week}</h1>

            <div className="coachHolder">
                <img src={"coaches.png"}></img>

                <CoachMap coaches={allCoaches}/>
                <img src="/squamogus.png" /> <h5>Copyright ©2023 ben dot place </h5>
            </div>
            <div className="tierHolder">
                <img src={"tierlist.png"}/>
                <h1>Coming soon to a smogon near you ...</h1>
            </div>
            {/*<div className="dexHolder">*/}
            {/*    <img src={"bendex.png"}/>*/}
            {/*</div>*/}
        </div>

    )
}
