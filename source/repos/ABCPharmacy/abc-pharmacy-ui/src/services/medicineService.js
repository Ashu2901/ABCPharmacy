import axios from "axios";

const API =
    "http://localhost:5217/api/medicines";

export async function getMedicines(){

    const response =
        await axios.get(API);

    return response.data;
}

export async function addMedicine(
    medicine){

    const response = await axios.post(
        API,
        medicine);
    return response.data;
}

export async function sellMedicine(
    id,
    quantity){

    const response =
        await axios.post(
            `${API}/${id}/sell/${quantity}`);

    return response.data;
}