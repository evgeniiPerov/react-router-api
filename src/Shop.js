import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json()
        console.log(items)
        setItems(items)
    }
    return (
        <div>
            {items.map(item => (
                <h4 key={item.id}>
                    <Link to={`/shop/${item.id}`}> {item.title}</Link>
                </h4>
            ))
            }
        </div >
    )
}
