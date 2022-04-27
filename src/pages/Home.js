import React, {useState, useEffect} from "react";


const Home = () => {
    const [data, setData] = useState([])
    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => setData(result))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getUsers()
    },[])
    console.log(data)

    return (
        <>
            <div style={{textAlign:"center"}}>
                <button>Accepted List</button>
                <button>Rejected List</button>
            </div>
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

export default Home