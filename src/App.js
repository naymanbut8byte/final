import { useEffect, useState } from 'react';
import KartListesi from './KartListesi';
import Arama from './Arama';
import './App.css';

const apiAdresi = "https://dummyjson.com/comments"

const App = () => {
  const [yorumlarim, yorumlarimiGuncelleme] = useState([]);
  const [arama, aramayiGuncelle] = useState('');
  const [filtrele, filtreGuncelle] = useState([]);

  useEffect(()=>{
    fetch(apiAdresi)
    .then(fetchCevabi => fetchCevabi.json())
    .then(fetchCevabiIslemindenSonra => {
      console.log(fetchCevabiIslemindenSonra)
      yorumlarimiGuncelleme(fetchCevabiIslemindenSonra.comments)
    }) 
  }, [])

  
  useEffect(() => {
    console.log(yorumlarim)

    const filtrele = yorumlarim.filter((element) => {
      if (element.user.username.toLocaleLowerCase().includes(arama)) {
        return element;
      }
    })
    filtreGuncelle(filtrele)
  }, [arama, yorumlarim])

  const AramaDegistir = (event) => {
      aramayiGuncelle(event.target.value.toLocaleLowerCase());
  }

  return (
    <div className="App">
       <h1 className='app-title'>Kedicik Yorumları</h1>
      <Arama  onChangeHandle = {AramaDegistir} />
      <KartListesi dizi = {filtrele} />
    </div>
  );
}

export default App;
