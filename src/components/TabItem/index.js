import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onclickTab = () => {
    getActiveTab(tabId)
  }
  const isActiveClass = isActive ? 'active-class' : ''

  return (
    <li>
      <div className="tab-container">
        <button
          type="button"
          className={`tab-button ${isActiveClass}`}
          onClick={onclickTab}
        >
          {displayText}
        </button>
      </div>
    </li>
  )
}

// class TabItem extends Component {
//   state = {isActiveId: tabsList[0].tabId}

//   onclickTab = tabId => {
//     console.log(tabId.target.value)
//     this.setState({isActiveId: tabId})
//   }

//   render() {
//     const {isActiveId} = this.state
//     const isActiveClass = ''
//     return (
//       <ul className="tab-list">
//         <li key={tabsList[0].tabId}>
//           <div className="tab-container">
//             <button
//               type="button"
//               className={`tab-button ${isActiveClass}`}
//               onClick={this.onclickTab}
//             >
//               {tabsList[0].displayText}
//             </button>
//           </div>
//         </li>
//         <li key={tabsList[1].tabId}>
//           <div className="tab-container">
//             <button
//               type="button"
//               className={`tab-button ${isActiveClass}`}
//               onClick={this.onclickTab}
//             >
//               {tabsList[1].displayText}
//             </button>
//           </div>
//         </li>
//         <li key={tabsList[2].tabId}>
//           <div className="tab-container">
//             <button
//               type="button"
//               className={`tab-button ${isActiveClass}`}
//               onClick={this.onclickTab}
//             >
//               {tabsList[2].displayText}
//             </button>
//           </div>
//         </li>
//       </ul>
//     )
//   }
// }

export default TabItem
