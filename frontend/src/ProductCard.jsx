const ProductCard = () => {
    return (
        <div className="border-1 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-lg bg-amber-50">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-4 border-blue-600 rounded-full" />
            <div className="flex flex-col gap-5 items-center">
                <h2 className="font-bold text-4xl text-blue-600">Product1</h2>
                <p className="text-xl text-gray-700 text-center">This is a sample product for simple testing</p>
                <p className="text-2xl text-black font-bold  border-1 border-black bg-white rounded-xl">$29.99</p>
            </div>
            <button className="text-black border-1 w-[90%]  bg-blue-50 py-4 rounded-2xl cursor-pointer hover-bg-blue-50">Add to cart</button>


        </div>
    )
}
export default ProductCard