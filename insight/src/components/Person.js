import data from "../api/person.json";
import "../App.css";

function Person({ image, name, date, other }) {
  const person = data.personInfo;
  return (
    <div className="navbarImg">
      {person.map((value, index) => {
        return (
          <div key={index}>
            <div className="personBox">
            <div className="image">
              <img className="personImage" src={image} alt="" />
            </div>
            <div className="image">
              <h2>{value.name}</h2>
              <p>{value.date}</p>
              <p>{value.other}</p>
            </div>
            </div>
          </div>
        );
      })}
      {/* <div>
          
          <div className="info">
            <h1 className="name"> {name}</h1>
            <p className="other"> {date}</p>
            <p className="other"> {other}</p>
          </div>
        </div> */}
    </div>
  );
}

export default Person;
