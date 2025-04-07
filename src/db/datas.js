

const getData=async ()=>{
    const url="https://randomuser.me/api/"
    const res=await fetch("https://randomuser.me/api/")
    const data=await res.json()
    if(res.ok){
    return data
    }
}

export default getData