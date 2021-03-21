import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    const keyHandler =e=>{
        if(e.key === 'Enter'){
            e.shiftKey?props.handleSearch():props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    
    return (
        <div className="todoForm" role='form'>
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input type="text" id="description" className="form-control" placeholder='Adicione ou pesquise uma tarefa' value={props.description} onChange={props.handleChange}
                onKeyUp={keyHandler}
                />

            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
            </div>
        </div>
    )
}