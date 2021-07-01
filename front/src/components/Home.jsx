import vertical from '../assets/img/group_3.png'
import RequestService from '../config/index'
import React, { useState, useEffect } from 'react'


export const Home = () => {
    const [user, setUsers] = useState([]);
    //const [data, setData] = useState([]);
  
    const getUsers = async () => {
      const { data } = await RequestService.get('api/task/');
      console.log(data);
      //const {users} = data;
      setUsers(data);
      //setData(user);
  
    };
    //console.log(user._id);
    useEffect(() => {
      getUsers();
    }, []);
    return (
        <>
        <div className="App container-fluid">        
            <div className="bn-linea">
        <a className="btn btn-lg btn-white-outline btn-block" href="#">   PHP Developer    </a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">JavaScript Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Phyton Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Frontend Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Backend Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Full Stack Developer</a>

                {/* {user.map((item) => (
                    <h1 key={item.id}>
                        {item.description}
                    </h1>
                ))} */}
            </div>
            {/* <div className="spacer"></div> */}
            <div className="banner-inicio"><img src={vertical} /></div>
        </div>
        </>
    )
}
