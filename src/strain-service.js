export class StrainService {
  async getStrain(flavor) {
    try {
      let response = await fetch(`https://strainapi.evanbusse.com/${process.env.API_KEY}/strains/search/flavor/${flavor}`);
      console.log(response.status);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
      console.log(error)
    }
  }
}