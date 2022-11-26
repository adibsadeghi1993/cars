import axios from "axios"
 const instance= axios.create({
    baseURL:"http://localhost:4000"
})

const getAllCars=async()=>{
    return await instance.get("cars")
}

export {getAllCars}  