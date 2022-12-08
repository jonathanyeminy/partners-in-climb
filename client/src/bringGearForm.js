import React, { useState } from 'react';
import './login.css'

function BringGear({ tripId, addGear }) {
    const [quantity, setQuantity] = useState('')
    const [name, setName] = useState('')
    function addGearToTrip() {
        let url = `add-gear-to-trip/`
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "id": tripId, "name": name, "quantity": quantity }),
        }).then((res) => {
            
            if (res.ok) {
                res.json().then((user) => {
                                console.log("bring gear", user);
                   addGear(user)
                });
            } else {
                res.json().then((errors) => {

                    console.log(errors);
                    // setErrors(errors.errors);
                });
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className="gearMainContainer" id='login'>
            <div className="loginSubContainer">
                <div className="loginContainer">
                    <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Whatcha bringing?</p>
                    <form>
                        <div className="inputView">
                            <input
                                type="number"
                                name=""
                                placeholder="qty"
                                className="inputStyle"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />

                        </div>
                        <div className="inputView">
                            <input
                                type=""
                                name=""
                                placeholder="Whatcha got?"
                                className="inputStyle"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="loginBtnView" onClick={addGearToTrip}>
                        <button className="loginBtn" >Add to Gear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BringGear;