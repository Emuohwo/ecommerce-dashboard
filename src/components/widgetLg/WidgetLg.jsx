import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import { format } from "timeago.js"
import "./widgetLg.css"

export default function WidgetLg() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getOrders();
    }, []);
    console.log(`orders`, orders)

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tbody>
                    {orders.map((order) => (
                        <tr className="widgetLgTr">
                            <td key={order._id} className="widgetLgUser">
                                <span className="widgetLgName">{order.userId}</span>
                            </td>
                            <td className="widgetLgDate">{format(order.createdAt)}</td>
                            <td className="widgetLgAmount">NGN {order.amount}</td>
                            <td className="widgetLgStatus"><Button type={order.status}/></td>
                        </tr>
                    ))}
                </tbody>
                {orders.length === 0 && <>No order yet</>}
            </table>
        </div>
    )
}
