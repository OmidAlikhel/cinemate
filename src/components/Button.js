export const Button = ({ children }) => {
  return (
    <button className="text-slate-800 dark:text-white px-4 py-2.5  rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ">
      {children}
    </button>
  );
};
