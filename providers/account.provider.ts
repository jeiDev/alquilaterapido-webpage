import { APIS } from "~/config";
import { AccountResponseI } from "~/interfaces/account/account.interface";
import { SocialTypeAuthTypeI } from "~/interfaces/auth/auth.enum";
import { SignUpProviderI } from "~/interfaces/provider/account.provider";
import Provider from ".";

class AccountProvider extends Provider {
    constructor(){
        super(`${APIS.server}/accounts`)
    }

    async signin(email: string, password: string): Promise<AccountResponseI>{
        const response = await this.post("/signin", {email, password});
        return Promise.resolve(response);
    }

    async signinSocial(token: string, provider: SocialTypeAuthTypeI): Promise<AccountResponseI>{
        const response = await this.post("/signin/social", {token, provider});
        return Promise.resolve(response);
    }

    async signupSocial(token: string, provider: SocialTypeAuthTypeI, payload: object): Promise<AccountResponseI>{
        const response = await this.post("/signup/social", {token, provider, payload});
        return Promise.resolve(response);
    }

    async signup(data: SignUpProviderI): Promise<AccountResponseI>{
        const response = await this.post("/signup", data);
        return Promise.resolve(response);
    }

    async me(): Promise<AccountResponseI>{
        const response = await this.get("/me");
        return Promise.resolve(response);
    }
}

const accountProvider = new AccountProvider();

export default accountProvider;
