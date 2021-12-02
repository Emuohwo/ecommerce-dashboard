import ListIcon from '@material-ui/icons/List';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "./sidebar.css";
import { CreditCard, Feedback, Message, ReportRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <ListIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem active">
                                <PersonIcon className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <StorefrontIcon className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlinedIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                             <MailOutlineIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon" />
                            Feedbacks
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                             <CreditCard className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportRounded className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}