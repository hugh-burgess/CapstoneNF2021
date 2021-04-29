import "./Dogs.css";
export default function Dogs({ name, imgSrc }) {
  return (
    <div>
      <section>
        <h2 className="dog-name">{name}</h2>
        <img className="dog-image" src={imgSrc} alt="dog" />
      </section>
    </div>
  );
}
