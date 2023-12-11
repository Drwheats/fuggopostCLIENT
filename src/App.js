import './App.css';

import {
    Route, Routes, BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Information from "./Information";
import Bomgl from "./bomgl";
import PostPage from "./PostPage";
import HighScores from "./HighScores";
import Mons from "./Mons";
import CoachPage from "./CoachPage";
import NavigationBar from "./NavBar";
import Calendar from "./Calendar";
import BenResumePage from "./BenResumePage";
import BenResumeReflections from "./BenResumeReflections"
import BenResumeDevicePage from "./BenResumeDevicePage"
import BenResumeFastFix from "./BenResumeFastFix"
import BenResumeEportfolio from "./BenResumeEportfolio"

function App() {
    return (
        <>

            <div className="holder">
                <BrowserRouter>
                    <NavigationBar />

                    <Routes>

                        <Route path="/home" element={<Home/>}/>

                        <Route path="/" element={<Home contentPage={0}/>}/>
                        <Route path="/b" element={<HighScores contentPage={0}/>}/>
                        <Route path="/mons" element={<Mons />}/>
                        <Route path="/mons/coach/:coachnum" element={<CoachPage/>}/>

                        <Route path="/post/:id" element={<PostPage/>}/>
                        <Route path="/post/0" element={<Information/>}/>
                        <Route path="/bomgl" element={<Bomgl/>}/>
                        <Route path="/about" element={<Information/>}/>
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/eportfolio" element={<BenResumePage />} />
                        <Route path="/eportfolio-reflections" element={<BenResumeReflections />} />
                        <Route path="/eportfolio-devicepage" element={<BenResumeDevicePage />} />
                        <Route path="/eportfolio-fastfix" element={<BenResumeFastFix />} />
                        <Route path="/eportfolio-eportfolio" element={<BenResumeEportfolio />} />

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
