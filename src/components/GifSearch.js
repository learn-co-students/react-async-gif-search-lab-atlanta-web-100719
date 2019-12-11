import React from "react"

class GifSearch extends React.Component{
    render(){
        return(
            <div>

            <form>
                <label>
                    Enter A Search Term:
                </label>
                <input type="text" name="searchGif" />

                <input type="submit" value="Find Gifs"/>

            </form>

            </div>
        )
    }
}

export default GifSearch