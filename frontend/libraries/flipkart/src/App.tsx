import 'bootstrap/dist/css/bootstrap.min.css';
import Article from "./components/html topics/Article"
import Aside from "./components/html topics/Aside"
// import Audio_h1 from "./components/html topics/Audio"
import Htmlb from "./components/html topics/Htmlb"
import M1topics from './components/mui topics/M1topics';
import Mappbar from './components/mui topics/Mappbar';
// import Html_Div from "./components/html topics/Html_Div"
// import Hyperlinks_h3 from "./components/html topics/Hyperlinks"
import Mcards from './components/mui topics/Mcards';
import Mdialog from './components/mui topics/Mdialog';
import Mratings2 from './components/mui topics/Mratings2';
import MspeedDial from './components/mui topics/MspeedDial';
import Mswitch from './components/mui topics/Mswitch';
import SwitchLabels from './components/mui topics/Mswitch1';
// import Mswitch3 from './components/mui topics/Mswitch3';
import Mtopics from './components/mui topics/Mtopics';
// import Ratings from './components/mui topics/Ratings';
import Ratings1 from './components/mui topics/Ratings1';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Singlepage from './pages/Singlepage';



function App(){
  return(<div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Singlepage/:id" element={<Singlepage/>}/>
      </Routes>
    </Router>
    
    {/* <Mappbar/>
    <MspeedDial/>
    <Mdialog/>
    <M1topics/>
    <Mtopics/>
    <Mdialog/>
    <Mratings2/>
    <h1>Hello I Am React as on 5th July 2022</h1>
    <Htmlb/>
    <Article/>
    <Aside/>
    <Mswitch/>
    <SwitchLabels/>
    <Mcards/> */}
    
    </div>)
}
export default App 