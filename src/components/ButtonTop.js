import { useState } from 'react';
import HomeIcon from "../icons/home";
import ProfileIcon from "../icons/profile";
import ChatsIcon from "../icons/chats";
import TeamsIcon from "../icons/teams";

const iconMap = {
    'HomeIcon': HomeIcon,
    'ProfileIcon': ProfileIcon,
    'ChatsIcon': ChatsIcon,
    'TeamsIcon': TeamsIcon,
};

function Home({ name, text }) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = iconMap[name];

    return (
        <div className='button-top'
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <Icon isHovered={isHovered} color='#000' colorHover='#175BDD' />
            <div style={{ pointerEvents: 'none' }}>{text}</div>
        </div>
    );
}

export default Home;
