export class StrainService {
  async getStrain() {
    try {
      let response = await fetch(`http://strainapi.evanbusse.com/${process.env.API_KEY}/strains/search/all`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
    }
  }
}