import { LightningElement, track } from 'lwc';
import getStates from '@salesforce/apex/StateCityController.getStates';

export default class StateSearch extends LightningElement {
    @track states;
    @track isLoading = false;
    selectedStateId;
    searchKey = '';

    // Handle search input change and fetch states only if the input is not empty
    handleStateSearch(event) {
        this.searchKey = event.target.value;

        // Only fetch data if the search key is not empty
        if (this.searchKey.trim()) {
            this.fetchStates();
        } else {
            this.states = []; // Clear the state list if search is empty
        }
    }

    // Fetch states from Apex
    fetchStates() {
        this.isLoading = true;
        getStates({ searchKey: this.searchKey })
            .then((data) => {
                this.states = data;
                this.isLoading = false;
            })
            .catch((error) => {
                console.error(error);
                this.isLoading = false;
            });
    }

    // Handle state selection and pass stateId to Child component
    selectState(event) {
        this.selectedStateId = event.currentTarget.dataset.id;
    }
}
