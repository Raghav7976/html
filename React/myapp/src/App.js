
import "./App.css";
import HomeCarousels from './HomeCarousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Cardimage from "./Cardimage";
import ImageData from "./Imagedata";

import './Navbar';
import Navbar from './Navbar';

const ncard =(val) =>{
  return <Cardimage title={val.title} imgsrc ={val.imgsrc} desc={visualViewport.desc} />;
}
function App() {
  return (
  /* <div>
   <Navbar/>
   <HomeCarousels/>
   </div>*/
    
   <div>
   <Navbar/>
   <HomeCarousels/>
   <div className='row'>
  
   {ImageData.map((val, index) => (
    <div key={val.id} className="col-md-3">
    {ncard(val)}
    </div>
   ))}
   </div>
   </div>
  
    );
  }


export default App;
