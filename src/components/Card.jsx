// import { Link } from "react-router-dom"

function Card({ item }) {
    return (
        <section className="">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <img className="h-full aspect-auto scale-[20%]" src={item.Img} alt="screenshot of previous projects" />
                        </div>
                    </div> 
                </div>
                {/* 2nd container with Logo/img  */}
                {/* <div className="col-span-7 place-self-start text-cente my-36 ">
                    <div>
                        <Link to={item.path} target="_blank" rel="noopener noreferrer">
                            <h2 className="text-textwhite text-4xl font-semibold hover:text-secondary"> {item.Title}</h2>
                        </Link>
                        <p className="text-textwhite text-xl pl-5 mt-4 mr-10">{item.Description}</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Card;