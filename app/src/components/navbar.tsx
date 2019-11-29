import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { ComponentProps, ClassesProps } from '../types';

export default function Navbar(props: ComponentProps) {
	const classes: ClassesProps = props.classes;
	const theme = useTheme();
	React.useEffect(() => {console.log(11, window);});
	return (
		<AppBar>
			<Toolbar>
				<Grid container spacing={3}>
					<Grid item xs={1}>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
					</ Grid>
					<Grid item xs={2}>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
					</ Grid>
					<Grid item xs={7} />
					<Grid item xs={2}>
						<Button className={ classes.rigthPosition } color="inherit">Login</Button>
					</ Grid>
				</ Grid>
			</Toolbar>
		</ AppBar>
	);
}
