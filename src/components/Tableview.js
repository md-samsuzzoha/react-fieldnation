import React from 'react';
import WorkOrders from './WorkOrders';

export class Tableview extends React.Component {
    colorfulStatus(data) {

        switch (data) {
            case "Published": return (<span className="text-published" id="status">{data}</span>);
            case "Routed": return (<span className="text-routed" id="status">{data}</span>);
            case "Work Done": return (<div className="text-work-done" id="status">Work <br /> Done</div>);
            case "Draft": return (<span className="text-draft" id="status">{data}</span>);
            default: return (<span className="text-default" id="status">{data}</span>);
        }

    }

    renderRow(data) {
        console.log(data.status);
        return (

            <tr key={data.id}>
                <td>
                    {data.title}
                </td>
                <td>
                    {data.id}
                </td>
                <td>
                    {this.colorfulStatus(data.status)}

                </td>
                <td>
                    {data.address1}&nbsp;{data.address2}
                </td>
                <td>
                    ${data.pay_amount}&nbsp;{data.pay_type}
                </td>
                <td>
                    {data.service_date}<br />
                    {data.service_time}
                </td>
            </tr>

        )
    }

    render() {
        return (

            <div className="table-wrapper">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Id</th>
                                <th>Status</th>
                                <th>Location</th>
                                <th>Pay</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            {WorkOrders.map((data) => this.renderRow(data))}
                        </tbody>


                    </table>
                </div>
            </div>
        )
    }
}