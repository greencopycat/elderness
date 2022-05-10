import React, { Component, createRef } from 'react'
import { HOSTNAME } from '../../Constant'
// import './App.css'

class Populate extends Component {
    constructor(props) {
        super(props)
        this.btnRef = createRef()
        this.state = {
            files: []
        }
    }

    componentDidMount = async () => {
    }

    handlePopulate = async () => {
        const $input = document.querySelector('#file')
        const FD = new FormData()
        FD.append('populateFile', $input.files[0])
        const query = {
            method: 'POST',
            mode: 'cors',
            body: FD
        }
        await fetch(`${HOSTNAME.DBDEV}/msapi/add`, query)
            .then(data => data.json())
            .catch(error => error)
    }

    render() {
        const files = this.state.files
        const list = []
        if (files.length) {
            for (let f of files) {
                list.push(<div key={f.name}>{f.name}</div>)
            }
        }
        return (
            <div className="populate">
                <fieldset>
                    <legend>[Please select a file]</legend>
                    <div>
                        <input 
                            ref={this.btnRef} 
                            id="file" 
                            name="file_input" 
                            type="file"
                            onChange={(evt) => {
                                const $tar = evt.currentTarget
                                this.setState({
                                    files: $tar.files
                                })
                            }}
                            accept="text/csv"
                        />
                    </div>
                    <div>{list}</div>
                    <div className="submit">
                        <input type="button" value="Populate" onClick={this.handlePopulate} />
                        <input type="button" value="Nah" className="nevermind" />
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default Populate
