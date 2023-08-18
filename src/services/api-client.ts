import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "3d3ef583fd3f4cb4b938fa047b48cb6d"
    }
})