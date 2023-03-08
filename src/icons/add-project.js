function AddProject({isHovered, color, colorHover}) {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H13"
                  stroke={isHovered ? colorHover : color} strokeWidth="2" strokeLinecap="round"/>
            <path
                d="M17.9227 3.52798C18.2607 3.18992 18.7193 3 19.1973 3C19.6754 3 20.134 3.18992 20.472 3.52798C20.8101 3.86605 21 4.32456 21 4.80265C21 5.28075 20.8101 5.73926 20.472 6.07732L12.3991 14.1502L9 15L9.84978 11.6009L17.9227 3.52798Z"
                stroke={isHovered ? colorHover : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6L18 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default AddProject;
