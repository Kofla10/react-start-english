import './TabButton.css'

// const TabButton = ({children}) => {
const TabButton = ({label, onSelect, isSelected}) => {
  // console.log(props);
  console.log('TABBUTTON COMPONENT EXWCUTING');
  
  const handleClick = () => {
    console.log('this is a test');

  }
  return (
    <li>
        <button className={isSelected ? 'active': undefined} onClick={ onSelect }>{ label }</button>
    </li>
  )
}

export default TabButton
