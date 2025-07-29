import LoginForm from "../assets/components/Auth/LoginForm"
import HeaderMain from "../assets/components/Home/HeaderMain"

export default function AuthPage(){
    return (
        <>
            <HeaderMain showSearchBar={false}/>
            <LoginForm/>
        </>
    );
}