import React from 'react';
import swAlert from '@sweetalert/with-react';
import {useNavigate} from 'react-router-dom';

function Buscador () {
    const history = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
          /*.trim para sacar los espacios del principio y el final*/
        if(keyword.length === 0) {
            swAlert(<h5>Tienes que escribir una palabra</h5>);
        } else if(keyword.length <4) {
            swAlert(<h5>Tienes que escrbir más de cuatro carácteres</h5>);
        } else {
            e.currentTarget.keyword.value = '';
            history(`/resultados?keyword=${keyword}`);
        }
    }
    
 return (
        <form className='d-flex align-items-center' onSubmit={submitHandler}>
        <label className='form-label mb-0 mx-2'>
            <input type="text" name="keyword" className="form-control" placeholder='Buscar...'/>
        </label>
        <button className="btn btn-dark ml-2" type="submit">Buscador</button>
    </form>
 )
}

export default Buscador;