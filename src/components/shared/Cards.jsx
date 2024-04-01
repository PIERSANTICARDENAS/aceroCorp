import PropTypes from "prop-types";

export const Cards = ({titulo,subTitulo}) => {

    return (
        <div className="p-2 sm:mb-0 mb-2">
            <div className="rounded-lg h-60 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-3">{titulo}</h2>
            <h2 className="text-md font-medium title-font text-gray-900 mt-1">{subTitulo}</h2>
            <a className="text-AceroCorp inline-flex items-center mt-3">Más detalles
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className=" w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>

    )
}

Cards.propTypes = {
    titulo: PropTypes.string,
    subTitulo: PropTypes.string,
    //imagen: propTypes.oneOfType([propTypes.string, propTypes.object]),
  };
  