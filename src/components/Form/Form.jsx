import s from './Form.module.css'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';




const Form = props =>{    

    const dispatch = useDispatch();

    const  heandleSave=(e)=>{
   
        e.preventDefault();    
        const name = e.currentTarget.elements.name.value.toUpperCase();
        const number = e.currentTarget.elements.number.value;   
        
        const contact = { name: name, phone:number};  
        dispatch(addContact(contact))   
      
        e.target.reset();   
    }

    return(
        <form className={s.form} onSubmit={heandleSave}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"           
            required
            id="name"
            className={s.input}
        />
        <label htmlFor="number">Number</label>
        <input
            type="tel"
            name="number"            
            required
            id='number'
            className={s.input}
        />
        <button type='submit'>Add Contact</button>
    </form>
    )   
}

export default Form;