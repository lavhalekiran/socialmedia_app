

const CustomButton = ({title,containerStyles,iconRight,type,onClick}) => {
  return (
    <div>
        <button
            onClick={onClick}
            type={type|| "button"}
            className={`inline-flex items-center text-base ${containerStyles}`}
            >
                {title}
                {iconRight && <div className="ml-2">{iconRight}</div>}
            </button>
    </div>
  );
};

export default CustomButton;