import { Container, Grid } from "@mui/material"
import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import Mswitch3 from "../components/mui topics/Mswitch3"
import Cards from "../components/Project_Components/Cards/Cards"
import NavBar from "../components/Project_Components/NavBar/NavBar1"
import Slider from "../components/Project_Components/Sliders/Slider"
import img1 from "../static/images/FullStackPro1.png"
import img2 from "../static/images/FullStackPro2.png"
import img3 from "../static/images/FullStackPro3.jpeg"


const Home:React.FC=()=>{
    return (<>
    <Container maxWidth="xl" style={{backgroundColor:'red'}}>
        <Grid>
        <NavBar/>
        </Grid>
        <Grid>
            <Slider img1={img1} img2={img2} img3={img3}/>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
            <Link to ="/Singlepage/1"><Cards img={img1} /></Link>
        
        </Grid>

        <Grid item xs={3}>
        <Link to ="/Singlepage/2"><Cards img={img2} /></Link>
        </Grid>

        <Grid item xs={3}>
        <Link to ="/Singlepage/3"><Cards img={img3} /></Link>
        </Grid>
        
        </Grid>

                
    </Container>.
    <Link to="/Singlepage/1">Single Page</Link>

    </>)
}

export default Home