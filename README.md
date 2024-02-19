# Love Letter Genie - Hackathon - February 2024<!-- omit from toc -->

This project is a website where users can generate a love letter to their loved one. They can use the additional features to copy this message directly to their clipboard, or send directly to their loved one via WhatsApp.

[Deployed Website: Love Letter Genie](https://moabdelbasset.github.io/FebHackathon/index.html)

![Website on all screens](/assets/images/readme-images/all-screens.png)

This is joint project for the February 2024 Hackathon with Code Institute. Below are links to all authors' GitHub profiles:

[Carl Ellis](https://github.com/carl2087/)\
[Mohamed Ayman](https://github.com/moabdelbasset)\
[Emmanuel Oluwadare](https://github.com/Emmy-Dare274)\
[Diarmuid Henry](https://github.com/diarmuidhenry/)\
[Ahmad Jawed Hazrati](https://github.com/Ahmad-Hazrati)\
[Kate McGuane](https://github.com/KateMcGuane)

## Table of Contents<!-- omit from toc -->
- [Website Objective](#website-objective)
- [Potential Users](#potential-users)
- [Design \& Development](#design--development)
  - [5 Planes of UX](#5-planes-of-ux)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Wireframes](#wireframes)
    - [Home Page](#home-page)
    - [Team Members Page](#team-members-page)
- [Features](#features)
- [Technology \& Resources](#technology--resources)
- [Deployment](#deployment)
- [Issues/Bugs](#issuesbugs)
- [Testing \& Validation](#testing--validation)
  - [Functional Testing of Website](#functional-testing-of-website)
    - [Home Page](#home-page-1)
    - [Team Members Page](#team-members-page-1)
  - [WAVE Evalutation Tool](#wave-evaluation-tool)
  - [PageSpeed Insight Tests](#pagespeed-insight-tests)
  - [HTML Code Validation](#html-code-validation)
  - [CSS Code Validation](#css-code-validation)
- [Future Improvements/Development](#future-improvementsdevelopment)
- [Acknowledgments](#acknowledgments)

## Website Objectives

- Help users to create a personalised romantic letter to their loved one.
- Make it easy to share said letter, even for those not comfortaale/familiar with features such as copy and paste.
- ???Show the user links to websites where they can buy romantic gifts for their loved ones, including mugs/cards with their romantic message printed on???.

## Potential Users

- People who want a romantic gesture for their loved one.
- Those who struggle to write/create elaborate, well structured sentances.

## Design \& Development

### 5 Planes of UX

#### Strategy

Create a simple, clean, professional site whose main purpose is to generate a personalised romantic love letter.

#### Scope

The letter can be personalised by writing the user's name and their loved ones name, as well as optional extra words that may be of significance to them, e.g. a location of a previous shared holiday; a favourite sport/hobby that they share; their favourite food.\
The generated letter can be copied directly to the clipboard, or sent directly in WhatsApp by clicking on clear icons.\
A collection of links to sites where users can buy gifts for their loved one will also be included, as well as links to the authors of the page's GitHub profiles.

#### Structure

The *Home* page will have the love letter generator in focus, with clear prompts for the user to fill in. The generate text will appear on this page. Links to the *Team Members* and ???*Links*???? pages will appear in the header (compressed into a hamburger icon for smaller screens).

#### Skeleton

A simple header containing the page logo, and links to the other pages in the site will appear at the top of each page. A footer containing copyright information and a link the GitHub repo will also appear on each page.

See [Wireframes](#wireframes) below.

#### Surface

![Colour Scheme](/documentation/love-letter-genie-coolors.png)

This colour palette reflects the romantic theme of the website. They are generally soft, with some bolder colours to accent the page and make the words of importance stand out.

### Wireframes

#### Home Page

![Home Page Wireframe](/documentation/wireframes/home_letter_generator_wireframe.png)

#### Team Members Page

![Team Members Page Wireframe](/documentation/wireframes/team_members_letter_generator_wireframe%20copy.png)

## Features

A soft, clean home page, where the goal/function of the site is obvious and apparent.

??? SCREENSHOT OF HOME PAGE ???

Clear prompts to the user, and easy to understand instructions/buttons

??? EXAMPLE OF FILLED IN INFORMATION ???

Hearts fill the screen, informing the user that their letter is about to be created.

??? HEART SCREEN ???

A personalised message appears, as if being written in real time, in a handwriting-style font

??? EXAMPLE OF NOTE BEING WRITTEN OUT ???

Icons allowing the user to share their created message by either copying to their clipboard, or sharing directly via WhatsApp 

??? CLOSE UP OF ICONS ???

??? IF INCLUDED *Gifts* page, including links to gift websites where the user can pair their romantic letter with a gift, including ones adorning their custom message. ???

??? SCREENSHOT OF GIFTS PAGE ???

*Team Members* page, giving the user the option to contact the authors, and/or see their other work 

??? SCREENSHOT OF TEAM MEMBERS PAGE ???

## Technology \& Resources

- **IDE :** Various IDEs were used by the members of the team, including VSC and CodeAnywhere.
- **Languages :** HTML for basic page structure. Bootstrap and CSS for styling. JavaScript for interactivity. Markdown for this readme.
- **Template :** The [CodeInstitute Gitpod template](https://github.com/Code-Institute-Org/gitpod-full-template) was used in order to install all the relevant tools for the code to function.
- [Github](https://github.com/) was used to host the project. Each author worked on their own self-titled branch before committing changes - after group approval - to the main branch.
- [Balsamiq](https://balsamiq.com/) was used to create wireframes for mobile, tablet and desktop ???
- [Favicon.io](https://favicon.io/favicon-generator/) was used to find the page's favicon ???
- [WAVE](https://wave.webaim.org/) and [PageSpeed Insights](https://pagespeed.web.dev/) testing tools were used to locate minor issues and check both accessibility and performance. 

## Deployment

Once the basic design of the website was finished, we deployed it to GitHub Pages. [The history of all deployed versions of the site can be found here](https://github.com/moabdelbasset/FebHackathon/deployments).

### How to Deploy to GitHub Pages

1. Log in to [GitHub](https://github.com/).
2. Select *FebHackathon* from the list of repositories, of any of the authors.
3. Click Settings > Pages.
4. Under *Source*, select *Deploy from a branch*.
5. Under *Branch*, select *main* and */root*, then click *Save*.
6. Wait a couple of minutes for the site to deploy, then navigate back to the repository.
7. Click *Deployments*, which now should have appeared on the main repository page.
8. Under *Active Deployments*, click the link https://moabdelbasset.github.io/FebHackathon/. (The deployed page will open in the current tab).

### How to Clone Repository

1. Go to the [GitHub repository](https://github.com/moabdelbasset/FebHackathon/).
2. Click the green *Code* drop-down button.
3. Click *HTTPS* and copy the URL.
4. Open your IDE, and open a terminal.
5. Type `git clone URL`, replacing `URL` with the URL copied in step 3.

## Issues/Bugs

- If there are a large number of 'un-romantic' words given in the prompt, the message generator will simply ignore them, as it deems it impossible to create a love letter including those words. By going into more depth with the prompt, and researching more about how the AI constructs its sentences, we could avoid this in the future. However, for the short time scale that we have for this product, this is beyond a reasonable workload.

## Testing \& Validation

### Functional Testing of Website

#### Home Page

#### Team Members Page

### WAVE Evaluation Tool

WAVE revealed no errors and no contrast errors. As this needed to be tested throughout all moments of use, no single screenshot could show this.

### PageSpeed Insight Tests

### JSHint

JSHint returned no errors, (((only ____ warnings about functions being contained within other functions. This is deemed acceptable for this project and so does not need addressing))).

### HTML Code Validation

### CSS Code Validation

## Future Improvements/Development

- ???Include links to external sites where gifts can be bought, including the generated text??? MIGHT BE INCLUDED; CHECK BEFORE SUBMISSION.
- Expand on the WhatsApp feature, by adding options to share via Messenger, Facebook, Twitter, Instagram.
- Add a feature where the user can generate a link, which when opened, is a blank page (possibly styled to look like paper) so they can read the message as it is generated, like on the main page. This way, the recipent can enjoy the handwritten effect feature, as well as the user.
- Add another animated feature to the text generation, so that it appears that a hand is writing the generated text.

## Acknowledgments

- Hackathon Staff for help and guidance throughout the process, especially our facilitator Andrew.
