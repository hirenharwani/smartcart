import loadersvg from "../assets/media/loader.svg";
const Loader = () => {
  return (
    <>
      <section className="loader">
        <div className="container inner-wrapper">
          <img src={loadersvg} />
        </div>
      </section>
    </>
  );
};
export default Loader;
