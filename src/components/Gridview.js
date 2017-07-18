import React from 'react';
import WorkOrders from './WorkOrders';

export class Gridview extends React.Component {

    renderRow(data) {
        console.log(data.status);
        return (

            <div className="container" key={data.id}>
                <h2><b>{data.title}</b></h2>
                <div className="id card-group">
                    <h4><i>Id:</i></h4>
                    <small><i>{data.id}</i></small>
                </div>
                <div className="status card-group">
                    <h4><i>Status:</i></h4>
                    <small><i>{data.status}</i></small>
                </div>
                <div className="address card-group">
                    <h4><i>Address:</i></h4>
                    <p><i>{data.address1}&nbsp;{data.address2}</i></p>
                </div>
                <div className="pay card-group">
                    <h4><i>Pay :</i></h4>
                    <small><i>${data.pay_amount}&nbsp;{data.pay_type}</i></small>
                </div>
                <div className="service-date card-group">
                    <h4><i>Service Date:</i></h4>
                    <small><i>{data.service_date}</i></small>
                    <small><i>{data.service_time}</i></small>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className="card-wrapper">
                {WorkOrders.map((data) => this.renderRow(data))}
            </div>
        )
    }
}