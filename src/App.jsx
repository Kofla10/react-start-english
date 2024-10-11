import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data/data';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandoInt = (max) => {
  return Math.floor(Math.random() * (max+1));
}

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
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

const CoreConcept = ({title = 'Whitout Title', description = 'Without Description', img}) => {
  return <>
    <li>
      <img src={img} alt="..." />
      <h3>{ title }</h3>
      <p> {description}</p>
    </li>
  </>
}

function App() {

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts' className='#core-concepts' >
        <h2>Core Concepts!</h2>
        <ul>
          {
            CORE_CONCEPTS.map( data =>(
              <CoreConcept key={data.id} {...data}/>
            ))
          }
          {/* <CoreConcept img ='' title='Camilo' description = 'this is a test'/> */}
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;