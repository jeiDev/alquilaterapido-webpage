import { APIS } from "~/config";
import { PublicationArrayResponseI, PublicationResponseI } from "~/interfaces/publication/publication.interface";
import Provider from ".";

class PulbicationProvider extends Provider {
    constructor(){
        super(`${APIS.server}/publications`)
    }

    async create(data: FormData): Promise<PublicationResponseI>{

        const response = await this.post("/", data, {
            headers: {
                "Content-Type": `multipart/form-data`
            }
        });
        return Promise.resolve(response);
    }

    async getAll(limit: number, skip: number): Promise<PublicationArrayResponseI>{
        const response = await this.get("/", {limit, skip});
        return Promise.resolve(response);
    }

    async getOne(uuid: string, params: Object = {}): Promise<PublicationResponseI>{
        const response = await this.get(`/${uuid}`, params);
        return Promise.resolve(response);
    }
}

const publicationProvider = new PulbicationProvider();

export default publicationProvider;
