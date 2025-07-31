const Card = ({username="MOHIT"}) => {
    // {username="MOHIT"} by default agar kisi ne <Cart /> component mai username pass nhi kiya to MOHIT show hoga
    return (
        <div className="flex flex-col justify-between rounded-xl  p-4"
    style={{
        border: '0.88px solid',
    }}
    >
    <div>
        <img
        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
        alt="nft-gif"
        width="280"
        height="280"
        className="rounded-xl"
        />
    </div>
    <div className="flex flex-row justify-between rounded-b-xl py-4 ">
        <div className="flex justify-between">
        <h6 className="font-RubikBold ">Bored ape nft accidental</h6>
        
        <h6 className="font-bold font-RubikBold">Price</h6>
        </div>
        <div className="flex justify-between font-mono">
        <p>#345</p>
        <p>0.01</p>

        </div>
    </div>
        <h6 className="font-RubikBold font-bold bg-gray-400 opacity-80 m-4 p-4 rounded-md ml-6 pl-20">{username}</h6>
    </div>
    )
}

export default Card