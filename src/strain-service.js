export class StrainService {
  async getStrain(flavor) {
    try {
      let response = await fetch(`strainapi.evanbusse.com/${process.env.API_KEY}/strains/search/flavor/${flavor}`);
      console.log(response);
      if (response.status != 200) {
        throw Error("I'm sorry stoner, I can't let you do that.")
      }
      let jsonifiedResponse = await response.json();
      console.log(response.status);
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
      console.log(error)
    }
  }
}