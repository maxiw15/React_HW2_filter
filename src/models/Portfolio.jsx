const Portfolio = ({ card}) => {

    return (
        <div className="card">
            <img className="w-full" src={card.img} alt={card.category}/>
        </div>
    );
}

export default Portfolio
