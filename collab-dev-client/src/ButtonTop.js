import {useState} from 'react';
import HomeIcon from "./icons/home";
import ProfileIcon from "./icons/profile";
import ChatsIcon from "./icons/chats";
import TeamsIcon from "./icons/teams";

function Home({name, text}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='button-top'
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            {
                name === 'HomeIcon' ? <HomeIcon isHovered={isHovered} color='#000' colorHover="#175BDD"/> :
                name === 'ProfileIcon' ? <ProfileIcon isHovered={isHovered} color='#000' colorHover="#175BDD"/> :
                name === 'ChatsIcon' ? <ChatsIcon isHovered={isHovered} color='#000' colorHover="#175BDD"/> :
                name === 'TeamsIcon' && <TeamsIcon isHovered={isHovered} color='#000' colorHover="#175BDD"/>
            }
            <div style={{pointerEvents: 'none'}}>{text}</div>
        </div>

    );
}

export default Home;
