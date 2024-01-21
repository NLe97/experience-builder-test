# experience-builder-test
* Set Up Documentation here: https://www.contentful.com/developers/docs/tutorials/general/experience-builder/
* Please note, currently in Alpha but I had the feature enable for my space ID: 4163m42u0lcs

### Two Main Stages to set this up:
* Set up in Contentful Web App
* Project Setup

## Setup in Contentful Web App
* Log into Contentful
* Navigate to Space and Environment you want to use Experience Builder in.
* Go to the Content model tab. Click Add new and select Experience Type from the drop-down. The “Add a new Experience Type” window is displayed.
* Fill Out Required Fields
* In the Preview Setup Portion of the Experience Type provide the preview URL, in this case we're using local host mine is: http://localhost:5173 (no tokens used for this demo)
* **Note** The experience type is created and automatically configured with its default fields. Some of them are intentionally disabled for editing or deleting, to ensure a working integration. "Title" and "Slug" fields are optional and can be edited. Localization is optional for both fields.

## Project Set Up
* In this demo, git clone this repo to your local PC
* Open your terminal > switch to directory of your choice > Ex: cd Desktop/
* then git clone https://github.com/NLe97/experience-builder-test.git
* After cloning the repo > cd experience-builder-test/
* Open the terminal in vscode > type npm i > this is to include the sdk any dependencies needed to run this project
* **Note** you still need to create a 






