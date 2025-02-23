# Drum Machine

A Drum Machine built with React. This app allows users to play a variety of drum sounds by either clicking on interactive pads or pressing corresponding keyboard keys. The display dynamically updates to show the name of the sound currently being played, providing a fun and immersive experience.

## Features

- 9 pads, each representing a different drum sound.
- Click a pad or press a key to play the sound.
- Display updates to show the name of the currently playing sound.
- Easy-to-use interface for a fun and interactive experience.

## Technologies Used

- **React** for building the UI and handling user interactions.
- **CSS** for styling and layout.
- **Audio files** for the drum sounds (located in the `audio` folder).


### Key Files:

- **App.jsx**: Main component that renders the drum pads and handles user interactions.
- **Pad.jsx**: Represents an individual drum pad.
- **padsData.js**: Contains an array of objects defining each drum pad's `id`, `innerText` (key label), and the name of the audio file it plays.

## How It Works

1. The `padsData.js` file holds an array of 9 objects, each representing a pad. Each object has:
    - `id`: Unique identifier for the pad.
    - `innerText`: The label that corresponds to a key (e.g., "Q", "W", "E").
    - `audioClip`: The name of the audio file to be played.

2. In **App.jsx**, the app maps through the `padsData` array to render the pads dynamically.
   
3. Each **Pad** component:
    - Displays the `innerText` (key label).
    - Plays the corresponding sound when clicked or when the associated key is pressed.

4. The display updates to show the name of the audio currently being played.

## How to Use

1. Click on any pad to hear the corresponding sound.
2. Alternatively, press the associated key on your keyboard (e.g., `Q`, `W`, `E`, etc.).
3. The display will show the name of the currently playing sound.
