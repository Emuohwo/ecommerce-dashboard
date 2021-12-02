import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge ">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge ">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}