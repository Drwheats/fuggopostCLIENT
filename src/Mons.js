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
                <h3>Notes on pokemon abilities in the app: I removed any ability that I deemed useless because of low power (peck, swift, ember) or that takes 2 turns to execute or recharge (fly, dig, hyper beam) or that lowers an enemies stat with no further advantage (fake tears, growl) or that is just too situational and outclassed (retaliate, submission). Also removed moves like mirror type and like soak, even though they have some niche use. So if you want to do truly creative sets you should not be using this as any sort of reference, as these are only Smogon™ approved Pokemon Moves. Also, if you spam click the "get moves" button you will be banned from using the pokedex API, so try not to click it for no reason. </h3>
            </div>
            {/*<div className="dexHolder">*/}
            {/*    <img src={"bendex.png"}/>*/}
            {/*</div>*/}
        </div>

    )
}
