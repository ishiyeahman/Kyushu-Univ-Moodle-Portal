import React from 'react';

import './App.css';
import defaultDataset from './dataset';

import {Card} from './components/index'


class App extends React.Component{
  constructor(props){
    super(props);
    var date = new Date () ;

    var dayOfWeek = date.getDay() ;	
    var dayOfWeekStr = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][dayOfWeek] ;
    // var time = date.getTime() ;	

    this.state = {
      dataset: defaultDataset,
      today : dayOfWeek,
      todayStr : dayOfWeekStr, 
      current: date.toLocaleString(),
      schedule : [],
      currentPeriod : 0,
      hours: date.getHours(),
      minutes : date.getMinutes(),
    }

    this.setSchedule();
  }


  setCurrentPeriod = () => {
    var span = this.state.hours*60 + this.state.minutes;
    
    var currentPeriod = 0;

    if ( span < 10*60 + 10) //( ( span > 8*60 + 40 ) && ( span < 10*60 + 10) ) 
       currentPeriod = 1;  // 1限目 8:40 - 10:10
    else if ( span < 12*60)
       currentPeriod = 2;  // 2限目 10:30 - 12:00
    else if (span < 14*60 + 30)
        currentPeriod = 3;  // 3限目 13:00 - 14:30
    else if (span < 16*60 + 20)
        currentPeriod = 4;  // 4限目 14:50 - 16:20
    else 
        currentPeriod = 5;  // other

    this.setState({
      currentPeriod : currentPeriod
    })
   
  }
 

  setSchedule = () => {
    console.log(this.state.schedule);
    const schedule = this.state.schedule;
    
    this.state.dataset.filter(subject => {
      
       if (subject.day === this.state.today){
       
        schedule.push({
          subjectName : subject.name, 
          faceImg : subject.faceImg,
          period : subject.period,
          url : subject.url,
          teacher : subject.teacher,
    
        })

       }

      return 0;
       
    });

    const sortedSchedule = schedule.sort(function(a, b) {
      return (a.period < b.period) ? -1 : 1;  //オブジェクトの昇順ソート
    });

    console.log(schedule)
    console.log(sortedSchedule)

    this.setState({
      schedule : sortedSchedule
    })
  }

  

  componentDidMount() {
    // this.setSchedule();

    setInterval( () => {
      var date = new Date ();

      this.setCurrentPeriod();
      this.setState({
        current: date.toLocaleString(),
        hours: date.getHours(),
        minutes : date.getMinutes(),
      })

      
    },1000)
  }

  handleClick (value) {
    console.log(value);
    
    this.setState((state) => {
      return { 
        today:value,
        schedule:[],
       }
    });
    console.log(this.state.schedule);
    this.setSchedule();
  }

  render(){
    return (
      <div>
          {/* head */}
          <header >
            <p class='text-center text-xl font-bold mt-5 mb-5 text-orange-700 '>Kyushu University Moodle Portal</p>
            {/* <img class="aspect-video w-60 rounded-t-2xl object-cover object-center" src={logo} /> */}
            <div > 
              <p class='text-center font-mono'>{this.state.current}</p>
              <p class='text-center font-mono'>{this.state.todayStr}</p>
            </div>

            <div class="mx-auto flex p-5 w-80" > 
              <button class="mx-auto  bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleClick(1)} >
              月
              </button>

              <button class="mx-auto  bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleClick(2)} >
              火
              </button>

              <button class="mx-auto bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleClick(3)} >
              水
              </button>

              <button class="mx-auto bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleClick(4)} >
              木
              </button>

              <button class="mx-auto bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleClick(5)} >
              金
              </button>
            </div>



           
          </header>

          {/* main contents */}
          
          <div class="relative ">
            {            
              this.state.schedule.map( (value, index) =>{
                    // console.log(value)
                    return <Card 
                     faceImg={value.faceImg}
                     name={value.subjectName} 
                     detail={value.detail} 
                     url={value.url} 
                     period={value.period} 
                     currentPeriod={this.state.currentPeriod}  
                     teacher={value.teacher}
                     key={index.toString()} />
                })
            }
          
            
          </div>

          {/* head */}
          <footer class='text-center  mt-10 '>
            {/* <a href="https://github.com/ishiyeahman"> */}
              <h1 class='italic'>&copy; Ryo Ishiyama</h1>
            {/* </a> */}
          </footer>
        
      </div>

    
    );
  }
}

export default App;

