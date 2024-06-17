function ButtenToggle({ showButton, setShowButton }) {
  const handleButtonClick = () => {
    setShowButton(!showButton);
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleButtonClick}
        type="submit"
        className="mt-40 w-96 bg-blue-500 text-center rounded-3xl cursor-pointer"
      >
        <h2 className="text-white font-bold text-3xl px-12 py-7">
          نشان دادن پروژه ها
        </h2>
      </button>
    </div>
  );
}

export default ButtenToggle;
