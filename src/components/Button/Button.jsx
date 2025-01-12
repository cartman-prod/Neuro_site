import { useNavigate } from 'react-router-dom';
const borderStyle = 'border-solid border-gray-800 rounded-lg ';
const filledStyle = 'text-black font-bold rounded-lg py-2 px-2 mx-0 duration-300 hover:text-black ';

const Button = ({ children = 'ree', hasBorder = false, isFilled = false, display = '' }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/form')}
      className={`${display} md:block md:text-sm px-2 py-2 bg-orange-500 text-black ${
        hasBorder && borderStyle
      } ${isFilled && filledStyle}`}>
      {children}
    </button>
  );
};

export default Button;
