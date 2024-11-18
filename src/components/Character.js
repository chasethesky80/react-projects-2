export default function Character(props) {
    const text = `Origin ${props.origin ? props.origin.name : ''}`
    return (
    <div className="col-3">
        <div className="card">
            <img src={props.image} alt={props.name} width='300'/>
        </div>
        <div className="card-body">
            <h3>{props?.name}</h3>
            <p>{text}</p>
        </div>
    </div>)
}