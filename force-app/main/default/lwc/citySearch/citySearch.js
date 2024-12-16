import { LightningElement, api, track } from 'lwc';
import getCities from '@salesforce/apex/StateCityController.getCities';

export default class CitySearch extends LightningElement {
    @api stateId; // StateId passed from Parent component
    @track cities;
    @track isLoading = false;
    searchKey = '';

    // Handle search input change for cities
    handleCitySearch(event) {
        this.searchKey = event.target.value;

        // Only fetch data if the search key is not empty and stateId is available
        if (this.stateId && this.searchKey.trim()) {
            this.fetchCities();
        } else {
            this.cities = []; // Clear the city list if search is empty
        }
    }

    // Fetch cities based on stateId and search term
    fetchCities() {
        this.isLoading = true;
        getCities({ stateId: this.stateId, searchKey: this.searchKey })
            .then((data) => {
                this.cities = data;
                this.isLoading = false;
            })
            .catch((error) => {
                console.error(error);
                this.isLoading = false;
            });
    }
}
