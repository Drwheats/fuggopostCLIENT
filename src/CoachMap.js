import Coach from "./Coach";
import {elGR} from "@mui/material/locale";


export default function CoachMap({coaches, visible}) {

    coaches = coaches.sort((a, b) => {
       if (a.winLoss[0] > b.winLoss[0]) return -1;
        else if (a.winLoss[0] < b.winLoss[0]) return 1;
       if (a.winLoss[2] > b.winLoss[2]) return -1;
        else if (a.winLoss[2] < b.winLoss[2]) return 1;
       let diffA = a.winLoss.split('(')[1];
        diffA = diffA.slice(0, diffA.length - 1)
        diffA = diffA.substring(1);
        diffA = Number(diffA)
        let diffB = b.winLoss.split('(')[1];
        diffB = diffB[1].slice(0, diffB.length - 1)
        diffB = Number(diffB)

        console.log(diffA + " VS " + diffB);

        if (diffA > diffB) {
            return -1;
        }
        else return 1;
    })


    console.log(visible)
    return (
        <div className="realCoachHolder" id="none">
            {visible ?
                coaches.map(s => {
                    return <Coach key={s.coachNum} coachNum={s.coachNum} coachName={s.coachName} winLoss={s.winLoss}
                                  teamName={s.teamName} mons={s.mons}
                    />
                })
 : <div></div>}
        </div>

    )
}