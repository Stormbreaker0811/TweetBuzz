import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomLinks from './CustomLinks';
import Sidebaroptions from './Sidebaroptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreIcon from '@mui/icons-material/More';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import DoneIcon from '@mui/icons-material/Done';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar } from '@mui/joy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import useLoggedInUser from '../../hooks/useLoggedInUser';



const Sidebar = ({ handleLogout, user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loggedInUser] = useLoggedInUser();

    const navigate = useNavigate();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const result = user?.email?.split('@')[0];

    return (
    <div className='sidebar'>
        <TwitterIcon className='sidebarTwitter' />
        <CustomLinks to='/home/feed'>
            <Sidebaroptions active Icon={HomeIcon} text='Home' />
        </CustomLinks>
        <CustomLinks to='/home/explore'>
            <Sidebaroptions Icon={SearchIcon} text='Explore' />
        </CustomLinks>
        <CustomLinks to='/home/notifications'>
            <Sidebaroptions Icon={NotificationsNoneIcon} text='Notifications' />
        </CustomLinks>
        <CustomLinks to='/home/messages' >
            <Sidebaroptions Icon={MailOutlineIcon} text='Messages' />
        </CustomLinks>
        <CustomLinks to='/home/bookmarks'>
            <Sidebaroptions Icon={BookmarkBorderIcon} text='BookMarks' />
        </CustomLinks>
        <CustomLinks to='/home/lists'>
            <Sidebaroptions Icon={ListAltIcon} text='Lists'/>
        </CustomLinks>
        <CustomLinks to='/home/profile'>
            <Sidebaroptions Icon={PermIdentityIcon} text='Profile' />
        </CustomLinks>
        <CustomLinks to='/home/more'>
            <Sidebaroptions Icon={MoreIcon} text='More' />
        </CustomLinks>
        <Button variant='outlined' className='tweetBtn' fullWidth>
            Tweet
        </Button>
        <div className="ProfileInfo">
            <Avatar src={loggedInUser[0]?.profileImage ? loggedInUser[0].profileImage : <AccountCircleIcon />} />
            <div className="user">
                <h4>
                    {loggedInUser[0]?.name ? loggedInUser[0].name : user && user.displayName}
                </h4>
                <h5>@{result}</h5>
            </div>
            <IconButton size='small'
            sx={{ ml: 2 }} aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}><MoreHorizIcon /></IconButton>
            <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                <MenuItem className='Profile' onClick={() => navigate('/profile')} >
                <Avatar src={loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : <AccountCircleIcon />} />
                <div className="user subUser">
                    <div>
                        <h4>
                            {loggedInUser[0]?.name ? loggedInUser[0].name : user && user.displayName}
                        </h4>
                        <h5>@{result}</h5>
                    </div>
                    <ListItemIcon className='done' color='blue'><DoneIcon /></ListItemIcon>
                </div>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Add an Existing Account</MenuItem>
                <MenuItem onClick={handleLogout}>LogOut @{result} </MenuItem>
            </Menu>
        </div>
    </div>
    )
}

export default Sidebar
