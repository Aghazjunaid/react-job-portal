import React,{useState,useEffect} from "react";

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
            {data ? data.map((ele) => {
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
            }): <h1>No User is rejected till now</h1>
            }
        </>
    )
}

export default RejectedPage