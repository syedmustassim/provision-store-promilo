import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          About
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Folder Structure:
        </Typography>
        <Grid xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              src="https://i.postimg.cc/bvvVLt5m/folder.png"
              alt="folder"
              sx={{ height: "500px", width: "240px" }}
            />
            <CardContent>
              <Typography>
                This project follows a conventional and basic react project
                folder structure. Key directories include:
              </Typography>
              <Typography sx={{ paddingLeft: "20px" }}>
                <ul>
                  <li>
                    <strong>public/:</strong> This folder contains the public
                    assets.
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>src/: </strong> The main source code directory. It
                    includes, folders for the various React components, the
                    authentication context, pages of the application, the root
                    directory (App.jsx) and the entry point (main.jsx)
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>components/:</strong> This folder contains all the
                    react components used in the website. Each component has its
                    own folder, which houses its .jsx files and .css files.
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong> context/: </strong> Contains the authorization
                    context and provider.
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong> pages/: </strong>Contains all the pages that are a
                    part of the website. Each page has its own folder, which
                    involves the .jsx files and .css files for that particular
                    page.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Typography variant="h5" sx={{marginTop: 2, marginBottom: 1}}>
            Challenges: 
        </Typography>
        <Typography sx={{ paddingLeft: "20px" }}>
            <ul>
                <li><strong>API Integration: </strong> Integrating and handling API calls, and generating access tokens after
                    successful login and to be able to use this to generate the protected routes was a bit of a challenge.
                </li> 
                <li>
                    <strong>Routing and Protected routes: </strong> The integration of access tokens that were generated after logging in 
                    and had to be passed to the products API, to fetch products. 
                </li>
                <li>
                    <strong>Responsive design: </strong> To ensure design consistency and feasibility across different devices. 
                </li>
                <li>
                    <strong>Overall website design: </strong> To come up with a design myself and implement this using Material UI.
                </li>
            </ul>
        </Typography>
        <Typography variant="h5" sx={{marginTop: 2, marginBottom: 1}}>
            Local setup: 
        </Typography>
        <Typography sx={{ paddingLeft: "20px", marginBottom: 2 }}>
            <ul>
                <li>Clone the repository.</li>
                <li>Select the main directory provision-store-promilo. This can be done using the command: <code>cd provision-store-promilo</code>
                </li>
                <li>Install dependencies with: <code>npm install</code></li>
                <li>Start the development server with: <code>npm run dev</code></li>
                <li>Open the live preview of the website on port 3000 or any other port, <code>http://localhost:3000</code></li>
            </ul>
        </Typography>
      </Container>
    </div>
  );
};

export default About;
