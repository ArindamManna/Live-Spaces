function Option(props) {
    return <>
    <div className={props.isActive[props.indx]?
        "option flex-c option_active":"option flex-c"}
    onClick={()=>{
        props.set_isActive({
            ...props.isActive,
            [props.idx]:false,
            [props.indx]:true,
        })
        console.log(props.idx)
        // props.idx=props.indx;
        props.set_idx(props.indx);
    }}
    >{props.name}</div>
    </>
}

export default Option;