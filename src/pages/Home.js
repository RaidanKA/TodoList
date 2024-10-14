import { CircularProgressBar } from 'react-percentage-bar';
import Card from '../components/card';
import Header from '../components/header';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [judul, setJudul] = useState('')
  const [status, setStatus] = useState('')

  // hapus dari sini
  const buat = () => {
    if (judul === '' || status === '') {
      alert('ISI DONG !!!!')
    } else {
      let dataBaru = {
        judul,
        status
      }
      const setup = [...data, dataBaru]
      setData(setup)
      localStorage.setItem('isiToDo', JSON.stringify(setup))
    }
  }


  useEffect(()=> {
    const datas = localStorage.getItem('isiToDo')
    console.log(datas)
    if(datas){
      setData(JSON.parse(datas))
    }
  },[])


  //  sampe sini

  return (
    <div className='bg-blue-950 min-h-screen max-w'>
      <Header />
      <Card>
        <div className='flex justify-between p-5'>
          <CircularProgressBar percentage={50} radius={'30px'} size={'10px'} percentageStyle={{ innerWidth: 10 }}/>
          <div className='flex-1 ml-5'>
            <div className='text-xl font-bold text-white'>
              You've completed 1 out of 2 tasks.
            </div>
            <div className='text-gray-200'>
              You're halfway there! Keep it up!
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='flex items-center'>
          <div>
            <img 
            alt=''
            src='/search.png' style={{
              width: 30,
              height: 30,
              margin: 5
            }} />
          </div>
          <input
            name={judul}
            value={judul}
            onChange={(adrian) => setJudul(adrian.target.value)}
            placeholder='Search Here...'
            style={{
              backgroundColor: 'transparent',
              border: 0,
              outline: '0',
              padding: 5,
              margin: 2,
              width: '100%',
              color: 'white'
            }} />
          <select name={status} onChange={(a) => setStatus(a.currentTarget.value)} value={status}>
            <option value={false}>...</option>
            <option value={false} >Not Done</option>
            <option value={true} >Done</option>
          </select>
          <button onClick={buat}> create</button>
        </div>
      </Card>

      <Card>
        <div className='m-5 mb-10'>
          isi Todo
        </div>
        {
          data.map((item) => {
            console.log(item)
            return (
              <div className='flex m-5 p-2 rounded bg-gray-50'>
                <div className='flex-1'>
                  {item.judul}
                </div>
                <div>
                  {item.status === "false" ? 'Belom selesai' : 'Selesai'}
                </div>
              </div>
            )
          })
        }


      </Card>
    </div>
  );
}

export default App;
