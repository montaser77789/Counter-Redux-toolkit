import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

function Login() {
    return ( <>
<form className="space-y-3 max-w-sm mx-auto">
<Input placeholder="username"/>
    <Input placeholder="email"/>
    <Input placeholder="password"/>
    <Textarea placeholder="message"/>
    <Button fullWidth>send feed back</Button>
</form>
    </> );
}

export default Login;