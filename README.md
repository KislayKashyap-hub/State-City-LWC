# StateCity Finder 🌍️

An interactive Salesforce Lightning Web Component (LWC) application that allows users to search for States and their dependent Cities dynamically. This project demonstrates using parent-child components, Apex integration, SLDS styling, and best practices in LWC development.

---

## Features 🏢🌆

1. **Dynamic State Search**: Search for states using a real-time input field.
2. **Dependent City Search**: Select a state to dynamically search for related cities.
3. **Parent-Child Architecture**: Uses a parent component for states and a child component for cities.
4. **Loading Indicators**: Integrated spinners to improve user experience during data fetching.
5. **SLDS Integration**: Styled using Salesforce Lightning Design System for consistency.
6. **Best Practices**: Ensures Apex CRUD/FLS compliance and modular LWC development.

---

## Installation 🔄

### Prerequisites

- Salesforce DX installed
- Salesforce CLI installed
- Git installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/state-city-lwc.git
   ```

2. Navigate to the project directory:

   ```bash
   cd state-city-lwc
   ```

3. Authorize your Salesforce org:

   ```bash
   sfdx force:auth:web:login
   ```

4. Push the code to your org:

   ```bash
   sfdx force:source:push
   ```

5. Assign the permission set:

   ```bash
   sfdx force:user:permset:assign -n StateCityPermission
   ```

6. Open the org:

   ```bash
   sfdx force:org:open
   ```

7. Add the `stateSearch` component to a Lightning page.

---

## Usage 🔍

1. **Search for a State**:

   - Type the name of a state in the input field.
   - A list of matching states will appear.

2. **Search for a City**:

   - Click on a state to load the dependent city search input field.
   - Type the name of a city to see matching results.

3. **Dynamic Updates**:

   - The City search dynamically updates based on the selected state.

---

## Project Structure 🗂

### Apex Classes

1. **StateCityController.cls**
   - Handles fetching States and Cities from the database.
   - Ensures CRUD and FLS compliance.

### Lightning Web Components

#### Parent Component: `stateSearch`

- Displays a searchable input field for States.
- Passes the selected State ID to the child component.

#### Child Component: `citySearch`

- Dynamically displays cities related to the selected State.
- Allows city-specific searching.

---

## CSS Design 🎨

### Styles Used

1. **SLDS Classes**:

   - `lightning-card`: Used for consistent card-like UI components.
   - `lightning-spinner`: Displays a spinner while data is loading.

2. **Custom CSS**:

   ```css
   ul {
       list-style-type: none;
       padding: 0;
   }
   li {
       cursor: pointer; /* Adds a hand pointer */
       padding: 0.5rem;
       border: 1px solid #ccc;
       margin: 0.5rem 0;
   }
   li:hover {
       background-color: #f4f4f4;
   }
   ```

### Customizations

- **Hand Pointer**: Ensures clickable elements are visually interactive.
- **Hover Effects**: Highlights list items when hovered for better UX.

---

## Best Practices Followed 🚀

1. **Parent-Child Separation**: Clean division of responsibilities between components.
2. **CRUD/FLS Compliance**: Ensures Apex operations respect user permissions.
3. **SLDS Usage**: Adheres to Salesforce's design principles.
4. **Error Handling**: Graceful handling of server and client-side errors.

---

## Future Enhancements 🌟

1. **Pagination**: Add support for large datasets with pagination.
2. **Filters**: Enable additional filters for cities (e.g., population, region).
3. **Dynamic Styling**: Allow customization of UI themes.

---

## License 🔒

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute and star the repository if you find this useful! 🚀

