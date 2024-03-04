import Coach from "./Coach";
import {elGR} from "@mui/material/locale";


export default function CoachMap({coaches, expanded}) {

    return (
        <div className={expanded ? "realCoachHolderBig" : "realCoachHolder"} id="none">
            {
                coaches.map(s => {
                    return <Coach key={s.coachNum} coachNum={s.coachNum} coachName={s.coachName} winLoss={s.winLoss}
                                  teamName={s.teamName} expanded={expanded} mons={s.mons} leagueRank={coaches.indexOf(s)}
                    />
                })
}
        </div>

    )
}