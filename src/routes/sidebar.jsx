import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/categories/`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])

    const cate = categories.map((categoryID) => (
        <Link to={`/categories/${categoryID}`}>
            {categoryID}
        </Link>
    ))

    return (
        <>
            <div className="contents">
                <div id="sidebar">
                    <nav>
                   {cate}
                    </nav>
                </div>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Sidebar
