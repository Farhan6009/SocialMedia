import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
const List = ({ setitem, setstate, setid }) => {

    const [listItems, setlistItems] = useState([])

    const getItem = async () => {
        const res = await axios.get("http://localhost:5000");
        setlistItems(res.data);
    }

    const editItem = async (_id) => {
        try {
            const res = await axios.get(`http://localhost:5000/${_id}`);
            setitem(res.data.item);
            setstate(true);
            setid(_id);
        } catch (error) {
            console.log(error)
        }

    }
    const deleteItem = async (_id) => {
        const res = await axios.delete(`http://localhost:5000/${_id}`);
        alert(res.data);
    }
    return (
        <>
            <div className="list">
                <Button className="btn" color="success" onClick={getItem}>CheckList</Button>
                <div>
                    {listItems.map((currElem, index) => {
                        return (
                            <div className="listItems">
                                <h3>{currElem.item}</h3>
                                <div className="listbtn">
                                    <button onClick={() => {
                                        deleteItem(currElem._id);
                                    }}>⛔</button>
                                    <button onClick={() => {
                                        editItem(currElem._id);
                                    }}>🖊</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </>
    )
}

export default List
