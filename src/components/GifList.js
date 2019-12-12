import React from "react"

function GifList(props) {
    console.log(props.gifList)
    return (
        <ul>
            {props.gifList.map((gif) => <li key={gif.id}> <img src={gif.images.original.url} /> </li>)}
        </ul>
    )
}
export default GifList