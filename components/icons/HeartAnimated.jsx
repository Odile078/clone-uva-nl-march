const HeartAnimated = ({ className }) => {
  return (
    <svg
      //   class="heart-animated rim"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style={{ enableBackground: "new 0 0 24 24" }}
      xmlSpace="preserve"
      width="32"
      height="32"
      className={`${className}`}
    >
      <path
        d="M12,21.5c2.6-2.6,5.5-5.5,8.6-8.7C25.3,8.1,22.3,2.5,18,2.5c-2.9,0-4.9,1.3-6,3.9c-1.1-2.6-3.1-3.9-6-3.9
        c-4.3,0-7.3,5.8-2.6,10.3C6.4,15.9,9.3,18.7,12,21.5z"
        stroke="#BD0032"
        fill="none"
        stroke-opacity="0.3"
      ></path>
      <animateTransform
        class="plusRim"
        attributeName="transform"
        attributeType="XML"
        type="scale"
        begin="this.onClick"
        values="1 1;1.6 1.4"
        dur="0.4s"
        repeatCount="1"
        stroke="#BD0032"
        fill="none"
        stroke-opacity="0.3"
      ></animateTransform>
      <animateTransform
        class="minRim"
        attributeName="transform"
        attributeType="XML"
        type="scale"
        begin="false"
        values="1 1;0 1;"
        dur="0.6s"
        repeatCount="1"
        stroke="#BD0032"
        fill="none"
        stroke-opacity="0.3"
      ></animateTransform>
    </svg>
  );
};

export default HeartAnimated;
