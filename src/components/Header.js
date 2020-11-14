import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: 'Karachi, Pakistan',
        }
    }
    render() {
        const nav = [
            { ID: 'mobiles', label: 'Mobile Phones' },
            { ID: 'cars', label: 'Cars' },
            { ID: 'motorcycle', label: 'Motorcycles' },
            { ID: 'houses', label: 'Houses' },
            { ID: 'TV-Video-audio', label: 'TV-Video-Audio' },
            { ID: 'tablets', label: 'Tablets' },
            { ID: 'plots', label: 'Land And Plots' }
        ]

        return (
            <React.Fragment>

                <div className='header fixed flex aic'>
                    <div className='logo'>
                        <img src="../images/olxlogo.png" />
                    </div>
                    <div className='location rel flex aic'>
                        <div className='fa fa-search ico s24' />
                        <input type="text" className='label s15 font' name="name" placeholder="Search city, area or local" value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
                        <button className='fa fa-angle-down arro s24' />
                    </div>
                    <div className='search flex aic'>
                        <input type='text' placeholder='Find Cars, Mobilephones and more...' className='query font s15' />
                        <button className='fa fa-search go s24' />
                    </div>
                    <div className='actions flex aic color'>
                        <a href='https://www.olx.com.pk/account' className='fontb s16 noulh ul color'>Login</a>
                        <a href='https://www.olx.com.pk/post'><button className='sell'>
                            <h2 className='s15 fontb'>
                                <div className='fa fa-plus s12' style={{ marginRight: '5px' }} />
                        SELL</h2>
                        </button></a>
                    </div>
                </div>
                <div className='hnav fixed flex aic'>
                    <button className='view-cates flex aic'>
                        <h2 className='s15 fontb'>
                            ALL CATEGORIES
                    </h2>
                        <button className='fa fa-angle-down arro s24' />
                    </button>



                    {/* For Each Loop */}
                    {
                        nav.map(items =>
                            <Link to={'/' + items.ID} className='nul tch color font s15'>{items.label}</Link>
                        )
                    }

                </div>

                

               
            </React.Fragment>





        )
    }
}

export default Header;