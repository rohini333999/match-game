import './index.css'

const ImageItem = props => {
  const {imageDetails, changeScore} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails
  const onclickImage = () => {
    console.log('click')
    changeScore(id)
  }
  return (
    <li>
      <div className="thumbnail-image-container">
        <button
          type="button"
          className="thumbnail-image-button"
          onClick={onclickImage}
        >
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        </button>
      </div>
    </li>
  )
}

export default ImageItem
