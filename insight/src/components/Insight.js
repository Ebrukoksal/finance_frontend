import data from "../api/insight.json";
import "../App.css";
import Link from "../api/links.json";
import Button from "../api/buttons.json";
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

const openLinkInNewTab = (url) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) newTab.opener = null;
};

function Insight() {
  const box = data.genel;
  const doc = Link.links;
  const but = Button.buttons;
  const lin = Button.buttonLinks;

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
                    {value.descriptions.map((value1, index1) => (
                      <p key={index1}>{value1}</p>
                    ))}
                  </div>
                  {/* {value.extra ? <More extra={value.extra} /> : <div></div>} */}
                  <div className="table">
                    <Table />
                  </div>
                  {/* <button className="cancelCard" onClick={ () => openLinkInNewTab('')}>Cancel Card</button>
                  <button className="openAcc" onClick={ () => openLinkInNewTab('')}>Open a Checking Acc.</button> */}
                  {but.map((value3, index3) => (
                    //***burda iyice saçmalıyorum ama kısmen çalışıyo***
                    <button
                      className="cancelCard"
                      onClick={() =>
                        openLinkInNewTab(
                          lin.map((value4, index4) => {
                            return(
                              value4[index4]
                            )
                          })
                        )
                      }
                      key={index3}
                    >
                      {" "}
                      {value3}{" "}
                    </button>
                  ))}
                  <br />
                  {doc.map((value2, index2) => {
                    return (
                      <a
                        key={index2}
                        href="#"
                        onClick={() => openLinkInNewTab(value2)}
                      >
                        Doc{index2 + 1}{" "}
                      </a>
                    );
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
