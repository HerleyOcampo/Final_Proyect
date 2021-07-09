import React, { useState, useEffect } from 'react'
import RequestService from '../config/index'


export const Ofertas = () => {
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
            <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Card Empleos</h5>
                    <p class="card-text">
                            {user.map((item) => (
                        <h1 key={item.id}>
                            {item.description}
                        </h1>
                        ))} 
                     </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
