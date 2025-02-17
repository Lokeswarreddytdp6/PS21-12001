import Link from "next/link";
export default function Navbar(){
    return(
        <>
            <Link href='/'>Home</Link>
            <br />
            <Link href='/upload'>upload</Link>
        </>
    )
}