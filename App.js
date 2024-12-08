//import Accordion from "./Accordion";
import Accordion from "../../portofolio/werty/Accordion";
import { accordionData } from "./Utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        
          
        ))}
      </div>
    </div>
  );
};

export default App;