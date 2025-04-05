import { Link } from "react-router-dom";

const GalleryCard = ({
    image = "",
    className = "",
    title = "",
    description = "",
    href = "",
}) => {
    return <>
        <Link to={href} className="w-auto h-auto">
            <div className={`bg-red-700 cursor-pointer group overflow-hidden relative ${className}`}>
                <h2 className="border-2 border-solid absolute bottom-3 left-3 border-white text-white font-semibold text-[12px] sm:text-[16px] z-10 py-1 px-2 sm:px-4 group-hover:scale-0 transition-all duration-700">{title}</h2>
                <img src={image} alt="image" className={`transition-all duration-700 group-hover:scale-125 w-full h-full`} />
                <div className="transition-all opacity-0 group-hover:opacity-100 duration-1000 w-full h-full absolute top-0 left-0 overflow-hidden bg-[var(--colorOne)] z-20 p-2 hidden sm:block">
                    <div className="border-2 border-solid border-white px-6 h-full w-full flex text-white flex-col text-center justify-center items-center">
                        <h2 className="capitalize text-[18px] lg:text-[25px] font-semibold leading-tight">{title}</h2>
                        <p className="text-[12px] lg:text-[15px] main-size">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>
}

export default GalleryCard;