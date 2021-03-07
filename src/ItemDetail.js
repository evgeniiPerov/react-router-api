import React, { useEffect, useState } from 'react'


export default function Item({ match }) {
    //pomoci match - dostal jsem match.param.id 
    //a diky informaci popsal item.
    //vyuzivani async fu dulezete pri API
    const [item, setItem] = useState([])
    console.log(match)
    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item)
        console.log(item)
    }

    return (
        <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={item.image} alt="" width='300px' />
        </div >
    )
}

