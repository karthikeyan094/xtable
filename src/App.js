import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  let [data,setData] = useState(
    [
    
        {id:1, date: "2022-09-01", views: 100, article: "Article 1" },
    
        { id:2,date: "2023-09-01", views: 100, article: "Article 1" },
    
        {id:3, date: "2023-09-02", views: 150, article: "Article 2" },
    
        {id:4, date: "2023-09-02", views: 120, article: "Article 3" },
    
        { id:5,date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]);
    let [sortedData,setSortedData] = useState([]);
const sortByDate=()=>{
  let sortedCars1 = data.sort((a, b) => 
  new Date(...b.date.split('-')) - new Date(...a.date.split('-')));
  setSortedData(sortedCars1);
}

const sortByViews = ()=>{
  data.sort((a,b) => b.views-a.views);
  let data1 = [...data];
  setSortedData(data1);
}
useEffect(()=>{
  setSortedData([...data]);
},[])
  return (
    <div>
    <h1>Date and Views Table</h1>
    <button onClick={sortByDate}>Sort by Date</button>
    <button onClick={sortByViews}>Sort by Views</button>
    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Views</th>
        <th>Aticle</th>
      </tr></thead>
      <tbody>
      {
        sortedData.map((e)=>{
          return <tr key={e.id}>
            <td>{e.date}</td>
            <td>{e.views}</td>
            <td>{e.article}</td>
          </tr>
        })
      }
      </tbody>
    </table>
     
    </div>
  );
}

export default App;
