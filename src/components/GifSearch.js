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
                    this.setState({ searchGif: "" })
                }}>
                    <div className="form-group">
                        <label>Enter a Search Term:</label>
                        <input className="form-control" type="text" name="searchGif" value={this.state.searchGif} onChange={this.handleChange} />

                    </div>
                    <input className="btn btn-primary" type="submit" value="Find Gifs" />
                </form>

            </div>
        )
    }
}

export default GifSearch