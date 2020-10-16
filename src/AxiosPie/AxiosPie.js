import Axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const AxiosPie = () =>{
    const [chartData, setChartData] = useState({});
    const [Title, setTitle] = useState([]);
    const [Budget, setBudget] = useState([]);

    const chart = () => {
        let eTitle = [];
        let eBudget = []
        Axios.get("http://localhost:5000/budget")
             .then(res =>{
                
                 for(const dataObj of res.data.myBudget){
                    eTitle.push(dataObj.title);
                    eBudget.push(dataObj.budget);
                 }
                 setChartData({
                    labels : eTitle,
                    datasets : [
                        {
                            label : 'Budget',
                            data : eBudget,
                            backgroundColor : [
                                '#F1C40F',
                                '#9B59B6',
                                '#F39C12',
                                '#5DADE2',
                                '#196F3D',
                                '#E74C3C',
                                '#FF5733',
                                            ]
                            
                        }
                    ]
                })
             })
             .catch(e => {
                
             }) 
                    
        
    }

    useEffect(() => {
        chart()
    },[])

    return(
        <div className="App">
            <div style={{height:"500px",width:"500px"}}>
                <Pie data = {chartData} />
            </div>
        </div>
    )
}


export default AxiosPie;