import React from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends React.Component{

    state = {
        gifList: []
    }

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(res => res.json())
        .then(data => {
            this.setState({gifList: data.data})
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.searchGif.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({gifList: data.data})
        })
    }
    
    render(){
        return(
            <div className="container">   
                <div className="row">

                    <div className="col">
                    <GifSearch handleSubmit={this.handleSubmit}/>
                    </div>

                    <div className="col">
                        <GifList gifList={this.state.gifList}/>
                    </div>

                </div>

            </div>

        )
    }

}
export default GifListContainer 