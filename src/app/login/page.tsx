"use client";
import SubmitButton from "@/components/Button";
import InputField from "@/components/InputField";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import {auth} from '@/services/firebase';
import { loginValidation } from "@/validationSchema/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

const Login = () => {
    const { handleSubmit, register, formState:{errors}} = loginValidation();
    const router = useRouter();
    useAuthentication();
    const submitForm = (values:any) => {
        signInWithEmailAndPassword(auth,values.email,values.password).then((response)=>{
            router.push(PROFILE_ROUTE);
        }).catch((e)=>{
            console.log("Login Error ", e.message);
            alert("Please try Again");
        });
    }

    return (
        <div className="h-screen flex justify-center items-center bg-bg-color">
            <div className="w-[40%] rounded-md bg-white flex justify-between flex-col">
                <div className="h-28 w-full justify-center flex items-center">
                    <span className="text-4xl text-blue-500 font-bold p-3 rounded-lg">LOG IN</span>
                </div>
                <form onSubmit={handleSubmit(submitForm)} className="h-full w-1/2 mx-auto ">
                    <InputField
                        register={register}
                        error={errors.email}
                        type="text"
                        placeholder="Email "
                        name="email"
                        label="Email"
                    />
                    <InputField
                        register={register}
                        error={errors.password}
                        type="password"
                        placeholder="Password "
                        name="password"
                        label="Password"
                    />
                    <SubmitButton label="Submit" />
                </form>
                <div className="h-20 mx-auto mt-5">
                    <span className="text-sm text-gray-600">Don't have an account?  
                        <Link href={REGISTER_ROUTE}><span className="text-green-btn font-semibold text-md" > Register Here</span></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;