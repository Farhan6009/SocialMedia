import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

const Input = ({ setitem, item, state, id, setstate }) => {

    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000", { item });
            alert(res.data);
            setitem("");
        } catch (error) {
            console.log(error);
        }

    }
    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/${id}`, { item });
            alert(res.data);
            setitem("");
            setstate(false);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="input">
            <input type="text" value={item} onChange={(e) => {
                setitem(e.target.value);
            }} />{state ? <button onClick={updateItem} className="btn">🖊</button> : <Button className="btn" color="secondary" onClick={addItem}>➕</Button>}

        </div>
    )
}

export default Input
