import { Routes, Route } from 'react-router-dom';
import { router } from './routes/index';
import { Layout } from './pages/index';



function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout hideHeaderPaths={['/login' , '/signup', '/forgot-password', '/reset-password']} />}>
                    {router.map((route, index) => {
                        return <Route key={index} path={route.path} element={<route.component />}></Route>;
                    })}
                </Route>
            </Routes>
        </>
    );
}

export default App;
