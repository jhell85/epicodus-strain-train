export class StrainService {
  async getStrain(flavor) {
    try {
      let response = await fetch(`https://strainapi.evanbusse.com/${process.env.API_KEY}/strains/search/flavor/${flavor}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
    }
  }
 
  async getInfo(name) {
    try {
      let response = await fetch(`https://strainapi.evanbusse.com/${process.env.API_KEY}/strains/search/name/${name}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
    }
  }


}