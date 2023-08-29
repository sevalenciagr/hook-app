import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWitchCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm ({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;


    useEffect(() => {
    //   console.log('useEffect called');    
    }, []);
    
    useEffect(() => {
    //   console.log('formState change');    
    }, [ formState ]);
    
    useEffect(() => {
    //   console.log('email change');    
    }, [ email ]);



  return (
    <>
        <h1>Form with custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"    
            value = { username }
            onChange={ onInputChange }            
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="example@gmail.com"
            name="email"    
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"    
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>

        
        
    </>
  )
}
