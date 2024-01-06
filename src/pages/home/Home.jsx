import { Container, Typography, Grid, Box } from "@mui/material";
import Login from "../../components/login/Login";
import '../../index.css'

const Home = () => {
    return(
        <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center" height="100vh">
            <Grid item xs={12} sm={6}>
                <Box>
                    <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" alt="logo" style={{width: "100%"}}/>
                </Box>
                <Typography variant="h6" sx={{textAlign: "center"}}>
                    We are an E-shop website which is a virtual provision marketplace where
                    you can buy various types of provision products.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{alignItems: "center"}}>
                <Login/>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Home;