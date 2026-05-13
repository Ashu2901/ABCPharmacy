import { useEffect, useState } from "react";

import "./App.css";

import SearchBar
from "./components/SearchBar";

import MedicineTable
from "./components/MedicineTable";

import AddMedicineForm
from "./components/AddMedicineForm";

import {
    getMedicines,
    addMedicine,
    sellMedicine
}
from "./services/medicineService";


export default function App(){

    const [medicines,
        setMedicines] =
        useState([]);

    const [search,
        setSearch] =
        useState("");


    useEffect(() => {

        load();

    }, []);


    async function load(){

        const data =
            await getMedicines();

        setMedicines(
            data);
    }


    async function handleAdd(
        medicine){
        try{
        await addMedicine(
            medicine);

        load();
        }catch(error){
          alert(
                error.response
                .data);
        }
    }


    async function handleSell(
        id){

        const quantity =
            prompt(
                "Enter quantity");

        if(!quantity)
            return;

        try{

            const message =
                await sellMedicine(
                    id,
                    quantity);

            alert(
                message);

            load();

        }
        catch(error){

            alert(
                error.response
                .data);
        }
    }


    const filtered =
        medicines.filter(
            x =>
                x.fullName
                .toLowerCase()
                .includes(
                    search
                    .toLowerCase()));


    return (

        <div
            className=
                "page">

            <h1>
                ABC Pharmacy
            </h1>


            <div
                className=
                    "card">

                <h2>
                    Inventory
                </h2>


                <SearchBar
                    value={
                        search
                    }

                    onChange={
                        setSearch
                    }
                />


                <MedicineTable
                    medicines={
                        filtered
                    }

                    onSell={
                        handleSell
                    }
                />

            </div>


            <div
                className=
                    "card">

                <h2>
                    Add Medicine
                </h2>


                <AddMedicineForm
                    onSubmit={
                        handleAdd
                    }
                />

            </div>

        </div>
    );
}