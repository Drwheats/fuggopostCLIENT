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
                <img alt="coaches" src={"coaches.png"}></img>

                <CoachMap coaches={allCoaches}/>
                <img alt="amogus imageboard mascott" src="/squamogus.png" /> <h5>Copyright ©2023 ben dot place </h5>
            </div>
            <div className="tierHolder">
                <img alt="tier list" src={"tierlist.png"}/>
                <h1>Coming soon to a smogon near you ...</h1>
                <h3>Moves : I removed any move that I thought was useless. So "reflect type" and "rock throw" will not show up in the list of moves. Click "Get moves" twice if it doesn't load the first time.</h3>
            </div>
            {/*<div className="dexHolder">*/}
            {/*    <img src={"bendex.png"}/>*/}
            {/*</div>*/}
        </div>

    )
}
