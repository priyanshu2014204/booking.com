import { faLocation } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import "./hotel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Mail from "../../components/mail/mail";
const Hotel = () => {
let photodata=[
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1"
    }
]

    return ( <div>
        <Navbar/>
        <Header type="list"/>
         <div className="hotelcontainer">
            <div className="hotelwrapper">
                <button className="booknow">
                    Reserve
                </button>
                <h1 className="hoteltitle">Grand Hotel</h1>
                <div className="hoteladdres">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>244 Bandra , Mumbai</span>
                </div>
                <span className="hoteldistance">
                    Excellent location - 500 m from center
                </span>
                <span className="hotelpricehighlight">
                    Book a stay ovver Rs.2000 at this property and a free taxi
                </span>
                <div className="hotelimages">
                      {photodata.map((p)=>{
                    return (<div className="hotelimgwrapper">
                           <img src={p.src} alt="" className="hotelimg"/>
                    </div>)
                      })}
                </div>
                <div className="hoteldetails">
                    <div className="hotedetailstext">
                        <h1 className="hoteltitle">Stay in heart of banaglore</h1>
                        <p className="hoteldesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam error necessitatibus adipisci in eveniet voluptate! Placeat voluptatem quae voluptatum necessitatibus praesentium.
                        </p>
                    </div>
                    <div className="hotedetailprice">
                        <h1>Perfect for a 9-night stay`</h1>
                        <span>
                            Located in the real hearrt of krajow, this propertty has an excellenyt location scroe of 9.8!
                        </span>
                        <h2><b>Rs.2000</b>
                        (9 nights)
                        </h2>
                        <button>Reserve or book Now!</button>
                    </div>
                </div>
            </div>
         </div>
         <Mail/>
    </div> );
}
 
export default Hotel;