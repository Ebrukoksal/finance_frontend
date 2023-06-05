import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyBox(props) {
    return(
      <div className="whyBox">
        <button className="xmark">
          {<FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />}
        </button>
        <p className="why1">Why?</p>
        <br />
        {props.why}
      </div>
  );
}
export default WhyBox;
