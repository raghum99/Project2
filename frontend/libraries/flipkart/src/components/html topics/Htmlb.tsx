// export const Htmlb_h1:React.FC=()=>{
//     return(<h1>Hello am react header 1</h1>)
// }
export const Htmlb_h2:React.FC=()=>{
    return(<h2>Hello am react header 2</h2>)
}
export const Htmlb_h3:React.FC=()=>{
    return(<><h1>Hello am react header 1</h1><h3>Hello am react header 3</h3></>)
}
export const Htmlb_img:React.FC=()=>{
    return((<img src="" alt="" />))
}
export const Htmlb_aside:React.FC=()=>{
    return(<aside>Aside:Represents a piece of content that is only slightly related to the rest of the page.</aside>)
}
export const Htmlb_article:React.FC=()=>{
    return(<article>Article:Represents an independent piece of content of a document, such as a blog entry or newspaper article</article>)
}
interface IHtmlb_h1{
    a:string
}
export const Htmlb_h1:React.FC<IHtmlb_h1>=(a)=>{
    return(<h1>{a.a}</h1>)
}
function h1(a:any){
    return a
}
h1 ("kjfbgouwg")
const Htmlb:React.FC=()=>{
    return(<>
    <Htmlb_h1 a={"hi raghu"}/>
    <Htmlb_h2/>
    <Htmlb_h3/>
    <Htmlb_article/>
    <Htmlb_aside/>
    <button>Click Here</button>
    </>)
}
export default Htmlb