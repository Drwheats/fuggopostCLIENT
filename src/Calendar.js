import {useEffect, useState} from "react";
import {
    QueryClient, QueryClientProvider, useMutation, useQuery
} from "react";
// I started writing this in vanilla JS for a WP website, its pretty fucked and half of it is not done the react way at all.

export default function Calendar() {

    const [events, setEvents] = useState(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []);

    const [isHotDocsHidden, setIsHotDocsHidden] = useState(false);
    const [isFrontHidden, setIsFrontHidden] = useState(false);
    const [isCarltonHidden, setIsCarltonHidden] = useState(false);
    const [isTiffHidden, setIsTiffHidden] = useState(false);
    const [isParadiseHidden, setIsParadiseHidden] = useState(false);
    const [isRevueHidden, setIsRevueHidden] = useState(false);
    const [dataNotReceived, setDataNotReceived] = useState(true);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // fetch movies from remote
    async function fetchMovies() {
        if (window.localStorage.getItem("events") === null || window.localStorage.getItem("events") === undefined || events === [] ) {
        fetch('https://api.fuggo.lol/hellofuggomayihaveyourtheatrespliasixd')
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('events', JSON.stringify(json));
            }).then(setEvents(localStorage.getItem("events"))).catch(e => console.log(e))

    }}



    // render calendar
    useEffect( () => {
        if (window.localStorage.getItem("events") === null || window.localStorage.getItem("events") === undefined || events === [] ) {
           let le = fetchMovies();
        }
        else {
            console.log("getting calendar: our events are " + events)
                const calendar = document.querySelector("#calendar");
                const monthBanner = document.querySelector("#month");
                let navigation = 0;
                let clicked = null;
                const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const modal = document.querySelector("#modal");
                const viewEventForm = document.querySelector("#viewEvent");
                const addEventForm = document.querySelector("#addEvent");
                function formatTime(timeString) {
                    const [hourString, minute] = timeString.split(":");
                    const hour = +hourString % 24;
                    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
                }

                const btnBack = document.querySelector("#btnBack");
                const btnNext = document.querySelector("#btnNext");
                const btnDelete = document.querySelector("#btnDelete");
                const btnSave = document.querySelector("#btnSave");
                const closeButtons = document.querySelectorAll(".btnClose");
                const txtTitle = document.querySelector("#txtTitle");
                const loadCalendar = () => {
                    const dt = new Date();
                    if (navigation !== 0) {
                        dt.setMonth(new Date().getMonth() + navigation);
                    }
                    const day = dt.getDate();
                    const month = dt.getMonth();
                    const year = dt.getFullYear();
                    monthBanner.innerText = `${dt.toLocaleDateString("en-us", {
                        month: "long",
                    })} ${year}`;
                    // calendar.innerHTML = "";
                    const dayInMonth = new Date(year, month + 1, 0).getDate();
                    const firstDayofMonth = new Date(year, month, 1);
                    const dateText = firstDayofMonth.toLocaleDateString("en-us", {
                        weekday: "long",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                    });

                    const dayString = dateText.split(", ")[0];
                    const emptyDays = weekdays.indexOf(dayString);

                    for (let i = 1; i <= dayInMonth + emptyDays; i++) {
                        const dayBox = document.createElement("div");
                        dayBox.classList.add("day");
                        const monthVal = month + 1 < 10 ? "0" + (month + 1) : month + 1;
                        const dateVal = i - emptyDays < 10 ? "0" + (i - emptyDays) : i - emptyDays;
                        const dateText = `${year}-${monthVal}-${dateVal}`;
                        if (i > emptyDays) {
                            dayBox.innerText = i - emptyDays;
                            const eventOfTheDay = [];
                            for (let i = 0; i < events.length; i++) {
                                try {
                                    events[i].forEach(event1 => {
                                        if (event1.Date === dateText) {
                                            eventOfTheDay.push(event1);
                                        }
                                    })
                                }
                                catch (e) {
                                    console.log(e)
                                }

                            }

                            eventOfTheDay.sort(function (a, b) {
                                return new Date('1/1/1999 ' + a.Time) > new Date('1/1/1999 ' + b.Time)
                            });

                            if (i - emptyDays === day && navigation === 0) {
                                dayBox.id = "currentDay";
                            }

                            if (eventOfTheDay) {
                                let noRerunsList = [];
                                let notaRerun = true;
                                eventOfTheDay.forEach(event2 => {
                                    noRerunsList.forEach(element => {
                                        if (element.Title === event2.Title && element.Time === event2.Time && element.Date === event2.Date && element.Location === event2.Location) {
                                            notaRerun = false;
                                        }
                                    });
                                    if (notaRerun) {
                                        const eventDiv = document.createElement("div");
                                        eventDiv.classList.add("event");

                                        if (event2.Location === "Hot Docs") {
                                            eventDiv.classList.add("event-HotDocs");
                                        }

                                        if (event2.Location === "TIFF LightBox") {
                                            eventDiv.classList.add("event-TIFF");
                                        }

                                        if (event2.Location === "The Revue") {
                                            eventDiv.classList.add("event-Revue");
                                        }

                                        if (event2.Location === "Paradise Theatre") {
                                            eventDiv.classList.add("event-Paradise");
                                        }

                                        if (event2.Location === "Imagine Cinemas : Carlton") {
                                            eventDiv.classList.add("event-Carlton");
                                        }

                                        if (event2.Location === "Imagine Cinemas : Front") {
                                            eventDiv.classList.add("event-Front");
                                        }

                                        let realTime = formatTime(event2.Time);
                                        realTime = realTime.replace("PMAM", "PM")
                                        eventDiv.innerText = realTime + " - " + event2.Title;
                                        dayBox.appendChild(eventDiv);
                                        eventDiv.addEventListener("click", () => {
                                            showModal(event2.Title, event2.Time, event2.Location, event2.URL, event2.Date);
                                        });
                                    }
                                    noRerunsList.push(event2);
                                    notaRerun = true;
                                });
                            }
                        } else {
                            dayBox.classList.add("plain");
                        }
                        calendar.append(dayBox);
                    }

                }

                btnBack.addEventListener("click", () => {
                    navigation--;
                    clearOldCalendar();
                    loadCalendar();
                });
                btnNext.addEventListener("click", () => {
                    navigation++;
                    clearOldCalendar();
                    loadCalendar();
                });
                modal.addEventListener("click", closeModal);
                closeButtons.forEach((btn) => {
                    btn.addEventListener("click", closeModal);
                });

                btnSave.addEventListener("click", function () {
                    if (txtTitle.value) {
                        txtTitle.classList.remove("error");
                        events.push({
                            date: clicked,
                            title: txtTitle.value.trim(),
                        });
                        txtTitle.value = "";
                        localStorage.setItem("events", JSON.stringify(events));
                        closeModal();
                    } else {
                        txtTitle.classList.add("error");
                    }
                });

                function showModal(eventTitle, eventTime, eventLocation, eventURL, eventDate) {
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    console.log("modal is here : " + eventTitle)
                    document.querySelector("#eventLocation").innerText = eventLocation;
                    document.querySelector("#eventTitle").innerText = eventTitle;
                    document.querySelector("#eventTime").innerText = eventTime;
                    document.querySelector("#eventDate").innerText = eventDate;

                    // const functionAddGoToButton = () => {
                    //     window.open(eventOfTheDay.URL);
                    //     btnDelete.removeEventListener("click", functionAddGoToButton);
                    closeModal();
                    // }
                    // document.querySelector("#eventHeader").innerText = eventLocation;
                    // btnDelete.removeEventListener("click", functionAddGoToButton);
                    // btnDelete.addEventListener("click", functionAddGoToButton);
                    viewEventForm.style.display = "block";
                    addEventForm.style.display = "block";
                    modal.style.display = "block";
                }

                //Close Modal
                function closeModal() {
                    btnDelete.replaceWith(btnDelete.cloneNode(true));
                    viewEventForm.style.display = "none";
                    addEventForm.style.display = "none";
                    modal.style.display = "none";
                    clicked = null;
                }
                function clearOldCalendar() {
                    let olddivs = document.getElementsByClassName('day');
                    while(olddivs[0]) {
                        olddivs[0].parentNode.removeChild(olddivs[0]);
                    }
                }
                clearOldCalendar();
                loadCalendar();

            }
        try {
        }
        catch (e) {
                console.log(e)
        }
        }
        ,
        [fetchMovies, events])

    //filters
    useEffect(() => {
        if (isHotDocsHidden) {
            let hotDocs = document.getElementsByClassName('event-HotDocs');
            for(let i = 0; i < hotDocs.length; i++) {
                hotDocs[i].style.display = "none";
            }
        }
        if (!isHotDocsHidden) {
            let hotDocs = document.getElementsByClassName('event-HotDocs');
            for(let i = 0; i < hotDocs.length; i++) {
                hotDocs[i].style.display = "block";
            }
        }
        if (isTiffHidden) {
            let tem = document.getElementsByClassName('event-TIFF');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "none";
            }
        }
        if (!isTiffHidden) {
            let tem = document.getElementsByClassName('event-TIFF');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "block";
            }
        }
        if (isFrontHidden) {
            let tem = document.getElementsByClassName('event-Front');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "none";
            }
        }
        if (!isFrontHidden) {
            let tem = document.getElementsByClassName('event-Front');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "block";
            }
        }
        if (isCarltonHidden) {
            let tem = document.getElementsByClassName('event-Carlton');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "none";
            }
        }
        if (!isCarltonHidden) {
            let tem = document.getElementsByClassName('event-Carlton');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "block";
            }
        }
        if (isParadiseHidden) {
            let tem = document.getElementsByClassName('event-Paradise');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "none";
            }
        }
        if (!isParadiseHidden) {
            let tem = document.getElementsByClassName('event-Paradise');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "block";
            }
        }
        if (isRevueHidden) {
            let tem = document.getElementsByClassName('event-Revue');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "none";
            }
        }
        if (!isRevueHidden) {
            let tem = document.getElementsByClassName('event-Revue');
            for(let i = 0; i < tem.length; i++) {
                tem[i].style.display = "block";
            }
        }
    }, [isHotDocsHidden, isFrontHidden, isCarltonHidden, isTiffHidden, isParadiseHidden, isRevueHidden] )
    function hideOrShowRevue() {
        if (isRevueHidden) {
            setIsRevueHidden(false);
        }
        else setIsRevueHidden(true);
    }
    function hideOrShowParadise() {
        if (isParadiseHidden) {
            setIsParadiseHidden(false);
        }
        else setIsParadiseHidden(true);
    }
    function hideOrShowHotDocs() {
        if (isHotDocsHidden) {
            setIsHotDocsHidden(false);
        }
        else setIsHotDocsHidden(true);
    }
    function hideOrShowTiff() {
        if (isTiffHidden) {
            setIsTiffHidden(false);
        }
        else setIsTiffHidden(true);
    }
    function hideOrShowFrontSt() {
        if (isFrontHidden) {
            setIsFrontHidden(false);
        }
        else setIsFrontHidden(true);
    }
    function hideOrShowCarlton() {
        if (isCarltonHidden) {
            setIsCarltonHidden(false);
        }
        else setIsCarltonHidden(true);
    }

    return (

         <div className="theatreCalendarHolder">
             <div className="calendarOptionsContainer">
                 <h1 className="header">Legend:</h1>
                 <h1 id="revueSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowRevue}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)" fill="white"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     The Revue
                 </h1>
                 <h1 id="paradiseSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowParadise}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     Paradise Theatre

                 </h1>
                 <h1 id="carltonSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowCarlton}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     Imagine (Carlton)

                 </h1>
                 <h1 id="frontSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowFrontSt}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     Imagine (Front)

                 </h1>
                 <h1 id="tiffSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowTiff}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     TIFF LightBox

                 </h1>
                 <h1 id="hotdocsSideBarLabel" className="sideBarItem">
                     <div className="checkbox-wrapper-44">
                         <label className="toggleButton">
                             <input type="checkbox" defaultChecked onClick={hideOrShowHotDocs}/>
                             <div>
                                 <svg viewBox="0 0 44 44">
                                     <path
                                         d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                         transform="translate(-2.000000, -2.000000)"></path>
                                 </svg>
                             </div>
                         </label>
                     </div>
                     Hot Docs

                 </h1>
                 <h1> - </h1>
                 <h1>The Fox Theatre</h1>
                 <h1>Innes College</h1>
                 <h1>LIFT Theatre</h1>
                 <h1>Charles Street Video</h1>
                 <h1>InterAccess</h1>
                 <h1>The Kingsway (maybe)</h1>


             </div>
             <div className="calendarContainer">
                 <div className="header">
                     <div id="month"></div>
                     <div>
                         <button id="btnBack"><i className="fa fa-angle-left"></i>←</button>
                         <button id="btnNext"><i className="fa fa-angle-right"></i>→</button>
                     </div>
                 </div>

                 <div className="weekdays">
                     <div className="dayHeader">Sun</div>
                     <div className="dayHeader">Mon</div>
                     <div className="dayHeader">Tue</div>
                     <div className="dayHeader">Wed</div>
                     <div className="dayHeader">Thu</div>
                     <div className="dayHeader">Fri</div>
                     <div className="dayHeader">Sat</div>
                 </div>
                 <div id="calendar"></div>
                 <p>                 Refresh the page if there are no movies :0
                 </p>

             </div>

             <div id="modal"></div>

             <div id="addEvent" className="eventModalPopUp">
                 <h2 className="modalPopUpName">Add Event</h2>
                 <input type="text" id="txtTitle" placeholder="Event Title"/>
                 <button id="btnSave">Save</button>
                 <button className="btnClose">Close</button>
             </div>

             <div id="viewEvent">
                 <h2 id="eventLocation">Event</h2>
                 <p id="eventTitle">This is Sample Event</p>
                 Playing at <p id="eventTime">This is Sample Event</p> on <p id="eventDate"></p>


                 <button id="btnDelete">Attend!</button>
                 <button className="btnClose">Close</button>
             </div>

         </div>
    )
}