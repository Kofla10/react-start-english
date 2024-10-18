
import './CoreConcept.css'
const CoreConcept = ({title = 'Whitout Title', description = 'Without Description', img}) => {
    return <>
        <li>
            <img src={img} alt="..." />
            <h3>{ title }</h3>
            <p> {description}</p>
        </li>
    </>
}

export default CoreConcept
