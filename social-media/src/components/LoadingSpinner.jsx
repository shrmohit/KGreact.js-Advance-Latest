const LoadingSpinner = () => {
  return (
    <div
      className="spinner-border loading-spinner "
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
