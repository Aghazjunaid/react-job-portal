import React,{useState,useEffect} from "react";

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
            {data?.length>0 ? data.map((ele) => {
                return (
                    <div key={ele.id} style={{display:"flex", justifyContent:"space-around"}}>
                        <div>
                            <h3>Name : {ele.name}</h3>
                            <div>Id : {ele.id}</div>
                            <div>Email : {ele.email}</div>
                            <div>Phone : {ele.phone}</div>
                            <div>Website : {ele.website}</div>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <button onClick={() => deleteUser(ele)}>Delete</button>
                        </div>
                    </div>
                )
            }): <h1>No User is accepted till now</h1>
            }
        </>
    )
}

export default AcceptedPage