import React,{useState,useEffect} from "react";


const RejectedPage = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        let rejectedData = localStorage.getItem("rejected")
        setData(JSON.parse(rejectedData))
    },[])
    return (
        <>
            {data.length > 0 && data.map((ele,index) => {
                return (
                    <div key={index}>
                        <h3>Name : {ele.name}</h3>
                        <div>Id : {ele.id}</div>
                        <div>Email : {ele.email}</div>
                        <div>Phone : {ele.phone}</div>
                        <div>Website : {ele.website}</div>
                    </div>
                )
            })
            }
        </>
    )
}

export default RejectedPage