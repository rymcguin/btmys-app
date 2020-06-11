import React from "react";
import PropTypes from "prop-types";
import Link from '@material-ui/core/Link';
//mui 
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//icons
import MenuBookIcon from "@material-ui/icons/MenuBook";
import GroupIcon from "@material-ui/icons/Group";
//import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const SideDrawer = ({ open, setOpen }) => {
	const items = [
	  { text: "Book of the Day", icon: <MenuBookIcon />, link: "/" },
	  { text: "Library", icon: <LibraryBooksIcon />, link: "/library" },
	//   { text: "Search Menu", icon: <SearchIcon />, link: "/search" },
	  { text: "About Us", icon: <GroupIcon />, link: "/about" },
	  
	  
	];
  
	return (
	  <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
		<List>
		  {items.map((item) => (
			<ListItem key={item.text} button component={Link} href={item.link}>
			  <ListItemIcon>{item.icon}</ListItemIcon>
			  <ListItemText primary={item.text} />
			</ListItem>
		  ))}
		</List>
	  </Drawer>
	);
  };
  
  SideDrawer.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
  };
  
  export default SideDrawer;