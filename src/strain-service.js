export class StrainService {
  async getStrainbyFlavor() {
    try {
      let response = await fetch(`strainapi.evanbusse.com/${process.env.FLAVOR_KEY}/strains/search/flavor/FLAVOR`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.warn("There was a problem.... ewps!");
    }
  }
}