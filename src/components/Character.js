export default function Character(props) {
    const text = `Origin ${props.origin ? props.origin.name : ''}`
    return (
    <div>
        <h3>{props?.name}</h3>
        <img src={props.image} alt={props.name} width='300'/>
        <p>{text}</p>
    </div>)
}