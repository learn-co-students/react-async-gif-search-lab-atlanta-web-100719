import React from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends React.Component {

    state = {
        gifList: [],
    }

    componentDidMount() {
        this.fetchGifs("sunshine")
    }

    handleSubmit = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    fetchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=KHFfsjiHHHli2gDczAdgfz1R9GqUrHQr&rating=g`)
            .then(res => res.json())
            .then(data => {
                this.setState({ gifList: data.data })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">


                    <div className="col-xs-6">
                        <GifList gifList={this.state.gifList} />
                    </div>

                    <div className="col-xs-6">
                        <GifSearch handleSubmit={this.handleSubmit} />
                    </div>
                </div>

            </div>

        )
    }

}
export default GifListContainer 