const Arama = (props) => {
    const {onChangeHandle} = props;
    return (
        <input onChange = {event => onChangeHandle(event)} type = "search" placeholder="Ara" className='search-box'/>
    )
}

export default Arama;