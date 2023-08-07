import s from './ContactList..module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { deleteContact, getContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';

const ContactList = (props)=>{     
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);  
    const filter = useSelector(selectFilter);    

    const  handleDeleteContact = (e)=>{
        e.preventDefault();
        const id = e.target.dataset.id;        
        dispatch(deleteContact(id));        
    }

    useEffect(()=>{
       dispatch(getContacts());      
      },[dispatch]);   

     
    return(
        <ul>
            {filter === '' ?(                    
                    contacts !== undefined ?
                        contacts.map(contact=>(
                            <li key={contact.id}>{contact.name} {contact.phone} <button className={s.button} data-id={contact.id} onClick={handleDeleteContact}>Delete</button></li>                    
                        ))  
                    : ""                
                ):( 
                        contacts.filter(contact=>(contact.name.includes(filter.toUpperCase()))).map(contact=>(
                            <li key={contact.id}>{contact.name} {contact.number} <button data-id={contact.id} onClick={handleDeleteContact}>Delete</button></li>
                        ))
                )
            }
                     
        </ul>
    )
}
export default ContactList;
