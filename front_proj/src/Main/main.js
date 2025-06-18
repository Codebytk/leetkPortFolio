import HResource from "./HResource";
import PortFolio from "./ProtFolio";

const MainPage =({ pageType })=>{
    var rtnPage;
    console.log(pageType);
    switch(pageType){
        case "HResource":
            rtnPage = <HResource/>
            break;
        case "PortFolio":
            rtnPage = <PortFolio/>
            break;
        default :
            rtnPage = <div>존재하지 않는 페이지 입니다.</div>
            break;
    }
    return rtnPage;
}
export default MainPage;