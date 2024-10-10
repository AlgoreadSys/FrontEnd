import { Routes, Route} from 'react-router-dom'
import Profile from '../pages/editProfile';
import User from '../pages/User'
import Report from '../pages/report'
import Home from '../pages/home'
import BanRequest from '../pages/banRequest'
import ReportsPage from '../pages/reportsPage'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/user" element={ <User/>} />
            <Route path='/editProfile' element = {  <Profile/> }/>
            <Route path='/report' element = { <Report/> } />
            <Route path='/banRequest' element = { <BanRequest/> } />
            <Route path='/reportsPage' element = { <ReportsPage/> } />
        </Routes>
    )
}

export default RoutesApp;
