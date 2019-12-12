import React from "react"

class GifSearch extends React.Component {

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    state = {
        searchGif: ""
    }

    render() {
        return (
            <div>

                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.handleSubmit(this.state.searchGif)
                }}>

                    <label>
                        Enter A Search Term:
                </label>
                    <input type="text" name="searchGif" value={this.state.searchGif} onChange={this.handleChange} />

                    <input type="submit" value="Find Gifs" />

                </form>

            </div>
        )
    }
}

export default GifSearch