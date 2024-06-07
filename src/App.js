import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListExperience from './components/Experience/ListExperience';
import AddExperience from './components/Experience/AddExperience';
import AddInfo from './components/GeneralInformation/AddInfo';
import ListInfo from './components/GeneralInformation/ListInfo';
import ListSkill from './components/Skills/ListSkill';
import AddSkill from './components/Skills/AddSkill';

function App() {
  return (
    <div>
      

      <BrowserRouter>
        <HeaderComponent />
        <h1>Andrés's curriculum</h1>
      <button onClick={() => window.location.href = '/experience'}>Experience</button>
      <button onClick={() => window.location.href = '/info'}>Info</button>
      <button onClick={() => window.location.href = '/skills'}>Skills</button>
        <div className="container">
          <Routes>
            <Route path="/experience" element={<ListExperience />} />
            <Route path="/info" element={<ListInfo />} />
            <Route path="/skills" element={<ListSkill/>} />
            <Route path="/add-experience" element={<AddExperience />} />
            <Route path="/edit-experience/:id" element={<AddExperience />} />
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
