import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RejectedPage = () => {
    const [data,setData] = useState([])

    function getRjectedData(){
        const rejectedData = localStorage.getItem("rejected")
        setData(JSON.parse(rejectedData))
    }
    useEffect(()=>{
        getRjectedData()
    },[])

    function deleteUser(userId){
        const data = JSON.parse(localStorage.getItem('users'))
        data.push(userId)
        localStorage.setItem('users',JSON.stringify(data))
        const userData = localStorage.getItem('rejected')
        const newArr = JSON.parse(userData).filter(ele => ele.id !== userId.id)
        localStorage.setItem('rejected',JSON.stringify(newArr))
        getRjectedData()
    }

    return (
        <>  
            <div className="card-conatainer container">
                {data?.length > 0 ? data.map((ele) => {
                    return (
                        <div key={ele.id} className="card-design">
                            <Link to={`/user/${ele.id}`}> 
                                <div className="card">
                                    <div className="card-header">
                                        <img src={`assests/images/${ele.id}.png`} alt="user-image" />
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
                                        <div>
                                            <Button variant="danger" onClick={() => deleteUser(ele)}>Remove</Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <span className="tag tag-id">{ele.id}</span>
                        </div>
                    )
                    }): <h1>Rejected list is empty</h1>
                }
            </div>
        </>
    )
}

export default RejectedPage