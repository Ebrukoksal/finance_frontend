import data from "../api/person.json";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Mova from "../components/images/mova-logo-v.png"

function Person({ image, name, date, other }) {
  const [user, setUsers] = useState([]);


  async function getRandomUser() {
    try {
      const data = await axios.get(
        "https://random-data-api.com/api/v2/users?size=1&is_xml=true"
      );
      setUsers(data.data);
      console.log(data.data);
    } catch (err) {
      console.log("error: ", err);
    }
  }
  useEffect(() => {
    getRandomUser();
  }, []);
  const person = data.personInfo;
  return (
    <div className="navbarImg">
      {person.map((value, index) => {
        return (
          <div key={index}>
            <div className="personBox">
              <div className="image" >
                <img className="personImage" src={Mova} alt="" />
              </div>
              <div >
                <h2>
                  {" "}
                  {
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ color: "#d25e2d" }}
                    />
                  }
                  {" "+user.first_name + " " + user.last_name}
                </h2>
                <p>
                  {
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{
                        color: "#d25e2d",
                      }}
                    />
                  }

                  {" "+user.phone_number}
                </p>
                <p>
                {" "+user.uid}
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faAt}
                    style={{ color: "#d25e2f" }}
                  />
                  {" "+user.email}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Person;
