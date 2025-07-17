const Card = ({user}) =>{
    return(
        <div className="max-w-sm bg-white rounded-xl overflow-hidden shodow-md p-4">
            <img src={user.image} alt={user.title} className="w-full h-48 object-cover mb-4" />
            <div className="pt-3">
                <h3 className="text-lg font-bold text-gray-800">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
            </div>
        </div>
    )
}
export default Card;