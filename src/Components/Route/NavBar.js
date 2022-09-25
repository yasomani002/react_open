import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";

const useStyle = makeStyles({
   root: {
       width: 'auto',
       height: '10vh',
       display:'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
       backgroundColor: '#c38d9e',
       padding: '10px',
       boxSizing:'border-box'
   },
   navBarLink: {
       textDecoration:'none',
       color:"#000000",
       padding:'0 10px'
   }
})

export default function NavBar () {
    const classes = useStyle()
    return(
        <>
        <Grid className={classes.root}>
        <div className={classes.div}>Logo</div>
        <nav className={classes.navBar}>
            <Link className={classes.navBarLink} to="/">Home</Link>
            <Link className={classes.navBarLink} to="/service">Service</Link>
            <Link className={classes.navBarLink} to="/contact">Contact</Link>
        </nav>
        </Grid>
        </>
    )
}