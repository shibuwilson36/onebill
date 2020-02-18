import React, { Component } from 'react'
import Axios from 'axios'
import CustomerUI from '../customer/CustomerUI'
import LoginModel from '../login-model/LoginModel'

export default class View extends Component {

    state = {
        allData:[],
        account: [],
        show: false,
        customerId: '',
        name: "",
        email:"",
        dateOfBirth:"",
        mobile:'',
        houseName:'',
        state:'',
        city:'',
        country:'',
        pin:'',
        conection: false,
        nameError: false,
        emailError: false,
        mobileError: false,
        dateOfBirthError: false,
        open: {
            open: false,
            message: ''
        },
        add: false
    }
    componentDidMount() {     
       this.setState({
        account:this.props.partner.partner.filter(value=>!value.status),
        allData:this.props.partner
       })
    }

    delete = async (accToDelete) => {

        const url = 'http://localhost:8080/partner/' + accToDelete.partnerId
        try {
            const response = await Axios.delete(url)
            console.log("response", response);
            if (response.status === 200) {
                const myAccount = [...this.state.account]
                const index = myAccount.indexOf(accToDelete)
                myAccount.splice(index, 1)
                this.setState({
                    account: myAccount
                })
            }

        } catch (error) {
            console.log(error);

        }
    }
   

    handelChange = (event) => {
        const value = event.target.value
        console.log(value);

        this.setState({
            [event.target.name]: value
        })


    }
    validateData = (accToUpdates) => {
        let valid = true
        const { name, email, mobile, dateOfBirth } = accToUpdates

        console.log(name.trim().length);

        if (dateOfBirth.trim().length === 0) {
            valid = false
            this.setState({
                dateOfBirthError: true,
                show: false
            })
        } else {
            this.setState({
                dateOfBirthError: false,

            })
        }
        if (email.trim().length === 0||!(/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            valid = false
            this.setState({
                emailError: true,
                show: false
            })
        } else {
            this.setState({
                emailError: false,

            })
        }
        if (name.match(/[0-9]/) || name.trim().length === 0) {
            valid = false
            this.setState({
                nameError: true,
                show: false
            })
        } else {
            this.setState({
                nameError: false,

            })
        }
        if (mobile.toString().match(/[a-z]/) || mobile.toString().trim().length === 0) {
            valid = false
            this.setState({
                mobileError: true,
                show: false
            })
        } else {
            this.setState({
                mobileError: false,

            })
        }

        return valid
    }
    saveData = async (oldData, accToUpdates) => {
        const {  name, email, mobile, dateOfBirth,houseName,state,city,country,pin} = accToUpdates
        const accToUpdate = {
            partnerId:oldData.partnerId,
            name: name,
            email: email,
            mobile: mobile,
            dateOfBirth: dateOfBirth,
            address:{
                houseName:houseName,
                state:state,
                city:city,
                country:country,
                pin:pin
            }
        }
        console.log("jhj", accToUpdate);
        if (this.validateData(accToUpdates)) {
            accToUpdates.edit = false
            let data = this.state.account
            data[data.indexOf(oldData)] = accToUpdates;
            console.log("kjhj", data);

            try {

                const url = 'http://localhost:8080/partner'
                const response = await Axios.put(url, accToUpdate)
                console.log(response);
                console.log(this.state);

                if (response.data.statusCode === 201) {

                    this.setState({
                        account: data,
                        nameError: false,
                        conection: true,
                        show: false
                    })

                }else{
                    this.setState({
                        conection: true,
                        show: false
                    })
                }


            } catch (error) {

            }
        }


    }


    editOption = oldData => {
        let newData = { ...oldData }
        newData.edit = true
        let data = this.state.account
        data[data.indexOf(oldData)] = newData;
        this.setState({
            account: data
        })

    }
    isEdit = (oldData, change) => {
        let newOldData = { ...oldData }
        if (change) {
            this.setState({
                show: true,
                conection: false
            })
            const { name, email, mobile, dateOfBirth,houseName,state,city,country,pin,partnerId} = this.state
            const accToUpdate = {
                name, email, mobile, dateOfBirth,houseName,state,city,country,pin,partnerId
            }
            for (const key in accToUpdate) {
                if (accToUpdate[key] !== '') {
                    newOldData[key] = accToUpdate[key]
                }
            }
          
            let newData = { ...newOldData }

            console.log(oldData);
            console.log(newData);


            this.saveData(oldData, newData)

        } else {
            let newData = { ...oldData }
            newData.edit = false
            console.log(oldData);

            let data = this.state.account
            data[data.indexOf(oldData)] = newData;
            this.setState({
                account: data,
                priceError: false,
                nameError: false
            })
        }


    }
    addData = async (value) => {
        this.setState({
            show: true,
            conection: false
        })
        if (value) {
          
            const { name, email, mobile, dateOfBirth,houseName,state,city,country,pin} = this.state

            const formData = {
                name: name,
                email: email,
                mobile: mobile,
                dateOfBirth: dateOfBirth,
                address:{
                    houseName:houseName,
                    state:state,
                    city:city,
                    country:country,
                    pin:pin
                }

            }
            const id=this.state.allData.partnerId

            let account = [...this.state.account]
            account.unshift(formData)
            if (this.validateData(formData)) {
                const response = await Axios.post("http://localhost:8080/partners/partner/"+id, formData)
                console.log(response);
                if(response.data.statusCode === 201){
                    this.setState({
                        account: account,
                        add: false,
                        conection: true,
                        show: false
                    })

                }else{
                    this.setState({
                        add: false,
                        conection: true,
                        show: false
                    })
                }
            }
        } else {
            this.setState({
                add: false
            })
        }
    }
    isAdd = () => {
        console.log("ooihugyfgf");

        this.setState({
            add: true
           
        })
    }
    searchByName =async (event) => {
       
        event.preventDefault()
       let name= event.target.value
       console.log(name);
       
        const response =await Axios.get("http://localhost:8080/search?name=" + name)
        console.log(response);
        this.setState({
            account:response.data.beans
        })

    }
    render() {
        return (
            <div className="container  mt-5  ">
                <div className="mt-5  ">
                    <CustomerUI
                        data={this.state.account}
                        delete={this.delete}
                        editOption={this.editOption}
                        isEdit={this.isEdit}
                        handelChange={this.handelChange}
                        error={this.state}
                        open={this.state.open}
                        addData={this.addData}
                        add={this.state.add}
                        isAdd={this.isAdd}
                        searchByName={this.searchByName}

                    />
                  
                </div>
                {this.state.show ?
                        <LoginModel action={"Added"} conection={this.state.conection} />
                        : null
                    }
            </div>
        )
    }
}
