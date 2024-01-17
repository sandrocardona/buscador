export default function Lista(props){
    let obj = props.ciudades.map((e, index)=>{
        return(<li key={index}>{e}</li>)
    })

    return (<><ol>{obj}</ol></>);
}