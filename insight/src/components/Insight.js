import data from "../api/insight.json";
import "../App.css";

function Insight() {

  return (
    <div className="kutular">
      <div style={{"height":"100px"}}></div>
      <div className="kutu">
        <p className="title">{data.kart1[0].title}</p>
        <p className="description">{data.kart1[0].description}</p>
      </div>
      <div className="kutu">
        <p className="title">{data.kart2[0].title}</p>
        <p className="description">{data.kart2[0].description}</p>
      </div>
      <div className="kutu">
        <p className="title">{data.kart3[0].title}</p>
        <p className="description">{data.kart3[0].description}</p>
        <p className="bonus">{data.kart3[0].bonus}</p>
      </div>
    </div>
  );
}


export default Insight;
