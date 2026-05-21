const baseurl = "http://localhost:3000"

// read 

export const getdata = async()=>{
    const res = await fetch(`${baseurl}/car/getCars`)
    return res.json()
}