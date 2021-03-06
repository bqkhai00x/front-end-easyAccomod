import React, { Component } from "react";
import axios from "axios";

import Nav from '../common/owner_nav'

export default class EditPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            room_type: '',
            rented_rate: '', //vnd per month
            area: '',
            bathroom: false,
            kitchen: false,
            air_con: false,
            water_heater: false,
            electricity: '', //vnd per kwh
            water: '', //vnd per m3
            image: [],
            time: '',
            errors: []
        }

    };


    componentDidMount() {
        axios.get('http://localhost:5000/users/owner/edit/'+this.props.match.params.id, {withCredentials: true})
        .then(res => this.setState({
            id: res.data._id,
            title: res.data.title,
            city: res.data.city,
            district: res.data.district,
            ward: res.data.ward,
            street: res.data.street,
            room_type: res.data.room_type,
            rented_rate: res.data.rented_rate,
            area: res.data.area,
            bathroom: res.data.bathroom,
            kitchen: res.data.kitchen,
            air_con: res.data.air_con,
            water_heater: res.data.water_heater,
            electricity: res.data.electricity, 
            water: res.data.water, 
            image: res.data.image
        }))

        .catch(err => console.log(err));
        
    }


    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <br />
                    {
                        this.state.errors.map((err, index) =>
                            <div className='alert alert-danger' key={index}>{err}</div>)
                    }
                    <form action="" method="POST" encType="multipart/form-data" onSubmit={this.onSubmit}>
                        <div className="form-group"><label htmlFor="Title">Title</label>
                            <input className="form-control" id="title" type="text" name="title" 
                            value={this.state.title} onChange={this.onChangeTitle} /></div>
                        <div className="form-group"><label htmlFor="city">City</label>
                            <input className="form-control" id="city" type="text" name="city"
                            value={this.state.city} onChange={this.onChangeCity} /></div>
                        <div className="form-group"><label htmlFor="district">District</label>
                            <input className="form-control" id="district" type="text" name="district"
                            value={this.state.district} onChange={this.onChangeDistrict} /></div>
                        <div className="form-group"><label htmlFor="ward">Ward</label>
                            <input className="form-control" id="ward" type="text" name="ward" 
                            value={this.state.ward} onChange={this.onChangeWard} /></div>
                        <div className="form-group"><label htmlFor="street">Street</label>
                            <input className="form-control" id="street" type="text" name="street" 
                            value={this.state.street} onChange={this.onChangeStreet} /></div>
                        <div className="form-group"><label htmlFor="room_type">Room Type</label>
                            <input className="form-control" id="room_type" type="text" name="room_type" 
                            value={this.state.room_type} onChange={this.onChangeRoomType} /></div>
                        <div className="form-group"><label htmlFor="rented_rate">Rented Rate</label>
                            <input className="form-control" id="rented_rate" type="number" name="rented_rate" 
                            value={this.state.rented_rate} onChange={this.onChangeRentedRate} /></div>
                        <div className="form-group"><label htmlFor="area">Area</label>
                            <input className="form-control" id="area" type="number" name="area" 
                            value={this.state.area} onChange={this.onChangeArea} /></div>
                        <div className="form-group"><label htmlFor="bathroom">Bathroom</label>
                            <input className="form-control" id="bathroom" type="checkbox" name="bathroom"
                            value={this.state.bathroom} onChange={this.onChangeBathroom} /></div>
                        <div className="form-group"><label htmlFor="kitchen">Kitchen</label>
                            <input className="form-control" id="kitchen" type="checkbox" name="kitchen" 
                            value={this.state.kitchen} onChange={this.onChangeKitchen} /></div>
                        <div className="form-group"><label htmlFor="air_con">Air Conditioner</label>
                            <input className="form-control" id="air_con" type="checkbox" name="air_con" 
                            value={this.state.air_con} onChange={this.onChangeAirCon} /></div>
                        <div className="form-group"><label htmlFor="water_heater">Water Heater</label>
                            <input className="form-control" id="water_heater" type="checkbox" name="water_heater" 
                            value={this.state.water_heater} onChange={this.onChangeWaterHeater} /></div>
                        <div className="form-group"><label htmlFor="electricity">Electricity</label>
                            <input className="form-control" id="electricity" type="number" name="street" 
                            value={this.state.electricity} onChange={this.onChangeElectricity} /></div>
                        <div className="form-group"><label htmlFor="water">Water</label>
                            <input className="form-control" id="water" type="number" name="water" 
                            value={this.state.water} onChange={this.onChangeWater} /></div>
                        <div className="form-group"><label htmlFor="time">Time</label>
                            <input className="form-control" id="time" type="number" name="time" 
                            value={this.state.time} onChange={this.onChangeTime} /></div>
                        <div className="form-group"><label htmlFor="image">Image</label>
                            <input className="" id="image" type="file" name="image" accept="image/*" multiple 
                            onChange={this.onChangeImage} /></div>
                        <button className="btn btn-primary">Commit</button>
                    </form>
                </div>
            </div>
        )
    }
}