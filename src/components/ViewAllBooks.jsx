import React from 'react'
import NavBook from './NavBook'

const ViewAllBooks = () => {
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
      <th scope="col">Author name</th>
      <th scope="col">Published year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GODFATHER</td>
      <td>Newton</td>
      <td>2002</td>
      <td>1000/-</td>
    </tr>
    <tr>
      <td>SHEDULER</td>
      <td>Abdul</td>
      <td>2000</td>
      <td>1500/-</td>
    </tr>
    <tr>
      <td>FATHER AND SON</td>
      <td>Charles</td>
      <td>1989</td>
      <td>1000/-</td>
    </tr>
    <tr>
      <td>ASUS</td>
      <td>Tim</td>
      <td>2012</td>
      <td>1500/-</td>
    </tr>
    <tr>
      <td>HP</td>
      <td>Anna</td>
      <td>2024</td>
      <td>3000/-</td>
    </tr>
    <tr>
      <td>GUJJU</td>
      <td>Sagar</td>
      <td>1999</td>
      <td>500/-</td>
    </tr>
    <tr>
      <td>GANDHI</td>
      <td>Nehru</td>
      <td>1918</td>
      <td>200/-</td>
    </tr>
    <tr>
      <td>KERNEL</td>
      <td>Newton</td>
      <td>1967</td>
      <td>1500/-</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAllBooks