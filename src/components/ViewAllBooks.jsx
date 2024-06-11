import React, { useEffect, useState } from 'react'
import NavBook from './NavBook'
import axios from 'axios'

const ViewAllBooks = () => {
  const [data,setData]=useState([])
  const fetchData=()=>{
    axios.get("http://localhost:8082/viewall").then(
    (response)=>{
      setData(response.data)
    }
  ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
<NavBook/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Book title</th>
      <th scope="col">Category</th>
      <th scope="col">Author name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(
        (value,index)=>{
          return <tr>
          <td>{value.title}</td>
          <td>{value.category}</td>
          <td>{value.description}</td>
          <td>{value.authorname}</td>
          <td>{value.price}</td>
        </tr>
        }
      )
    }
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAllBooks