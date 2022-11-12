import './index.css'

import {Component} from 'react'

const MatchImage = props => {
  const {randomImageUrl, randomImageId} = props
  return (
    <div className="random-image-container">
      <img src={randomImageUrl} alt="match" className="random-image" />
    </div>
  )
}

// class MatchImage extends Component {
//   gameRunning = imagesList => {
//     const randomIndex = Math.floor(Math.random() * imagesList.length)
//     const randomImageUrl = imagesList[randomIndex].imageUrl
//     const randomImageId = imagesList[randomIndex].id
//     return {randomImageUrl, randomImageId}
//   }

//   render() {
//     const {imagesList} = this.props
//     const {randomImageUrl, randomImageId} = this.gameRunning(imagesList)
//     return (
//       <div className="random-image-container">
//         <img src={randomImageUrl} alt="match" className="random-image" />
//       </div>
//     )
//   }
// }

export default MatchImage
