import Sidebar from '../Sidebar'
import './index.scss';
import Content from '../Content'

const Layout = () => {
    return (
        <div className = "App">  
            <div className='page'>
                <Sidebar /> 
                <Content />
            </div>
        </div>
    )
}

export default Layout