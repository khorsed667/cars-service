

const ServiceCard = ({serve}) => {

    const {title, img, price} = serve

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="m-5 p-0">
                <img className="rounded-xl h-[200px]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center mb-4 p-0">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;