import './App.css';
import ButtonTop from "./ButtonTop";

function App() {
    return (
        <div className="App">
            <header style={{
                backgroundColor: '#fff',
                height: 70,
                width: '100vw',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                border: '1px solid #E5E3E8',
                borderTop: 0,
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{width: '20vw'}}
                className='logo'>CollabDev</div>
                <div style={{width: '80vw'}}>
                    <ul style={{display: 'flex', justifyContent: 'center', gap: '1%'}}>
                        <li>
                            <ButtonTop name='HomeIcon' text='Предложения'/>
                        </li>
                        <li>
                            <ButtonTop name='ProfileIcon' text='Профиль'/>
                        </li>
                        <li>
                            <ButtonTop name='TeamsIcon' text='Мои команды'/>
                        </li>
                        <li>
                            <ButtonTop name='ChatsIcon' text='Сообщения'/>
                        </li>
                    </ul>
                </div>
                <div style={{width: '20vw'}}></div>
            </header>
        </div>
    );
}

export default App;
