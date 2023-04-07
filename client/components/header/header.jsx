import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBiking,
  faCalendar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { DateRange, DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({ type }) => {
  const [opendate, setOpendate] = useState(false);
  const [openperson, setOpenperson] = useState(false);
  const [option, setOption] = useState({
    adults: 2,
    children: 1,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handlefnc(name, op) {
    setOption((value) => {
      return {
        ...value,
        [name]: op == "+" ? option[name] + 1 : option[name] - 1,
      };
    });
    console.log(option);
  }

  return (
    <div className="header">
      <div className={type=="list"?"headercontainer list":"headercontainer"}>
        <div className="headerList">
          <div className="headerlistitems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faBiking} />
            <span>Rent Vehicals</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Affordable Taxi</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
        </div>
       { type!=="list" &&  <>
        <h1 className="headerTitle">A lifeTime of discounts? It's a genius</h1>
        <p className="headerdesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Imbooking account
        </p>
        <button className="headerbtn">Signup / Register</button>
        <div className="headersearch">
          <div className="headersearchItem">
            <FontAwesomeIcon icon={faBed} className="headericon" />
            <input
              type="text"
              placeholder="Search the Place"
              className="headersearchinput"
            />
          </div>
          <div className="headersearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headericon" />
            <span
              onClick={() => {
                setOpendate(!opendate);
              }}
              className="headersearchtext"
            >
              {" "}
              {`${format(date[0].startDate, "MM/dd/yyyy")} to
              ${format(date[0].endDate, "MM/dd/yyyy")}  `}{" "}
            </span>
            {opendate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headersearchItem">
            <FontAwesomeIcon icon={faPerson} className="headericon" />
            <span
              onClick={() => {
                setOpenperson(!openperson);
              }}
              className="headersearchtext"
            >{`${option.adults} adults ${option.children} children ${option.room} room`}</span>
            {openperson && (
              <div className="options">
                <div className="optionitem">
                  <span className="optiontext">Adult</span>
                  <div className="optioncounter">
                    <button
                      className="optionbutton"
                      disabled={option.adults <= 1}
                      onClick={() => {
                        handlefnc("adults", "-");
                      }}
                    >
                      -
                    </button>
                    <span className="optionNumber">{option.adults}</span>
                    <button
                      className="optionbutton"
                      onClick={() => {
                        handlefnc("adults", "+");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionitem">
                  <span className="optiontext">Children</span>
                  <div className="optioncounter">
                    <button
                      className="optionbutton"
                      disabled={option.children <= 1}
                      onClick={() => {
                        handlefnc("children", "-");
                      }}
                    >
                      -
                    </button>
                    <span className="optionNumber">{option.children}</span>
                    <button
                      className="optionbutton"
                      onClick={() => {
                        handlefnc("children", "+");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionitem">
                  <span className="optiontext">Room</span>
                  <div className="optioncounter">
                    <button
                      className="optionbutton"
                      disabled={option.room <= 1}
                      onClick={() => {
                        handlefnc("room", "-");
                      }}
                    >
                      -
                    </button>
                    <span className="optionNumber">{option.room}</span>
                    <button
                      className="optionbutton"
                      onClick={() => {
                        handlefnc("room", "+");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headersearchItem">
            <button className="headerbtn">Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
