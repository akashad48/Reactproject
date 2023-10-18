import React from 'react'
import { useState } from 'react';
import 
{ PiHandWavingBold }
 from 'react-icons/pi'
 import 
 {Pie, PieChart, Sector, BarChart, Bar, Cell, XAxis,  Tooltip,  ResponsiveContainer, Rectangle, Line } 
 from 'recharts';
import earning from './icons/icons8-earning-64.png'
import order from './icons/icons8-list-50.png'
import balance from './icons/icons8-wallet-64.png'
import sales from './icons/icons8-total-sales-48.png'
import abart from './icons/istockphoto-1340367001-170667a.webp'
import ill from './icons/illu.webp'
// piecharts imports
import renderActiveShape from './Pie';

function Home() {
   const [i,seti]=useState();
    const data = [
        {
          name: 'JAN',
          uv: 4000,
          pv: 2400,
          amt: 2400,
          piedata : [
            { name: ' New Customer', value: 130 },
            { name: 'Old Customer', value: 380},
            { name: 'Group C', value: 230},
          
          ]
        },
        {
          name: 'FEB',
          uv: 3000,
          pv: 1398,
          amt: 2210,
          piedata : [
            { name: ' New Customer', value: 100 },
            { name: 'Old Customer', value: 190 },
            { name: 'Group C', value: 300 },
          
          ]
        },
        {
          name: 'MAR',
          uv: 2000,
          pv: 9800,
          amt: 2290,
          piedata : [
            { name: ' New customer', value: 280 },
            { name: 'Old Customer', value: 300 },
            { name: 'Group C', value: 200 },
          
          ]
        },
        {
          name: 'APR',
          uv: 2780,
          pv: 3908,
          amt: 2000,
          piedata : [
            { name: ' New customer', value: 300 },
            { name: 'Old Customer', value: 120 },
            { name: 'Group C', value: 200 },
          
          ]
        },
        {
          name: 'MAY',
          uv: 1890,
          pv: 4807,
          amt: 2181,
          piedata : [
            { name: ' New customer', value: 100 },
            { name: 'Old Customer', value: 400 },
            { name: 'Group C', value: 200 },
          
          ]
        },
        {
          name: 'JUN',
          uv: 2390,
          pv: 3800,
          amt: 2500,
          piedata : [
            { name: ' New customer', value: 100 },
            { name: 'Old Customer', value: 400 },
            { name: 'Group C', value: 200 },
          
          ]
        },
        {
          name: 'JULY',
          uv: 3490,
          pv: 4306,
          amt: 2100,
          piedata : [
            { name: ' New cuztomer', value: 100 },
            { name: 'Old Customer', value: 400 },
            { name: 'Group C', value: 200 },
          
          ]
        },
        {
            name: 'AUG',
            uv: 3490,
            pv: 4305,
            amt: 2100,
            piedata : [
              { name: ' New  customer', value: 100 },
              { name: 'Old Customer', value: 390 },
              { name: 'Group C', value: 290 },
            
            ]
          },
 
          {
            name: 'SEPT',
            uv: 3490,
            pv: 4304,
            amt: 2100,
            piedata : [
              { name: ' New customer', value: 100 },
              { name: 'Old Customer', value: 380 },
              { name: 'Group C', value: 300 },
            
            ]
          },
          {
            name: 'OCT',
            uv: 3490,
            pv: 4303,
            amt: 2100,
            piedata : [
              { name: ' New customer', value: 100 },
              { name: 'Old Customer', value: 370 },
              { name: 'Group C', value: 220 },
            
            ]
          },
          {
            name: 'NOV',
            uv: 3490,
            pv: 4302,
            amt: 2100,
            piedata : [
              { name: ' New customer', value: 400 },
              { name: 'Old Customer', value: 100},
              { name: 'Group C', value: 300 },
            
            ]
          },
          {
            name: 'DEC',
            uv: 3490,
            pv: 4301,
            amt: 2100,
            piedata : [
              { name: ' New customer', value: 100 },
              { name: 'Old Customer', value: 310 },
              { name: 'Group C', value: 230 },
            
            ]
          },
      ];

      // pie charts related state

      const [activeIndex, setActiveIndex] = useState(0);//to set the state of hoverd section
      
      const [pieData, setPieData] = useState([
        { name: ' --', value: 100 },
        { name: '--', value: 100 },
        { name: '--', value: 100 },
      
      ]);
      const [pieChartKey, setPieChartKey] = useState(0);
      const [colors, setColors] = useState(['#00008B', '#DE3163', '#C0C0C0']);

      //OnClick of  bar ,bar data will be rendered on pie chart
      const onBarClick = (clickedData) => {
        setPieData(clickedData.piedata);
         debugger;
        seti(clickedData.pv);//to change color of that selected bar to blue by using that key of bar
        
        setPieChartKey(pieChartKey + 1);//this will set piechartkey to next key
      };
      
      //onmouse pointer hover it will show data of that section in center of piechart
      const onPieEnter = (_, index) => {
        const newColors = [...colors];
      
        setColors(newColors);
        setActiveIndex(index);
      };
    
      //this function will map color for section
      const renderCell = (entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      );
  //tooltip customisation
      const CustomTooltip = ({ active, label, payload }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
              Click to see in piecharts
            </div>
          );
        }
      
        return null;
      };



  return (
    <main className='main-container'>
        <div className='main-title' >
            <h3>Hello Shahrukh </h3><PiHandWavingBold style={{marginLeft:"-750px"}} className='card_icon'/>
            <div> <input type="text" classname='searchbox'placeholder="Search.."/></div>
            </div>
       
       
        
       

        <div className='main-cards'>
            <div className='card' >
            <div className='card-inner'>
                 <img style={{ padding: "13px", margin: "0" }} src={earning}  />
            <div style={{ margin: "0", paddingLeft: "10px" }}>
                  <h6 style={{ margin: "0",opacity:"0.7", fontWeight: "lighter" }}>Earning</h6>
                  <h3 style={{ margin: "0" }}>$191K</h3>
                  <h6 style={{ margin: "0" }}>
                  <span style={{ color: "green" }}>37.8% &#9650; </span> this month
                          </h6>
           </div>
           </div>


              
            </div>
            <div className='card'>
            <div className='card-inner'>
                 <img style={{ padding: "13px", margin: "0" ,maxWidth:"64px"}} src={order}  />
            <div style={{ margin: "0", paddingLeft: "10px" }}>
                  <h6 style={{ margin: "0",opacity:"0.7", fontWeight: "lighter" }}>Orders</h6>
                  <h3 style={{ margin: "0" }}>$2.4K</h3>
                  <h6 style={{ margin: "0" }}>
                  <span style={{ color: "red" }}>2% &#9660;</span> this month
                          </h6>
           </div>
           </div>
                
            </div>
            <div className='card'>
            <div className='card-inner'>
                 <img style={{ padding: "13px", margin: "0" }} src={balance}  />
            <div style={{ margin: "0", paddingLeft: "10px" }}>
                  <h6 style={{ margin: "0",opacity:"0.7", fontWeight: "lighter" }}>Balance</h6>
                  <h3 style={{ margin: "0" }}>$191</h3>
                  <h6 style={{ margin: "0" }}>
                  <span style={{ color: "red" }}>2% &#9660;</span> this month
                          </h6>
           </div>
           </div>
              
            </div>
            <div className='card'>
            <div className='card-inner'>
                 <img style={{ padding: "13px", margin: "0" }} src={sales} />
            <div style={{ margin: "0", paddingLeft: "10px" }}>
                  <h6 style={{ margin: "0",opacity:"0.7", fontWeight: "lighter" }}>Total Sales</h6>
                  <h3 style={{ margin: "0" }}>$191</h3>
                  <h6 style={{ margin: "0" }}>
                  <span style={{ color: "green" }}>11%  &#9650;</span> this month
                          </h6>
           </div>
           </div>
            
            </div>
        </div>
   <div  className='ch'>
  <div style={{ background: '#FFFFFF', borderRadius: '5px' , position: 'relative'}} className='charts' >
  <div style={{  top: '15px', left: '13px', padding: '10px'}}>
    <h4 style={{ color: 'black', margin: '0' }}>Overview</h4>
    <h6 style={{ margin: "0",opacity:"0.6",color:'black', fontWeight: "lighter" }}>Monthly Earnings</h6>
  </div>
  <div style={{position:'absolute', top: '15px', right: '13px', padding: '10px' }}>
    <select>
      <option value="quarterly">Quarterly</option>
      <option value="half-yearly">Half-Yearly</option>
      <option value="monthly">Monthly</option>
    </select>
  </div>
    <ResponsiveContainer width="100%" height="100%" >
      <BarChart
        width={400}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 5,
          padding: 60
          
        }}
      >
      
        <XAxis style={{ fontSize: "10px" }} dataKey="name" />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="pv"  activeBar={<Rectangle fill="pink" stroke="blue" />}
          fill={i=='pv' ? '#8884d8':'#E5E4E2'} barSize={30} radius={[5, 5, 0, 0]}   onClick={(e) => onBarClick(e)}/>
      </BarChart>
    </ResponsiveContainer>
</div>
    <div style={{ background: '#FFFFFF', borderRadius: '5px'}} className='charts'>
    <div style={{  top: '15px', left: '13px', padding: '10px'}}>
    <h4 style={{ color: 'black', margin: '0' }}>Customers</h4>
    <h6 style={{ margin: "0",opacity:"0.6",color:'black', fontWeight: "lighter" }}>Customers That Buy New Products</h6>
  </div>
    <ResponsiveContainer  key={pieChartKey} >
    <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={activeIndex !== null ? 60 : 20}//to get hover effect it will grow in size of this proportion
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
         >   {data.map(renderCell)}    </Pie>
          
        </PieChart>
    </ResponsiveContainer>
  </div>
  </div>
  <section style={{ background: '#FFFFFF', borderRadius: '10px' , marginTop:"20px", position: 'relative'}}>
  <div className='divabovetbl' style={{  top: '15px', left: '13px', padding: '10px'}}>
    <h4 className='h' style={{ color: 'black', padding: '10px', fontWeight: 'bold'}}>Product Sell</h4>
    <div style={{ position: 'absolute', top: '15px', right: '13px', padding: '10px', display: 'flex', alignItems: 'center' }}>
  <div>
  <input type="text" classname='searchbox'placeholder="Search.."/>
  </div>
  <div style={{ marginLeft: '10px' }}>
    <select>
      <option value="quarterly">Last 30 days</option>
      <option value="half-yearly">Last 100 days</option>
    </select>
  </div>
</div>

  </div>
  
<div style={{ overflowX: 'auto', maxWidth: '100%' }}>
  <table className='table'>
    <thead>
      <tr className='row'>
        <th id='pname' style={{ width: '70%', opacity: "0.7", fontWeight: "lighter" }} colSpan={2}>Product Name</th>

        <th scope="col" style={{ opacity: "0.7", fontWeight: "lighter" }} class="col-1">Stock</th>
        <th scope="col" style={{ opacity: "0.7", fontWeight: "lighter" }} class="col-1">Price</th>
        <th scope="col" style={{ opacity: "0.7", fontWeight: "lighter" }} class="col-1">Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ width: '10%' }}><img className='img' src={abart} alt="Abstract 3D" /></td>
        <td id='pname'>Abstract 3D</td>

        <td>100</td>
        <td>$10.99</td>
        <td>50</td>
      </tr>
      <tr>
        <td style={{ width: '10%' }}><img className='img' src={ill} alt="Sarphens Illustration" /></td>
        <td id='pname'>Sarphens Illustration</td>

        <td>75</td>
        <td>$12.99</td>
        <td>60</td>
      </tr>
    </tbody>
  </table>
</div>

</section>




    </main>
  )
}

export default Home