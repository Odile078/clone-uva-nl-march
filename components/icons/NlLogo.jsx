const NlLogo = ({ className = "" }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} `}
      role="presentation"
      aria-hidden="true"
      // width="24"
      // height="24"
    >
      <defs>
        <symbol
          id="icon-lang-nl"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M5.56 17.464v-4.576c0-1.168-.144-2.432-.24-3.536h.064l1.088 2.224 3.248 5.888h1.904V7h-1.76v4.544c0 1.168.144 2.496.24 3.568h-.064l-1.088-2.224L5.704 7H3.8v10.464zm14.88 0v-1.568h-4.336V7h-1.856v10.464z"></path>
        </symbol>
      </defs>
      <use xlinkHref="#icon-lang-nl" fill="#1F1D21"></use>
    </svg>
  );
};

export default NlLogo;
