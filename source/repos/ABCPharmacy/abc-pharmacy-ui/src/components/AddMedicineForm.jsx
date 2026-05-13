import { useState } from "react";

export default function AddMedicineForm({ onSubmit }) {
    const [form, setForm] = useState({
        fullName: "",
        notes: "",
        brand: "",
        quantity: "",
        price: "",
        expiryDate: ""
    });
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const labels = {
        fullName: "Medicine Name",
        notes: "Notes",
        brand: "Brand",
        quantity: "Quantity",
        price: "Price",
        expiryDate: "Expiry Date"
    };

    function update(key, value) {
        setForm({
            ...form,
            [key]: value
        });
    }

    function handleSubmit() {
        const quantity = Number(form.quantity);
        const price = Number(form.price);

        if (!form.fullName.trim()) {
            alert("Medicine name is required");
            return;
        }

        if (quantity <= 0) {
            alert("Quantity must be greater than 0");
            return;
        }

        if (price <= 0) {
            alert("Price must be greater than 0");
            return;
        }

        if (!form.expiryDate) {
            alert("Expiry date is required");
            return;
        }

        onSubmit(form);
    }

    return (
        <>
            <div className="form-grid">
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        placeholder={labels[key]}
                        type={
                            key === "expiryDate"
                                ? "date"
                                : key === "quantity" || key === "price"
                                ? "number"
                                : "text"
                        }
                        min={
                            key === "expiryDate"
                                ? new Date().toISOString().split("T")[0]
                                : key === "quantity" || key === "price"
                                ? "1"
                                : undefined
                        }
                        step={
                            key === "price" ? "0.01" : undefined
                        }
                        value={form[key]}
                        onChange={(e) => update(key, e.target.value)}
                    />
                ))}
            </div>

            <button className="add-btn" onClick={handleSubmit}>
                Add Medicine
            </button>
        </>
    );
}