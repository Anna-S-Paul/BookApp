import React, { useState } from 'react'
import NavBook from './NavBook'
import axios from 'axios'

const AddBook = () => {
    const [data,setData]=useState(
    {
        "title":"",
        "category":"",
        "description":"",
        "authorname":"",
        "price": ""
    }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
   axios.post("http://localhost:8082/",data).then(
    (response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Successfully added")
        } else {
            alert("error")
        }
    }
   ).catch(
    (error)=>
        alert(error)
   ).finally() 
    }
    return (
        <div>
            <NavBook />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Book title:</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Category:</label>
                                <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                                    <option value="Sci-Fi">--select--</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Poetry">Poetry</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Description: </label>
                                <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Author name:</label>
                                <input type="text" className="form-control" name='authorname' value={data.authorname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Price:</label>
                                <input type="number" name="price" id="" className="form-control" value={data.price} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <button className="btn btn-success" onClick={readValue}>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBook