export default function Card({ title = "", primary = false }) {
  return (
    <div
      className={`w-72 h-full bg-secondary-dark ${
        primary ? "bg-primary-dark" : "bg-secondary-dark"
      } rounded-xl shadow-sm hover:shadow-xl cursor-pointer hover:scale-105`}
    >
      <img className="object-contain rounded-t-xl" src="coding.jpg" />
      <div className="p-4">
        <h3
          className={`${
            primary ? "text-secondary-light" : "text-alternative-light"
          } uppercase text-2xl drop-shadow-lg tracking-widest mb-2`}
        >
          {title}
        </h3>
        <p className="text-primary-light line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque lectus massa, nec vulputate lectus posuere sit amet.
          Aenean eu sollicitudin nunc, at posuere nisi. Pellentesque egestas
          eros velit, vitae hendrerit ex fringilla vitae.
        </p>
        <button
          className={`mt-4 px-4 py-2 uppercase ${
            primary ? "bg-secondary-light" : "bg-alternative-light"
          }  rounded-xl tracking-wide`}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
