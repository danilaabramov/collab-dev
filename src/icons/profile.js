function Profile({isHovered, color, colorHover}) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
                  fill={isHovered ? colorHover : color}/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.9999 20C9.07106 20 7.33454 19.1139 6.3353 17.9708C6.03082 17.6225 5.95147 17.3163 5.96068 17.0651C5.97049 16.7971 6.08635 16.487 6.34713 16.1692C6.8828 15.5164 7.90124 15 8.99992 15H14.9999C16.0986 15 17.117 15.5164 17.6527 16.1692C17.9135 16.487 18.0293 16.7971 18.0392 17.0651C18.0484 17.3163 17.969 17.6225 17.6645 17.9708C16.6653 19.1139 14.9288 20 11.9999 20ZM4.8295 19.2871C6.30206 20.9716 8.65319 22 11.9999 22C15.3466 22 17.6978 20.9716 19.1703 19.2871C19.7746 18.5958 20.0675 17.8036 20.0378 16.9919C20.0087 16.1971 19.6744 15.48 19.1988 14.9004C18.2617 13.7585 16.6627 13 14.9999 13H8.99992C7.33717 13 5.73815 13.7585 4.80107 14.9004C4.32547 15.48 3.99113 16.1971 3.96202 16.9919C3.93229 17.8036 4.22527 18.5958 4.8295 19.2871Z"
                  fill={isHovered ? colorHover : color}/>
        </svg>
    );
}

export default Profile;
