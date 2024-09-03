import React from 'react'

class Selection extends React.Component {
    render() {
        return (
            <div class="selection">
                <img src="{{ images.0 }}" alt="left"></img>
                <img src="{{ images.1 }}" alt="right"></img>
            </div>
        )
    }
}

export default Selection
