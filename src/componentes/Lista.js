export default function Lista(props){
    const l = props.ciudades;
    let obj = props.ciudades.map(e=>{
        return(<li>{e}</li>)
    })

    return (<><ol>{obj}</ol></>);
}