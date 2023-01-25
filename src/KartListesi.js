import Kart from "./Kart";

const KartListesi = (props) => {
    const {dizi} = props;

    const set_card = dizi.map((element, index)=>{
        return(
            <Kart 
            key = {index}
            element = {element} 
            />
        )
    })
        
    return(<div className = "kart-liste"> {set_card} </div>)
}

export default KartListesi;