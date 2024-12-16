public with sharing class StateCityController {

    // Fetch States based on search term
    @AuraEnabled(cacheable=true)
    public static List<State__c> getStates(String searchKey) {
        return [
            SELECT Id, Name 
            FROM State__c 
            WHERE Name LIKE :('%' + searchKey + '%')
            ORDER BY Name
        ];
    }

    // Fetch Cities based on selected State and search term
    @AuraEnabled(cacheable=true)
    public static List<City__c> getCities(String stateId, String searchKey) {
        return [
            SELECT Id, Name 
            FROM City__c 
            WHERE State__c = :stateId AND Name LIKE :('%' + searchKey + '%')
            ORDER BY Name
        ];
    }
}
