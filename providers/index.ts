import axios, {AxiosInstance, AxiosRequestConfig, } from "axios";
import { ProviderResponseI } from "~/interfaces/provider.interface";

class Provider {
    private readonly axios: AxiosInstance;

    constructor(api: string) {
        this.axios = axios.create({
            baseURL: api,
            withCredentials: true
        });
    }

    private getParams(params: Object={}){
           return Object.keys(params).map((key) => {
               let value = params[key];
               value = typeof value == typeof {}?JSON.stringify(value):value;
   
               return `${key}=${value}`;
           }).join("&");
    }

    protected get(url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            let _params = this.getParams(params);
            this.axios.get(`${url}${_params ? `?${_params}` : ""}`, config)
            .then(response => resolve(response))
            .catch(error => resolve(error.response.data));
        });
    }
    
    protected post(url: string, data: object | FormData = null, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            this.axios.post(url, data, config)
            .then(response => resolve(response))
            .catch(error => resolve(error.response.data));
        });
    }

    protected update(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            this.axios.patch(url, data, config)
            .then(response => resolve(response))
            .catch(error => resolve(error.response.data));
        });
    }

    protected delete(url: string, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            this.axios.delete(url, config)
            .then(response => resolve(response))
            .catch(error => resolve(error.response.data));
        });
    }
}

export default Provider;