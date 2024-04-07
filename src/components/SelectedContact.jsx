import { useState, useEffect } from 'react'

function SelectedContact({setSelectedContactId, selectedContactId}){
    const [contact, setContact] = useState({})

    useEffect(() => {
        async function getContact(){
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();

                setContact(result);
                console.log(contact);
            } catch (error) {
                console.log(error)
            }
        }
        getContact();
    }, [])
    return (
        contact.name ? ( <div>
            <h1>{contact.name}</h1>
        <p>Username: {contact.username}</p>
        <p>Email: {contact.email}</p>
        <address>
            Address: <br></br>
            {contact.address.street} <br></br>
        {contact.address.suite} <br></br>
        {contact.address.city}<br></br>
        {contact.address.zipcode}
    </address>
    <p>Phone: {contact.phone}</p>
    <p>Website: {contact.website}</p>
    <div>
        <h4>Company:</h4>
        <p>Name: {contact.company.name} </p>
        <p>Catch Phrase: {contact.company.catchPhrase}</p>
        <p>Company Jibberish: {contact.company.bs}</p>
    </div>
    <button onClick={()=>setSelectedContactId(null)}>Back to ContactList</button>
   </div>) : <div></div>
    )}
    export default SelectedContact