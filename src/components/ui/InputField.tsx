"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

function AuthForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
     
    // 1. Tipo correto de evento de formulário no React
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault(); // Impede o navegador de recarregar a página
        setError("");
        console.log("Enviado para a API:", { email, password });
        window.alert('epa')
    }

    return(
        // 2. O form assume o controle chamando o handleSubmit
        <form onSubmit={handleSubmit}>
            <fieldset className="input-field flex flex-col gap-2">
                 <label htmlFor="email">Email</label>
                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                 <label htmlFor="password">Password</label>
                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </fieldset>

            <Button texto="login" />
        </form>
    )
}

export default AuthForm;