import { injectable, inject } from "inversify";
import { GoogleCloudServices } from "./google-cloud.services";

const axios = require('axios').default;

@injectable()
export class GoogleCloudClient {

    constructor(@inject(GoogleCloudServices) private googleCloudServices: GoogleCloudServices) { }

    async readImage(url: string) {
        var retVal: string[] = []
        // Get image as buffer
        const bytes = await axios.get(url, { responseType: 'arraybuffer' })
            .then((response: any) => Buffer.from(response.data, 'binary'))
            .catch((error: any) => console.log(error))

        var image = { content: bytes }
        var imageContext = { languageHints: ["en", "en-GB", "nl", "nl-BE"] };

        const request = {
            image: image,
            imageContext: imageContext
        };

        retVal = await this.googleCloudServices.textClient
            .documentTextDetection(request)
            .then((response: any) => response[0].textAnnotations[0].description.split('\n'))
            .catch((error: any) => console.log(error))

        return retVal
    }
}