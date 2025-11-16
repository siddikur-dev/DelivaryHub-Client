
import { Outlet } from 'react-router';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
               <NavBar/>
            </header>
            <main className='min-h-[calc(100vh-300px)]'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;