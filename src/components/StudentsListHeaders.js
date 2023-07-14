const StudentsListHeaders = ({ onSort, array }) => {
  const handleClick = (event) => {
    onSort(event.target.innerText);
  };
  return (
    <ul className="StudentsListHeaders">
      {array.map((header) => (
        <li onClick={handleClick} key={header}>
          {header}
        </li>
      ))}
    </ul>
  );
};

export default StudentsListHeaders;
