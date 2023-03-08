import {useEffect, useState} from "react";
import './App.css';
import ButtonTop from "./components/ButtonTop";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import MenuIcon from "./icons/menu";
import {Routes, Route, Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProjects, fetchAllSkills, fetchAllTypes} from "./redux/slices/projects"
import AddProjectPage from "./pages/AddProjectPage";

function App() {
    const {newProject} = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTypes());
        dispatch(fetchAllSkills());
    }, []);

    useEffect(() => {
        dispatch(fetchAllProjects());
    }, [newProject.items]);


    const [activeBar, setActiveBar] = useState(false)
    return (<div className='App'>
        <header className={activeBar && 'active-header'}>
            <div className='header-container'>
                <div className='container-style'>
                    <Link to='/' onClick={() => setActiveBar(a => !a)}>
                        <div className='logo'>CollabDev</div>
                    </Link>
                </div>
                <div className='button-container-style'>
                    <Link to='/'>
                        <ButtonTop name='HomeIcon' text='Предложения'/>
                    </Link>
                    <Link to='/profile'>
                        <ButtonTop name='ProfileIcon' text='Профиль'/>
                    </Link>
                    <Link to='/my-teams'>
                        <ButtonTop name='TeamsIcon' text='Мои команды'/>
                    </Link>
                    <Link to='/messages'>
                        <ButtonTop name='ChatsIcon' text='Сообщения'/>
                    </Link>
                </div>
                <div className='container-style'
                     style={{justifyContent: 'right', display: 'flex', paddingRight: 20, cursor: 'pointer'}}>
                    <Link className='button-right-header' to='/add-project'>
                        <ButtonTop name='AddProject' text=''/>
                    </Link>
                    <div className='menu' onClick={() => setActiveBar(a => !a)}>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
            <div className={activeBar ? 'top-active-mobile-buttons' : 'top-mobile-buttons'}
                 style={{}}>

                <div style={{width: 200}}>
                    <Link to='/' onClick={() => setActiveBar(a => !a)}>
                        <ButtonTop name='HomeIcon' text='Предложения'/>
                    </Link>
                    <Link to='/profile' onClick={() => setActiveBar(a => !a)}>
                        <ButtonTop name='ProfileIcon' text='Профиль'/>
                    </Link>
                    <Link to='/my-teams' onClick={() => setActiveBar(a => !a)}>
                        <ButtonTop name='TeamsIcon' text='Мои команды'/>
                    </Link>
                    <Link to='/messages' onClick={() => setActiveBar(a => !a)}>
                        <ButtonTop name='ChatsIcon' text='Сообщения'/>
                    </Link>
                    <Link to='/add-project' onClick={() => setActiveBar(a => !a)}>
                        <ButtonTop name='AddProject' text='Создать проект'/>
                    </Link>
                </div>
            </div>
        </header>

        <main>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/profile" element={<RegistrationPage/>}/>
                <Route path="/my-teams" element={<HomePage/>}/>
                <Route path="/messages" element={<div/>}/>
                <Route path="/add-project" element={<AddProjectPage/>}/>
            </Routes>
        </main>
    </div>);
}

export default App;


