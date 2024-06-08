import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListExperience from "./components/Experience/ListExperience";
import AddExperience from "./components/Experience/AddExperience";
import AddInfo from "./components/GeneralInformation/AddInfo";
import ListInfo from "./components/GeneralInformation/ListInfo";
import ListSkill from "./components/Skills/ListSkill";
import AddSkill from "./components/Skills/AddSkill";

function Home() {
    return (
        <div>
            <h1>Curriculum webApp</h1>
            <div className="lists-container">
                <div className="list-section">
                    <h2>Experience</h2>
                    <ListExperience />
                </div>
                <div className="list-section">
                    <h2>General info</h2>
                    <ListInfo />
                </div>
                <div className="list-section">
                    <h2>Skills</h2>
                    <ListSkill />
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/add-experience"
                            element={<AddExperience />}
                        />
                        <Route
                            path="/edit-experience/:id"
                            element={<AddExperience />}
                        />
                        <Route path="/add-info" element={<AddInfo />} />
                        <Route path="/edit-info/:id" element={<AddInfo />} />
                        <Route path="/add-skill" element={<AddSkill />} />
                        <Route path="/edit-skill/:id" element={<AddSkill />} />
                    </Routes>
                </div>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
