import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Employee() {

    const [Data, setData] = useState([]);

    useEffect(() => {
        
        const getData = () => {
            axios.get('https://dummy.restapiexample.com/api/v1/employees')
                .then(result => {
                    console.log(result.data.data);
                    setData(result.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        getData();

    }, [])
    
    return (
        <div className="Employee">
            {Data.length > 0 ?
               ( < table className="Table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                </tr>
                       {Data.map(d => {
                           return (
                 
                               <tr key={d.id}>
                                   <td>{d.employee_name}</td>
                                   <td>{d.employee_salary}</td>
                                   <td>{d.employee_age}</td>
                               </tr>
                
                           )
                       })}
                
              
                    </tbody>
                    </table>)
                :
            (<h5>Loading!!!!</h5>)
        }
            
        </div>
    )
}

export default Employee
