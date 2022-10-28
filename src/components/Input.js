



const Input = (props) => {
    const {id, type, method, value, css, title, pattern} = props;
  return (
    <div className={css}>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        onChange={method}
        value={value}
        pattern={pattern}
        required
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
