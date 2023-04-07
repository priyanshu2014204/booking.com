
import Feature from "../components/feature/feature";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Property from "../components/propertylist/propertylist";
import "./home.css"

const Home = () => {
    return (<div>
        <Navbar/>
        <Header/>
        <div className="featurecontainer">
            <Feature/>
            <h1 className="hometitle">Browse by Property type</h1>
            <Property/>

        </div>
    </div>  );
}
 
export default Home;