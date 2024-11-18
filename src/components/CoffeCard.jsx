import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeCard = ({ coffe, coffees, setCoffees }) => {
    const { _id, name, photo, quantity } = coffe
    console.log(coffees.length);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffe/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Quantity: {quantity}</p>
                <div className="card-actions flex flex-col">
                    <Link to={`/updatecoffe/${_id}`}>
                        <button className="btn btn-primary w-40">Edit</button>
                    </Link>

                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary w-40">Delete</button>
                    <button className="btn btn-primary w-40">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;