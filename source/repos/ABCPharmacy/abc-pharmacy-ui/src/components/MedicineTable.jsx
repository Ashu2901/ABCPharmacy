export default function MedicineTable(
    {
        medicines,
        onSell
    }) {

    return (

        <table>

            <thead>

                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Expiry</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>

            </thead>


            <tbody>

                {
                    medicines.map(
                        x => {

                        let cls = "";

                        const diff =
                            (
                                new Date(
                                    x.expiryDate)
                                -
                                new Date()
                            )
                            /
                            86400000;


                        if(diff < 30)
                            cls =
                                "expired";

                        else if(
                            x.quantity < 10)
                            cls =
                                "low-stock";


                        return (

                            <tr
                                key={x.id}
                                className={cls}>

                                <td>
                                    {x.fullName}
                                </td>

                                <td>
                                    {x.brand}
                                </td>

                                <td>
                                    {x.expiryDate}
                                </td>

                                <td>
                                    {x.quantity}
                                </td>

                                <td>
                                    {
                                        Number(
                                            x.price)
                                        .toFixed(
                                            2)
                                    }
                                </td>

                                <td>

                                    <button
                                        onClick={
                                            () =>
                                            onSell(
                                                x.id)
                                        }>

                                        Sell

                                    </button>

                                </td>

                            </tr>
                        );
                    })}
            </tbody>

        </table>
    );
}