import React,{useState,useEffect} from "react";

const AcceptedPage = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        const acceptedData = localStorage.getItem("accepted")
        setData(JSON.parse(acceptedData))
    },[])

    return (
        <>
            {data ? data.map((ele,index) => {
                return (
                    <div key={index}>
                        <h3>Name : {ele.name}</h3>
                        <div>Id : {ele.id}</div>
                        <div>Email : {ele.email}</div>
                        <div>Phone : {ele.phone}</div>
                        <div>Website : {ele.website}</div>
                    </div>
                )
            }): <h1>No User is accepted till now</h1>
            }
        </>
    )
}

export default AcceptedPage