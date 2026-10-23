import Link from "next/link";

interface Props{
    texto: string;
    href?: string;
}

function Button({texto,href, ...props}:Props){

   if(href){
     return (
        <Link href={href}>
        {texto}
      </Link>
     )
   }


    return(
        // 3. type="submit" avisa o form que este botão é o gatilho principal
        <button 
          type="submit" 
          className="bg-[#63E1FD] w-[252px] font-bold p-2 text-white rounded-sm"
        {...props}>
             {texto}
        </button>
    )
}

export default Button;