import { useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import "./list.css";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../components/searchitem/searchitem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setopenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="listtitle">Search</h1>
            <div className="listitem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listitem">
              <label htmlFor="">Check in Date</label>
              <span
                onClick={() => {
                  setopenDate(!opendate);
                }}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to
              ${format(date[0].endDate, "MM/dd/yyyy")}  `}
              </span>
              {opendate && (
                <DateRange
                  ranges={date}
                  minDate={new Date()}
                  onChange={(item) => {
                    setDate([item.selection]);
                  }}
                />
              )}
            </div>
            <div className="listitem">
              <label htmlFor="">Option</label>
              <div className="lisoptioncontainer">
                <div className="lsoptionitem">
                  <span className="lsoptiontext">
                    Min price <small>per night</small>
                  </span>
                  <input type="text" className="lsoptioninput" />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptiontext">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsoptioninput"
                    placeholder={option.adults}
                  />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptiontext">Children</span>
                  <input
                    type="number"
                    className="lsoptioninput"
                    placeholder={option.children}
                    min={0}
                  />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptiontext">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsoptioninput"
                    placeholder={option.room}
                  />
                </div>
                <div className="lsoptionitem">
                  <span className="lsoptiontext">
                    Min price <small>per night</small>
                  </span>
                  <input type="text" className="lsoptioninput" />
                </div>
              </div>
             </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
