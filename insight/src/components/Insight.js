import data from "../api/insight.json";
import "../App.css";
import Link from "../api/links.json";
import WhyBox from "./whyBox";
import Table from "./Table";

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
  const doc = Link.links;

  return (
    <div>
      <div className="boxes">
        {box.map((value, index) => {
          return (
            <div key={index}>
              <div className="box">
                <p className="title">{value.title} </p>
                {/* <WhyBox why={value.why} /> */}
                <div>
                  <div className="description">
                    {value.descriptions.map((value1, index1) => <p>{value1}</p>)}
                  </div>
                  {/* {value.extra ? <More extra={value.extra} /> : <div></div>} */}

                  <Table/>
                  <button className="cancelCard">Cancel Card</button>
                  <button className="openAcc">Open a Checking Acc.</button>
                  <br/>
                  {/* Corresponding Documents:  <a href="#" style={{color:"blue", margin:"10px"}}>Doc1</a>||<a href="#" style={{color:"blue", margin:"10px"}}>Doc2</a>||<a href="#" style={{color:"blue", margin:"10px"}}>Doc3</a> */}
                  {doc.map((value2, index2)=>{ 
                    console.log(value2)
                    return (
                     <a href={value2} >Doc{index2+1} </a>
                    )
                  })}
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
