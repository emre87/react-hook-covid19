import React,{useEffect,useState} from 'react'
import axios from 'axios'

function App() {

   const [veri,setVeri] = useState();
   const [tarih,setTarih] = useState();

   useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
       .then(res=>setVeri(res.data[tarih]))
       .catch(err=>console.log(err))
   },[veri,tarih]) 

 
   return(
    <div className="App">
       <div className="container">
         <div className="col-md8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">TÜRKİYE COVID-19 ARAMA MOTORU</h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control" 
             onChange={e=>setTarih(e.target.value)} />
            <table className="table table-striped text-white">
  <thead>  
    <tr>
      <th scope="col">#</th>
      <th scope="col">TEST SAYISI</th>
      <th scope="col">HASTA SAYISI</th>
      <th scope="col">VEFAT SAYISI</th>
    </tr>
  </thead> 
  <tbody>
    <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
      <th scope="row">{veri === undefined ? "veri bekleniyor" : veri.date}</th>
      <td>{veri === undefined ? "veri yok" : veri.totalTests}</td>
      <td>{veri === undefined ? "veri yok" : veri.totalPatients}</td>
      <td>{veri === undefined ? "veri yok" : veri.deaths}</td>
    </tr>
   
  </tbody>
</table>
        </div>
       </div>
    </div>
   );
  
}

export default App;
