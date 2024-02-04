function Actions({desc, value}) {
    return (
        <div style={{fontSize: "25px", display: 'flex', paddingLeft: "10px"}}>
            <span style={{marginLeft: "5px", width: "55%", textAlign: "left"}}>{desc}</span><span style={{marginRight: "5px", width: "40%", textAlign: "right"}}>{value}</span>
        </div>
    )
}

export default Actions;