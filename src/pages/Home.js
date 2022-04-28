import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function getUsers(){
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => {
            setData(result)
            localStorage.setItem('users',JSON.stringify(result))
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        const userData = localStorage.getItem('users')
        if(userData){
            setData(JSON.parse(userData))
        }else{
            getUsers()
        }
    },[])
    console.log(data)

    return (
        <>  
            {!isLoading ? 
            <div className="card-conatainer container">
                {data.length > 0 && data.map((ele) => {
                    return (
                        <div key={ele.id} className="card-design">
                            <Link to={`/user/${ele.id}`}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="image" />
                                    </div>
                                    <div className="card-body">
                                        <span className="tag tag-teal">www.{ele.website}</span>
                                        <h4>
                                            {ele.name}
                                        </h4>
                                        <p>
                                            {ele.email}
                                        </p>
                                        <p>
                                            {ele.phone}
                                        </p>
                                    </div>
                                </div>
                                <span className="tag tag-id">{ele.id}</span>
                            </Link>
                        </div>
                    )
                })
                }
            </div> : <Loader/>}
        </>
    )
}

export default Home