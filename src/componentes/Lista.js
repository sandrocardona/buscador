export default function Lista(props){
    const l = props.ciudades;
    let obj = props.ciudades.map((e, index)=>{
        return(<li key={index}>{e}</li>)
    })

    return (<><ol>{obj}</ol></>);
}