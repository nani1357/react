
export function Greetf(){
    return <h1>Hello Manoj from func!</h1>
}
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            {props.children}
        </div>
    )
}
export default Greet