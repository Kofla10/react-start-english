import { useState } from 'react';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';
import {CORE_CONCEPTS} from './data/data';
import {EXAMPLES} from './data/data';

function App() {

  const [selectTopict, setSelectTopict] = useState('');

  const handleselect = (selectedButton)  => {
    setSelectTopict(selectedButton);
  }

    // console.log(EXAMPLES[selectTopict])
    // const {title, description, code} = EXAMPLES[selectTopict];

  return (
    <div>
      <Header/>
      <main>
        <section id = 'core-concepts' className = '#core-concepts' >
        <h2>Core Concepts!</h2>
        <ul>
          {
            CORE_CONCEPTS.map( data =>(
              <CoreConcept key = {data.id} {...data}/>
            ))
          }
          {/* <CoreConcept img ='' title='Camilo' description = 'this is a test'/> */}
        </ul>
        </section>

        <section id = 'examples'>
          <h2>Examples</h2>
          <menu>
            {/* <TabButton test='camilo'>Components</TabButton> */}
            <TabButton onSelect = { () => handleselect('components') } label = 'Componente'/>
            <TabButton onSelect = { () => handleselect('jsx') } label        = 'JSX'/>
            <TabButton onSelect = { () => handleselect('props') } label      = 'Props'/>
            <TabButton onSelect = { () => handleselect('state') } label      = 'State'/>
          </menu>
          {!selectTopict ? <p>Please select a topic.</p>: null}
          {selectTopict ?<div className = 'tab-context'>
            <h3>{EXAMPLES[selectTopict].title}</h3>
            <p>{EXAMPLES[selectTopict].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectTopict].code}
              </code>
            </pre>
          </div>:null}
        </section>
      </main>
    </div>
  );
}

export default App;



