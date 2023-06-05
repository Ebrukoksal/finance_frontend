import data from "../api/insight.json";
import "../App.css";
import WhyBox from "./whyBox";


const More = (props) => {
  return (
    <div>
      <div className="box2">
        {props.extra}
        {
          <div className="UMbuttons">
            <button className="useButton">USE</button>
          </div>
        }
      </div>
      <div className="UMbuttons">
        <button className="moreButton">MORE</button>
      </div>
    </div>
  );
};

function Insight() {
  const box = data.genel;

  return (
    <div>
      <div className="boxes">
        {box.map((value, index) => {
          return (
            <div key={index}>
              <div className="box">
                <p className="title">{value.title} </p>
                <WhyBox why={value.why}/>
                <div>
                  <div className="description">
                    {value.description1}
                    <br />
                    {value.description2}
                    <br />
                    {value.description3}
                    <br />
                  </div>
                  {value.extra ? <More extra={value.extra} /> : <div></div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Insight;
