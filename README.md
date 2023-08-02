# Custom Date Picker Component

This project contains a custom date picker component built using React and Next.js. The date picker allows users to select a date from the calendar, and it also highlights specific holidays with an orange background. When a holiday date is selected, the background changes to a blue color, distinguishing it from other dates.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Custom Date Picker Component

The custom date picker component can be found in the `components/CustomDatePicker.js` file. It utilizes the `react-datepicker` library to render the calendar and adds custom styling to highlight holiday dates.

### Features

- Displays a calendar for selecting dates.
- Highlights holidays with an orange background.
- Prevents the calendar from auto-closing after selecting a date.

### How to Use

To use the custom date picker component in your project, follow these steps:

1. Copy the `CustomDatePicker.js` file into your project's `components` folder.

2. Import the `CustomDatePicker` component into your desired page or component:

```jsx
import CustomDatePicker from '@/components/CustomDatePicker';

function YourComponent() {
  return (
    <div>
      {/* Your other components */}
      <CustomDatePicker />
      {/* Your other components */}
    </div>
  );
}

export default YourComponent;
```

### Styling

The custom date picker component uses CSS modules for styling. The styles specific to the date picker are defined in the `styles/CustomDatePicker.module.css` file.

## Acknowledgments

The custom date picker component is built on top of the `react-datepicker` library, which provides the core functionality for rendering the calendar.

Feel free to customize the component further to suit your project's specific needs. Enjoy using the custom date picker in your applications!