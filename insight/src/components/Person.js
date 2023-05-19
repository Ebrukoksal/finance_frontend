// import data from "../api/insight.json";
import "../App.css";

function Person({ image, name, date, other }) {
  return (
    <div className="navbarImg">
        <div>
          <div className="image">
            <img className="personImage" src={image} alt="" />
          </div>
          <div className="info">
            <h1 className="name"> {name}</h1>
            <p className="other"> {date}</p>
            <p className="other"> {other}</p>
          </div>
        </div>
    </div>
  ); 
}

export default Person;
