import { Grid } from "@mui/material"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Cards from "../components/Project_Components/Cards/Cards"
import img1 from "../static/images/FullStackPro1.png"
import img2 from "../static/images/FullStackPro2.png"
import img3 from "../static/images/FullStackPro3.jpeg"

const Singlepage:React.FC=()=>{
    var {id}=useParams()
    console.log (id)
    return (<>
        <Container>
            <Grid>
                <h1>About Us</h1>
            </Grid>
            <Grid>
                {
                    id==="1"?<Cards img={img1}/>: id==="2"?<Cards img={img2}/>: id==="3"?<Cards img={img3}/>:''
                }
            </Grid>
        </Container>
        </>)
}

export default Singlepage