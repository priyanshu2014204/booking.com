import "./search.css"

const SearchItem = () => {
    return (  <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/446160757.webp?k=b8f2b2eae225237556ccd1cd7b99bf0b3ceb1f2e4b4090a006454086c13691a3&o=&s=1" alt=""
         className="siimg"
        />
        <div className="sidesc">
            <h1 className="sititle">Hotel Taj Deluze</h1>
            <span className="sidsitance">100m from main city</span>
            <span className="sitaxi">Free airport Taxi</span>
            <span className="sisubtitle">
                Main appartment with air condition
            </span>
            <span className="sifeature">
                Entire studio + 1 bathroom + 21m 1 full bed
            </span>
            <span className="sicacelop">Free cancellation</span>
            <span className="iscalsubtitle">
                You can cancel later so lock it, at this price
            </span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailtext">
                <span className="siprice">Rs. 2000</span>
                <div className="sitaxiop">Included taxes and fee</div>
                <button className="sicheckbtn">See avalibility</button>
            </div>
        </div>

    </div>);
}
 
export default SearchItem;