
export const AuthButton = ({ type, text, className }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};
