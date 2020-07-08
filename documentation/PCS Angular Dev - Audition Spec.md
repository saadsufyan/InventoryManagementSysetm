# Premier Crop Systems - Angular Code Challenge

## Introduction
Thank you for your interest in joining us at Premier Crop Systems.  We would like to use this coding exercise as a way to evaluate your coding style, front-end skills, and how you process this challenge.   There are _many_ ways to solve it and no perfect solution.
  
## Expectations:  
- Spend as much time on this as you would like, but please submit your results.  We'll have our next conversation regardless of whether it works. 
- We included _stretch goals_ at the end of the user stories.  While they may be a fun challenge, they are intended to give you ideas to show off your skills; they are "nice to haves" and not part of the requirements.
- Ideally, when you have completed the exercise: submit a Pull Request to the **main** branch in GitHub.  If there are git issues or you're not able to submit the Pull Request, for some reason, please zip your Angular project and email it to both keith@premiercrop.com and adam@premiercrop.com
- Our developers work remote and across multiple time zones.  While we often work synchronously and pair program via video chats, we also value written communication.  If you have questions during this exercise, please email adam@premiercrop.com
- If you are not able to complete the exercise, please still submit your results and we will go through the obstacles in the interview.  We are a team made of members who each have different strengths and weaknesses; if you join our team, you will not be stuck.
- You can use any plugins, frameworks, libraries you desire
- Do not worry about building a backend for the Angular app to connect with.  For the API calls, it is fine to call JSON files locally from the file system (see https://stackoverflow.com/questions/47206924/angular-5-service-to-read-local-json-file for an example)
- We hope this challenge is fun to complete.  Thank you again for your interest in joining our team

## Project:
Build a user-facing Angular app that helps users manage crop protection product inventory, grain prices, and invoices.  For this exercise you will focus on the crop protection product interface, but will have placeholders for the other buckets of work.  Included in the **documentation** directory are: 
1. a Sketch (Mac-only) design document showing the flow of the components and user interfaces
2. a PDF of the separate components and states of the forms within
3. an animated GIF simulating what a user would experience in the browser.  Note: the yellow hover styles on the buttons are artifacts of the Sketch mockup software and not something for you to re-create in CSS!  

**If using git for source control (highly recommended), please create a git branch before your first commit.  This will give you something to Pull Request back into the main branch once you've completed your work**

## User Stories
### 1.  Scaffold an Angular App
As a user, I want to have a central dashboard screen that gives me big, large buttons to navigate to three main types of information I want to manage: crop protection inventory tracking, importing invoices, and planning my profitability and grain selling prices.  

### 2.  Inventory Tracking List
As a user, I want to have an interactive table that lets me see my inventory and see a snapshot of my overall investment.  I want it to not be slow.  I want it to "remember where I was" when I come back to it from other parts of the site.

### 3.  Inventory Tracking List - Remove Products
As a user, I want the ability to change how much of a specific product I have in stock.  I would also like a straightforward way to remove the product completely from inventory.  I am sometimes prone to mistaking some products for each other, so please make me confirm I really want to remove it.  In fact: give me a warning that says: "Are you sure you want to remove all {{of this product}} from inventory?  Setting the in stock quantity to 0 will keep it available in the list and crop protection plans.  Removing it will remove it from the list, crop protection plans and cause all existing crop protection plans to re-calculate."

### 4.  Inventory Tracking List - Add Product
As a user, I have a friend who loves to sell me the latest-and-greatest products to keep my plants healthy.  I want an easy form to allow me to enter: 1) Product, 2) Purchase Units, 3) Number in Stock, 4) Price per Unit and have it calculate my total investment for me.   For the products, I would love to not have to type the full product name if I've used it in past years; but I'm willing to type it if I have to.

### 5.  API Calls
As a database administrator, there will be a slight lag time between when the product is saved via the API and when it becomes available via the API GET call you made to populate the list (I think reports or something have to generate before it's "live").   Because of this, please trust that a successful API save call will eventually return in the GET.  Update the user's list on the page without calling the GET again.   The API makes available:
- /inventory/ListForUser
- /inventory/SaveItem
- /products/List
- /products/purchaseUnits/List

## Stretch Goals
1.  Have the app setup to be faster for the user by routing via lazy-loaded modules
2.  Have the inventory list be responsive to different resolutions and devices
3.  Have the New Product form have a typeahead for the products so users can enter only a substring of the product name and select it quicker
4.  Only call a Service for API interaction (hint: Ngrx, reducer functions)
5.  **Inventory Tracking List - Edit Details**.  As a user, I don't want a separate form to edit the details - I'd rather edit in the list.   I will only ever need to change the 1) Number in Stock, and 2) Price Per Unit details.  Please make me confirm any changes I have made and once I have confirmed, please re-calculate my total investment for me.
