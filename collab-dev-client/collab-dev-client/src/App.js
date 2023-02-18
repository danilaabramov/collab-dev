import './App.css';
import ButtonTop from "./components/ButtonTop";
import HomePage from "./pages/HomePage";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <header>
                <div style={{width: '20vw'}}>
                    <div className='logo'>CollabDev</div>
                </div>
                <div className='button-container-style'>
                    <Link to='/home'>
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
                <div className='container-style'>
                </div>
            </header>

            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/profile" element={<HomePage/>}/>
                <Route path="/my-teams" element={<HomePage/>}/>
                <Route path="/messages" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}


export default App;


