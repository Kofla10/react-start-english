import './TabButton.css'

// const TabButton = ({children}) => {
const TabButton = ({label}) => {
  // console.log(props);

  const handleClick = () => {
    console.log('this is a test');

  }
  return (
    <li>
        <button onClick={ handleClick }>{ label }</button>
    </li>
  )
}

export default TabButton
