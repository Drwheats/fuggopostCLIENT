import Coach from "./Coach";


export default function CoachMap({coaches, visible}) {

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