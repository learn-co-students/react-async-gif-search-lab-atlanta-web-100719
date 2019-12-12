import React from "react"

function GifList(props) {
    return (
        <ul className="list-unstyled">
            {props.gifList.map((gif) => <li key={gif.id}> <img className="img-responsive img-thumbnail" src={gif.images.original.url} /> </li>)}
        </ul>
    )
}
export default GifList