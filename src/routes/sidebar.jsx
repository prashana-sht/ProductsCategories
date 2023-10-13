import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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
        <NavLink to={`/categories/${categoryID}`}>
            {categoryID}
        </NavLink>
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
                
                {/* <Search /> */}
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Sidebar
