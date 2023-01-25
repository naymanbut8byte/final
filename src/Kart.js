const Kart = (props) => {
    const {body, user, postId} = props.element;

    return(
        <div className = "kart">
            <img src={`https://robohash.org/${postId}?set=set4&size=180x180`} alt={`monster ${user}`} />
            <h1>{user.username}</h1>
            <h1>{body}</h1>
            <h1>{"Deneyim Seviyesi: "+postId}</h1>
            <h1>{"Yaşı: "+user.id}</h1>
            

        </div>
    )
}

export default Kart;