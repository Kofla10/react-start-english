import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';
import {CORE_CONCEPTS} from './data/data';

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

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* <TabButton test='camilo'>Components</TabButton> */}
            <TabButton label='Componente'/>
            <TabButton label='JSX'/>
            <TabButton label='Props'/>
            <TabButton label='State'/>
          </menu>
        </section>

      </main>
    </div>
  );
}

export default App;



