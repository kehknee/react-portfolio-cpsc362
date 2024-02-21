import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom'
import Blobity from 'blobity'

const options = { 
                dotColor: 'rgb(255, 165, 0)',
                dotSize: 5,
                size: 30
            };
new Blobity(options);
const blobity = new Blobity();
blobity.bounce();

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className = 'tags bottom-tags'>
            &lt;/body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout