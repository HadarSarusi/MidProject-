
import Users from './Users'
import DataUser from './DataUser'
import { useState, useEffect } from 'react'

function App() {
  const [isShowData, setIsShowData] = useState(false)
  const [idDataUser, setIdDataUser] = useState("")

  // useEffect(()=>{
  //   setIsShowData(true)
  //  }, [idDataUser])
  
  return (
    <div style={{ display: 'flex' }}>
    <Users callbackID={setIdDataUser} callbackIsShow={setIsShowData} />
    <div>
        {isShowData && <DataUser key={idDataUser} iduserData={idDataUser} />}
    </div>   
</div>
  )
}
export default App
