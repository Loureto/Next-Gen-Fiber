import { SignInRepositoryImpl } from "@/modules/auth/data";
import { ISignIn } from "@/modules/auth/domain";
import { makeApiUrl, makeAxiosHttpClient } from "@/shared/main";


export const makeSignIn = (): ISignIn => 
    new SignInRepositoryImpl(makeApiUrl('/auth/signin'), makeAxiosHttpClient())
