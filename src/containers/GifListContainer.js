import React from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends React.Component {

    state = {
        gifList: []
    }

    componentDidMount() {
        this.fetchGifs("Atlanta")
    }

    handleSubmit = (arg) => {
        this.fetchGifs(arg)
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(data => {
                this.setState({ gifList: data.data })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col">
                        <GifSearch handleSubmit={this.handleSubmit} />
                    </div>

                    <div className="col">
                        <GifList gifList={this.state.gifList} />
                    </div>

                </div>

            </div>

        )
    }

}
export default GifListContainer 