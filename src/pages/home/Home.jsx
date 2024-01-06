import { Container, Typography, Grid, Box } from "@mui/material";
import Login from "../../components/login/Login";
import '../../index.css'

const Home = () => {
    return(
        <Container>
            <Grid container spacing={4} alignItems="center" justifyContent="center" height="100vh">
            <Grid item xs={6}>
                <div>
                <Box>
                    <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" alt="logo" style={{width: "100%"}}/>
                </Box>
   
                </div>
            </Grid>
            <Grid item xs={6} style={{alignItems: "center"}}>
                <Login/>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Home;