import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'

export default class Logo extends React.Component {

    constructor(props) {
        super(props)
        const src = 'static/clientes/334455/logo.jpeg'
        this.state = {
            preview: null,
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClose() {
        this.setState({ preview: null })
    }

    onCrop(preview) {
        this.setState({ preview })
    }

    render() {
        return (
            <div>
                <div className="columns is-mobile">
                    <div className="column is-inline ">
                        <Avatar
                            width={300}
                            height={300}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            src={this.state.src}
                        />
                    </div>
                    <div className="column is-inline ">
                        <figure className="image is-128x128">
                        <img className="is-rounded" style={{marginTop: '40px', border: '2px solid gray'}} src={this.state.preview} alt="Preview"></img>
                        </figure>
                    </div>
                </div>


            </div>
        )
    }
}
