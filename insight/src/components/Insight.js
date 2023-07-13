import data from "../api/insight.json";
import "../App.css";
import Link from "../api/links.json";
import Button from "../api/buttons.json";
import WhyBox from "./whyBox";
import Table from "./Table";
import Stepper2 from "../components/Stepper2";
import CreateNew from "./CreateNew";

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
  const buts = Button.buttons;

  return (
    <div className="boxes">
      <div >
      <Stepper2/>
      </div>
      <br/><br/>
      <div >
        <CreateNew/>
      </div>
    </div>
  );
}

export default Insight;

// {box.map((value, index) => {
//   return (
//     <div key={index}>
//       <div className="box">
//         <p className="title">{value.title} </p>
//         {/* <WhyBox why={value.why} /> */}
//         <div>
//           <div className="description">
//             {value.descriptions.map((value1, index1) => (
//               <p key={index1}>{value1}</p>
//             ))}
//           </div>
//           {/* {value.extra ? <More extra={value.extra} /> : <div></div>} */}

//           {buts.map((but, index3) => {
//             return (
//               <button
//                 className="cancelCard"
//                 onClick={() => openLinkInNewTab(but.link)}
//                 key={index3}
//               >
//                 {but.title}
//               </button>
//             );
//           })}

//           <div className="table">
//             <br />
//             <Table />
//           </div>

//           <br />
//           {doc.map((value2, index2) => {
//             return (
//               <a
//                 key={index2}
//                 href="#"
//                 onClick={() => openLinkInNewTab(value2)}
//               >
//                 Doc{index2 + 1}{" "}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// })}