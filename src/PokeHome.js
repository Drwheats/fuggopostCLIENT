import Coach from "./Coach";
import Pokemon from "./Pokemon";

export default function PokeHome({coaches, expanded, dex, week}) {
    week -=1;
    let noRepeats = [];
    coaches = coaches.sort((a, b) => {
        if (a.winLoss[0] > b.winLoss[0]) return -1;
        else if (a.winLoss[0] < b.winLoss[0]) return 1;
        if (a.winLoss[2] < b.winLoss[2]) return -1;
        else if (a.winLoss[2] > b.winLoss[2]) return 1;
        let diffA = a.winLoss.split('(')[1];
        diffA = diffA.slice(0, diffA.length - 1)
        diffA = diffA.substring(1);
        diffA = Number(diffA)
        let diffB = b.winLoss.split('(')[1];
        diffB = diffB[1].slice(0, diffB.length - 1)
        diffB = Number(diffB)

        if (diffA > diffB) {
            return -1;
        }
        else return 1;
    })

    dex = dex.sort((a,b) => {
        if (a.kills > b.kills) {return -1;}
        else if (a.kills < b.kills) {return 1;}
        if (a.gamesWon > b.gamesWon) {return -1;}
        else if (a.gamesWon < b.gamesWon) {return 1;}
        if (a.deaths > b.deaths) {return 1;}
        else if (a.deaths < b.deaths) {return -1;}


    })

    console.log(coaches[1].matchups[week].Opponent)
    return (
        <div className="monHomePage">
            <h1 className="monPageHeader">Coach Leaderboard:</h1>
            <div className={expanded ? "realCoachHolderBig" : "realCoachHolder"} id="none">
                {
                    coaches.slice(0,4).map(s => {
                        return <Coach key={s.coachNum} coachNum={s.coachNum} coachName={s.coachName} winLoss={s.winLoss}
                                      teamName={s.teamName} expanded={expanded} mons={s.mons}
                                      leagueRank={coaches.indexOf(s)}
                        />
                    })
                }
            </div>
            <h1 className="monPageHeader">Mons Leaderboard:</h1>
            <div>
            {

                dex.slice(0,10).map(s => {
                     return s.owner !== "" ? <Pokemon key={s.smogonName} owned={s.owner !== ""} mon={s}/> :
                    <p></p>

                })
            }
            </div>
            <h1 className="monPageHeader"> Week {week} Matchups :</h1>
            <div>
                {
                    coaches.map(s => {
                        noRepeats.push(s.matchups[week].Opponent)
                        console.log(noRepeats)
                        return !noRepeats.includes(s.teamName) ? <div> <a href={"/mons/coach/" + s.coachNum}> <h3 className="monPageHeader">{s["teamName"]} VS {s.matchups[week].Opponent}</h3></a> </div>
                            : <div></div>

                    })

                }
            </div>
        </div>
    )
}