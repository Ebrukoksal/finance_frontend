import data from "../api/insight.json";
import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
{
  /* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>; */
}

function Insight() {
  const box = data.genel;

  return (
    <div>
      <div className="boxes">
        {box.map((value, index) => {
          return (
            <div key={index}>
              <div className="box">
                
                <p className="title">{value.title}</p>
                <div className="description">
                  {value.description1}
                  <br />
                  {value.description2}
                  <br />
                  {value.description3}
                  <br />
                  <div className="whyBox">
                  {/* <FontAwesomeIcon
                      icon="fa-solid fa-xmark"
                      style={{ color: "#ff0000" }}
                    /> */}
                  <p className="why1">Why?</p>
                  <br />
                  {value.why}
                </div>

                  <div className="box2">
                    {value.extra}
                    <div className="UMbuttons">
                      <button className="useButton">USE</button>
                    </div>
                  </div>
                  <div className="UMbuttons">
                    <button className="moreButton">MORE</button>
                  </div>
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
