import Users from './Users'
import DataUser from './DataUser'
import { useState, useEffect } from 'react'

function App() {
  const [isShowData, setIsShowData] = useState(false)
  const [idDataUser, setIdDataUser] = useState("")

  return (
    <div style={{ display: 'flex' }}>
    <Users callbackID={setIdDataUser} callbackIsShow={setIsShowData} />
    {console.log(idDataUser)}
    {console.log(isShowData)}
    <div>
        {isShowData? <DataUser key={idDataUser} userId={idDataUser}/>:null}
    </div>   
</div>
  )
}
export default App
