import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
        <div className = "App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <span className='tags bottom-tags'>
                &lt;/body&gt;
                <span className='bottom-tag-html'>&lt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout