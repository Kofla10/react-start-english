import './TabButton.css'

// const TabButton = ({children}) => {
const TabButton = ({label, onSelect}) => {
  // console.log(props);
  console.log('TABBUTTON COMPONENT EXWCUTING');
  
  const handleClick = () => {
    console.log('this is a test');

  }
  return (
    <li>
        <button onClick={ onSelect }>{ label }</button>
    </li>
  )
}

export default TabButton
