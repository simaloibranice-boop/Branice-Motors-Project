import React, { useState } from "react";

function Login() {
    const [register, setRegister] = useState(false);
    const[form, setForm] = useState({name: '', email: '', password:'', confirm: '', id: ''});

   const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
   const submit = e => {
    e.preventDefault();
    if (register) {
        if (form.password !== form.confirm) return alert('Passwords do not match');
        if (form.id.length > 9) return alert('ID max 9 digits');
        return alert(`Registered: ${form.name}`);  
    }
    alert(`Logged in: ${form.email}`);
   };
   return (
    <div className="bg-blue-500 text-green-300 min-h0screen flex flex-col">
        <h2 className="text-4xl font-bold mb-4">{register ? "Register" : "Login"}</h2>
        <form onSubmit={submit} className="space-y-2">
            {register && <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="border p-2 w-full "required />}
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" required />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full" required />
            {register && <>
            <input name="confirm" type="password" placeholder="Confirm Password" value={form.confirm} onChange={handleChange} className=" border p-2 w-full" required />
            <input name="id" placeholder="National Id (max 9 digits)" value={form.id} onChange={handleChange} maxLength={9} className="border p-2 w-full" required />
            </>}
            <button type="submit" className={`w-full py-2 rounded text-green ${register ? "bg-green-500":'bg-yellow-500'}`}>
                {register ? 'Register' : 'Login'}
                </button>
        </form>
        <p className="mt-2 text-sm">
            {register ? 'Already have an account?' : 'Do not have an account?'}{''}
            <button className="text-blue-500" onClick={() => setRegister(!register)}>
               {register ? 'Login' : 'Register'}
            </button>
        </p>
    
    </div>
   );
}

export default Login;