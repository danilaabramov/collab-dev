function Chats({isHovered, color, colorHover}) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 11.9021 1.5901 13.6665 2.59721 15.1199C2.70168 15.2707 2.7226 15.4653 2.64529 15.6317L1.42747 18.2519C1.23699 18.5853 1.47768 19 1.86159 19H10Z"
                stroke={isHovered ? colorHover : color} strokeWidth="2"/>
        </svg>
    );
}

export default Chats;
