import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [year, setYear] = useState("");
const [color, setColor] = useState("");
const [search, setSearch] = useState("");
const [users, setUsers] = useState([
    {
    id: 1,
    name: "Gentra",
    price: "$18000",
    year: 2023,
    color: "black"
    },
    {
    id: 2,
    name: "Cobalt",
    price: "$14000",
    year: 2022,
    color: "white"
    },
    {
    id: 3,
    name: "Monza",
    price: "$20000",
    year: 2023,
    color: "black"
    }
]);

const changeFirstName = (e) => {
    setName(e.target.value);
};
const changeLastName = (e) => {
    setPrice(e.target.value);
};
const changeAge = (e) => {
    setYear(e.target.value);
};
const changeAddress = (e) => {
    setColor(e.target.value);
    };
    const searchUser = (e) => {
    setSearch(e.target.value);
  };
const deleteUser = (id) => {
    let new_users = users.filter((item) => item.id !== id)
    setUsers([...new_users])
};
const addUser = () => {
    let payload = {
    id: users.length + 1,
    name,
    price,
    year,
    color,
    };
    setUsers([...users, { ...payload }]);
}

return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-8">
        <div className="row">
            <div className="col-4">
            <input
                type="text"
                className="form-control my-4"
                placeholder="Search"
                onChange={searchUser}
            />
            </div>
        </div>
        <table className="table table-bordered table-hover">
            <thead>
            <tr>
                <th>T/r</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Color</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.filter((item)=>{
                    if (search === ""){
                        return item
                    } else if (
                        item.first_name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map((item, index) => {
                return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>
                    <Link to={`/Cars/${index}`} className="btn btn-info">Open</Link>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=> deleteUser(item.id)}>delete</button>
                    </td>
                    </tr>
                })
                }
            </tbody>
        </table>
        </div>
        <div className="col-md-4">
        <form>
            <input
            type="text"
            onChange={changeFirstName}
            placeholder="Name"
            className="form-control my-2"
            />
            <input
            type="text"
            onChange={changeLastName}
            placeholder="Price"
            className="form-control my-2"
            />
            <input
            type="number"
            onChange={changeAge}
            placeholder="Year"
            className="form-control my-2"
            />
            <input
            type="text"
            onChange={changeAddress}
            placeholder="Color"
            className="form-control my-2"
            />
        </form>
        <button className="btn btn-success" onClick={addUser}>
            Add user
        </button>
        </div>
    </div>
    </div>
) 
}
