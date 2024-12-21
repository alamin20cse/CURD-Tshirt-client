import { useLoaderData } from "react-router-dom";
import TshirtCard from "./TshirtCard";


const Home = () => {

    const tshirts=useLoaderData();

    return (
        <div>
            <h1>ALL Tshirts : {tshirts.length}</h1>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    tshirts.map((tshirt,index)=><TshirtCard tshirt={tshirt} key={index} ></TshirtCard>)
                }
            </div>
           
        </div>
    );
};

export default Home;