import reactImg from './../assets/react-core-concepts.png';
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandoInt = (max) => {
  return Math.floor(Math.random() * (max+1));
}

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName : 'Schwarzmüller', // feel free to replace the name value
  title    : 'Instructor', // feel free to replace the title value
};

const Header = () => {
    const description = reactDescriptions[genRandoInt(2)];
    return (
    <>
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    </>
    )
}

export default Header
