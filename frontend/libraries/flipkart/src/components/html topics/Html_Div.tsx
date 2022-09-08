import styled from "styled-components"
const MyDiv=styled.div`
background-color:blue;
height:200px;
width:200px;
`

const MyDiv2=styled(MyDiv)`
background-color:green;
`
// // const Myh1=styled.h1`
// // background-color:red;
// `

const Myh1=styled.h1<IHtml_Div>`
background-color:${(props)=>props.Data1?'green':'red'};
color:${(props)=>props.mycolor};
`
interface IHtml_Div{
    Data1?:boolean;
    mycolor?:string
}


const Html_Div:React.FC=()=>{
    var mystyle={color:'red', width:'200px',height:'200px',backgroundColor:'yellow'}
    return (<>
    <div style={mystyle}>I an block in react</div>
    <MyDiv>Hello</MyDiv>
    <Myh1 Data1>Hi There</Myh1>
    <Myh1 mycolor="pink">Hi There</Myh1>
    <Myh1 mycolor="yellow">Data1</Myh1>
    <MyDiv2>New Box Under Inheritence Topic</MyDiv2>
    </>)
}
export default Html_Div

