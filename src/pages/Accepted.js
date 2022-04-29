import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";

const AcceptedPage = () => {
    const [data,setData] = useState([])

    function getAcceptedData(){
        const acceptedData = localStorage.getItem("accepted")
        setData(JSON.parse(acceptedData))
    }

    useEffect(()=>{
        getAcceptedData()
    },[])

    function deleteUser(userId){
        const data = JSON.parse(localStorage.getItem('users'))
        data.push(userId)
        localStorage.setItem('users',JSON.stringify(data))
        const userData = localStorage.getItem('accepted')
        const newArr = JSON.parse(userData).filter(ele => ele.id !== userId.id)
        localStorage.setItem('accepted',JSON.stringify(newArr))
        getAcceptedData()
    }
    console.log(data)
    return (
        <>
            <div className="card-conatainer container">
                {data?.length > 0 ? data.map((ele) => {
                    return (
                        <div key={ele.id} className="card-design">
                            <div className="card">
                                <div className="card-header">
                                    <img src={`assests/images/${ele.id}.png`} alt="image" />
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
                            <span className="tag tag-id">{ele.id}</span>
                        </div>
                    )
                    }): <h1>Accepted list is empty</h1>
                }
            </div>
        </>
    )
}

export default AcceptedPage