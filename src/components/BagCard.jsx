const BagCard = ({ imgURL, changeBigBagImage, bigBagImg }) => {
    const handleClick = () => {
        if (bigBagImg !== imgURL.bigBag) {
            changeBigBagImage(imgURL.bigBag);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-transform ${bigBagImg === imgURL.bigBag
                    ? "border-blue-600 border-b-4 shadow-lg scale-125 "
                    : "border-transparent"
                } `}
            onClick={handleClick}
            
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img
                    src={imgURL.thumbnail}
                    alt='bag colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default BagCard;