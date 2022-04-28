import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";

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
                            <div className="card">
                                <div className="card-header">
                                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                                </div>
                                <div className="card-body">
                                    <span className="tag tag-teal">www.{ele.website}</span>
                                    <h4>
                                        {ele.name}
                                    </h4>
                                    <p>
                                        {ele.email}
                                    </p>
                                    <div>
                                        <Button variant="danger" onClick={() => deleteUser(ele)}>Remove</Button>
                                    </div>
                                </div>
                            </div>
                            <span className="tag tag-id">{ele.id}</span>
                        </div>
                    )
                    }): <h1>No User is rejected till now</h1>
                }
            </div>
            
        </>
    )
}

export default RejectedPage