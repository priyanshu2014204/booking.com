
import Feature from "../components/feature/feature";
import Featureproperty from "../components/featureproperty/featureproperty";
import Header from "../components/header/header";
import Mail from "../components/mail/mail";
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
            <h1 className="hometitle">Browse by Property type</h1>
            <Featureproperty/>
            <Mail/>


        </div>
    </div>  );
}
 
export default Home;