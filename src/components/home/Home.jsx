import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserUI from './UserUI'
import { withRouter } from 'react-router-dom'

function Home(props) {

    const [state, setstate] = useState({
        allData: [{
            customer: [
                {

                }, {

                }
            ],
            partner:[]
        }, {
            customer: [
                {

                }, {

                }
            ],
            partner:[]
        }, {
            customer: [],
            partner:[]
        }]
    })

    useEffect(() => {
        getAllAccount()
    }, [])
    let getAllAccount = async () => {
        try {
            const url = 'http://localhost:8080/partners'

            let response = await Axios.get(url)
            console.log('asdjgfjfjhfhfhg', response.data);


            let newData = []
            for (const key in response.data.partner) {
                newData.push({
                    ...response.data.partner[key],
                    done: false,
                })
            }
           
            
            if (response.status === 200) {
                setstate({
                    ...state,
                    allData: newData
                })

            }
        } catch (error) {

        }

    }
    const viewCustomer = (data) => {
        props.setCustomerData(data)
        props.history.push("/customer")
    }
    const viewPartner = (data) => {
        props.setPartnerData(data)
        props.history.push("/partner")
    }
    return (
        <>
            <div className="container mt-3 mt-5">
                <UserUI data={state.allData} 
                viewCustomer={viewCustomer}
                viewPartner={viewPartner} />
            </div>
        </>
    )
}
export default withRouter(Home) 