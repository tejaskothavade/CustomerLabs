# Assignment Briefing

This project implements a dynamic popup component in React, styled with Tailwind CSS. The popup allows users to define and save a segment by entering a name and dynamically adding dropdown schemas. Data is then sent to a webhook URL as a JSON payload.

---

## Features

- **Popup Component**: A modal popup interface for input and selection.
- **Dynamic Dropdowns**: Users can add multiple dropdown fields dynamically.
- **Unique Option Selection**: Ensures that dropdown options are unique across all dropdowns.
- **Webhook Integration**: Sends the entered data to a webhook URL.
- **Styling**: Fully styled using Tailwind CSS for a modern and responsive UI.
- **Error Handling**: Alerts and logs errors during data submission.

---

## Usage

### Functionalities:

1. **Save Segment Button**:
   - Opens the popup modal.

2. **Enter Segment Name**:
   - Input field for the segment name.

3. **Add Schemas**:
   - Dynamically add dropdowns to include schemas in the segment.

4. **Unique Option Selection**:
   - Dropdowns do not allow duplicate values.

5. **Save Segment**:
   - Sends the entered data to the webhook URL.

6. **Close Button**:
   - Closes the popup without saving.

---

## Payload Structure

When the segment is saved, the following JSON payload is sent to the webhook:

```json
{
  "segment_name": "<Segment Name>",
  "schema": [
    { "<value>": "<label>" },
    { "<value>": "<label>" }
  ]
}
```

### Example:

For a segment name `User Segment` and selected schemas, the payload would look like:

```json
{
  "segment_name": "User Segment",
  "schema": [
    { "first_name": "First Name" },
    { "gender": "Gender" }
  ]
}
```

---

## Customization

- **Styling**:
  Modify the Tailwind classes in the components (`Popup.jsx` and `App.jsx`) for custom styling.

---

## Contact

- **Name**: Tejas Kothavade
- **Email**: tejasko28@gmail.com
- **Contact**: 8308385363

