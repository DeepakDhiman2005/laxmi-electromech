const Infrastructure = () => {
    return <>
        <div className="px-4 lg:px-12 flex flex-col justify-center my-3 w-full items-center gap-y-4">
            <h2 className="font-semibold text-[32px] text-blue-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40%] after:h-[3px] after:bg-blue-800">Infrastructure</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        src="https://ambit.in/ambitImages/infra/1.jpg" 
                        alt="image"
                        className="w-full"
                    />
                    <p className="font-medium"><span className="font-semibold text-blue-500">24,000</span> square metre facility with <span className="font-semibold text-blue-500">200+ crore</span> capacity</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        src="https://ambit.in/ambitImages/infra/4.jpg" 
                        alt="image"
                        className="w-full"
                    />
                    <p className="font-medium"><span className="font-semibold text-blue-500">24,000</span> square metre facility with <span className="font-semibold text-blue-500">200+ crore</span> capacity</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        src="https://ambit.in/ambitImages/infra/2.jpg" 
                        alt="image"
                        className="w-full"
                    />
                    <p className="font-medium"><span className="font-semibold text-blue-500">24,000</span> square metre facility with <span className="font-semibold text-blue-500">200+ crore</span> capacity</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        src="https://ambit.in/ambitImages/infra/3.jpg" 
                        alt="image"
                        className="w-full"
                    />
                    <p className="font-medium"><span className="font-semibold text-blue-500">24,000</span> square metre facility with <span className="font-semibold text-blue-500">200+ crore</span> capacity</p>
                </div>
            </div>
        </div>
    </>
}

export default Infrastructure;