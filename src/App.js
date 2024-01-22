import './App.css';

import {
    Route, Routes, BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Information from "./Information";
import PostPage from "./PostPage";
import HighScores from "./HighScores";
import Mons from "./Mons";
import CoachPage from "./CoachPage";
import NavigationBar from "./NavBar";
import Calendar from "./Calendar";

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
                        <Route path="/about" element={<Information/>}/>
                        <Route path="/calendar" element={<Calendar />} />

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
