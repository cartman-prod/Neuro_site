import { useForm } from 'react-hook-form';
import BGIMAGE from '../../assets/img/neural_form.jpg';
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="min-h-screen py-10 ">
      <div className="container mx-auto px-5">
        <div className=" bg-stone rounded-xl mx-auto shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div
            className="w-full bg-no-repeat bg-cover bg-center xl:max-w-xl align-center "
            style={{ backgroundImage: `url(${BGIMAGE})` }}>
            <h1 className="text-xl md:text-4xl lg:text-5xl text-orange-600 font-bold text-center pt-6 pb-32 mb-5">
              Neural Edge
            </h1>
            <div>
              <p className="text-orange-600 text-md md:text-2xl lg:text-2xl text-center pt-40 md:pt-60 mb:pb-10 px-10 mb-5 mt-10">
                Откройте новые горизонты с NeuroEdge
              </p>
            </div>
          </div>
          <div className="w-full py-5 px-10 md:px-16 md:py-20 xl:max-w-xl">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Оставить заявку</h2>
            <p className="text-center mb-4"></p>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <input
                {...register('firstName', { required: true, minLength: 3 })}
                className="w-full px-10 py-3 mb-4 rounded-lg bg-gray-100"
                type="text"
                placeholder="Имя"
              />
              <input
                {...register('lastName', { required: true, minLength: 3 })}
                className="w-full px-10 py-3 mb-4 rounded-lg bg-gray-100"
                type="text"
                placeholder="Фамилия"
              />
              <input
                {...register('email', { required: true, minLength: 3 })}
                className="w-full px-10 py-3 mb-4 rounded-lg bg-gray-100"
                type="text"
                placeholder="Email@gmail.com"
              />
              <input
                {...register('phone', { required: true, minLength: 10 })}
                className="w-full px-10 py-3 mb-4 rounded-lg bg-gray-100"
                type="text"
                placeholder="+7 999 999 99 99"
              />
              {errors.phone && (
                <p className="text-red-500">Номер должен содержать не менее 10 символов</p>
              )}
              <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
