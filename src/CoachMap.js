import Coach from "./Coach";


export default function CoachMap({coaches}) {
    return (
        <div className="cards" id="cards">
            {coaches.map(s => {
                    return <Coach key={s.coachNum} coachNum={s.coachNum} coachName={s.coachName} winLoss={s.winLoss} teamName={s.teamName} mons={s.mons}
                                 />
            })}
        </div>

    )
}