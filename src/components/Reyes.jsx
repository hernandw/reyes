import '../assets/css/style.css'

const datos = [
  {
    name: "Sisebuto",
    img: "./src/assets/images/rey_sisebuto.png",
    id: 1
  },
  {
    name: "Atanagildo",
    img: "./src/assets/images/rey_atanagildo.png",
    id: 2
  },
  {
    name: "Ataulfo",
    img: "./src/assets/images/rey_ataulfo.png",
    id: 3
  },
  {
    name: "Ervigio",
    img: "./src/assets/images/rey_ervigio.png",
    id: 4
  },

  {
    name: "Leogivildo",
    img: "./src/assets/images/rey_leogivildo.png",
    id: 5
  },
  {
    name: "Recesvinto",
    img: "./src/assets/images/rey_recesvinto.png",
    id: 6
  },
  {
    name: "Leogivildo",
    img: "./src/assets/images/rey_leogivildo.png",
    id: 7
  },
  {
    name: "Teodorico",
    img: "./src/assets/images/rey_teodorico.png",
    id: 8
  },
];

const Reyes = () => {
  return <section className='container'>
    
        {datos.map(rey =>(
            <div className="card" key={rey.id}>
                <img src={rey.img} alt={rey.name} />
                <p className='card__title'>{rey.name}</p>
            </div>
        ))}
    
  </section>;
};

export default Reyes;
