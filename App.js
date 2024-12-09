//import Accordion from "./Accordion";
// import Accordion from "../../portofolio/werty/Accordion";
import Testimonials from "./components/Testimonials";
// import { accordionDat } from "./Utils/content";

const App = () => {
  return (
    <div>
      {/* <div className="accordion">
        {accordionDat.map(({ title, content }) => (
          <Accordion title={title} content={content} />
         
        
          
        ))}
      </div> */}
      <Testimonials/>
    </div>
  );
};

export default App;