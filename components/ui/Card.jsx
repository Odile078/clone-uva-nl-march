const Card = ({ image, title, description, className }) => {
  return (
    <div
      className={`transition-all duration-200 ease-in-out bg-white group-hover:shadow-8xl ${
        className ? className : "w-full"
      }`}
    >
      {image ?? null}
      <div className="p-4 pb-6 space-y-3 ">
        {title && (
          <h5 className="text-[1.5rem] leading-[1.15] font-semibold group-hover:underline group-hover:text-brandOrange">
            {title}
          </h5>
        )}
        <p className="text-base ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
