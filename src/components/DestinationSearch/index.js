// Write your code here

import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeDetails = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationDetails} = this.props

    return (
      <div className="bg-container">
        <div>
          <h1>Destination Search</h1>
          <input
            type="text"
            value={searchInput}
            onChange={this.onChangeDetails}
          />
          <div className="destination-list">
            {destinationDetails.map(eachDestination => (
              <div key={eachDestination.id}>
                <img
                  src={eachDestination.imgUrl}
                  alt={eachDestination.name}
                  className="destination-img"
                />
                <p className="destination-name">{eachDestination.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
