import './TabButton.css'

const TabButton = (props) => {
    console.log(props);
    
  return (
    <li>
        <button>{ props.children }</button>
    </li>
  )
}

export default TabButton
