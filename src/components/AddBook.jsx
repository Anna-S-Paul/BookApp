import React from 'react'
import NavBook from './NavBook'

const AddBook = () => {
    return (
        <div>
            <NavBook />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Book title:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Category:</label>
                                <select name="" id="" className="form-control">
                                    <option value="Sci-Fi">--select--</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Poetry">Poetry</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Description: </label>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Author name:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <label htmlFor="" className="form-label">Price:</label>
                                <input type="number" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                <button className="btn btn-success">Add</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBook