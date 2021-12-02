import { Visibility } from "@material-ui/icons"
import { useEffect } from "react";
import { useState } from "react"
import { userRequest } from "../../requestMethod";
import "./widgetSm.css"

export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users?new=true");
                setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getUsers();
    }, []);
    console.log(`users`, users)

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                {users?.map(user => (
                <li key={user._id} className="widgetSmListItem">
                    <img 
                      className="widgetSmImg"
                      src={user.img ? user.img : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300"} 
                      alt="" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                        {/* <span className="widgetSmUserTitle">{user.name}</span> */}
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
