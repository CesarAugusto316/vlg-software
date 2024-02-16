import { FC } from 'react';


export const Login: FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-vlg-200 to-white h-screen to-90% flex items-center justify-center">

      <form className="w-[400px] bg-white p-8 rounded-xl border-gray-vlg-100 border-2">

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            className="shadow-sm  bg-white border border-gray-vlg-300 font-medium text-sm rounded-lg focus:ring-blue-vlg-900 focus:border-blue-vlg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light placeholder:italic placeholder-gray-vlg-400/80"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-vlg-500 hover:bg-blue-vlg-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register new account
        </button>

      </form>
    </div>
  );
};
