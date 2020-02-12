import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// import DisplayItem from './DisplayItem';
import EditProductUI from './EditProductUI';

export default function Product(props) {
    const [state, setstate] = useState({ allData: [] })
    const getAllProduct = async () => {

        const response = await Axios.get("http://localhost:8080/allproduect")
        console.log(response.data.beans);

        setstate({
            ...state,
            allData: response.data.beans
        })
    }
    useEffect(() => {
        getAllProduct()
    }, [])
    const handleShow = (data) => {

        props.handleShow(data)


    }
    return (
        <div>
            {/* {state.allData.map(value=>{
                return <DisplayItem handleShow={handleShow} text={value} />
            })} */}
               <EditProductUI
        data={state.allData}
        // delete={delete}
        // editOption={ed}
        // isEdit={isEdit}
        // handelChange={handelChange}
        // error={state}
        // open={state.open}
        // addData={addData}
        // add={state.add}
        // isAdd={isAdd}


    />
        </div>
    )
}

