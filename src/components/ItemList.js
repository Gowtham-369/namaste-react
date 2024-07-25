import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items);
    return (
        <div className="divide-y">
            {items.map((item) => 

                <div key={item.card.info.id} className="p-2 m-2 text-left flex justify-between">
                    <div className="w-10/12">
                        <div className="py-2 text-md">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price/100}</span>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 h-[120px] m-2 relative">
                        <div className="absolute left-1/3">
                            <button className="bg-black text-white px-4 py-2 cursor-pointer rounded-md">Add +</button>
                        </div>
                        {
                            item.card.info.imageId && <img src={CDN_URL+item.card.info.imageId} alt="item" className="w-full h-full rounded-lg"/>
                        }
                    </div>
                    
                </div>
            )}
        </div>
    );
}
export default ItemList;