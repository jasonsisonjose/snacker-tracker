**Snacker Trackers**

App Discription:
Snacker Trackers is web based food recommendation app that allows the user
to sift through a list of nearby restaurants or local food/drink establishments.
The application its self allows the user to store liked restuarants
for quick access if they decide they would like to go there.



**Installation instructions -**

1.) Create a React Environment:
	i.) 	To create a React Environment, the user must ensure that specific libraries
			are present on their device. Create a local folder and Name it "Snacker Trackers"
	ii.)	To install the following modules into the command prompt by using:
				- npm install react
				- npm install Node.js
	iii.)	Once installed, Go into the Snacker Trackers folder within the command terminal and
			use the following line to create the react environment:
				- npx create-react-app snacker_trackers_app
 	iv.)	Navigate into the snacker_trackers_app using cd./snacker_trackers_app and install
			the follow modules:
				- npm install react-dom
				- npm install firebase
				- npm install axios

	Once all modules have been installed, the environment will be ready to for the remaining files
		to be pushed in

**2.) Downloading the Application**
	i.) 	Download the contents of "https://github.com/jasonsisonjose/snacker-tracker" onto a separate 
			local folder.

**3.) Setting up the Application**
	i.) 	Locate and open the contents of the local folder
	ii.) 	In a separate window, Open the contents of the local folder 
			and locate the src folder.
	iii.) 	Copy the src folder of the local Folder and replace the src folder 
			of the snacker_trackers_app file with the copied src folder.

**4.) Running the application**
	i.) 	Navigate to the snacker_trackers_app folder within the terminal and use the command:
			- npm run start


If all Done correctly, the Snacker Trackers application will have loaded into the webpage!




**Operation Guide -**
	
	Main Page:
		The Main consist of a few components including:
			1.) Search Bar
			2.) Price Sorting Drop-Down
			3.) Next and Previous Button
			4.) Displayed Local Restaurant
			5.) Like Button

		To search Restuarants by location, write either the restaurant name, city, or zip code.
	You may also choose to search based by price by also selecting a price range and pressing the 
	search button. The webpage will then display a single restuarant at a time. You may navigate 
	through the restaurants by either pressing the next or previous button respectively. If you press
	the like button and you are logged in, it will store the the information of the liked restuarant
	to a list that you may reference in the future. You may click on the liked page to see the list
	of stored restuarants.
	

	Login/Create User Page:
		Input your username and password in the respective fields and press Enter to log-in
		
		If you do not have an account, click the 'Register Button'. A new window will prompt
	you to input all required fields. Press the button to finish registering the account and go to
	the login page again to login.
		
	
	Liked Page
		The page will display a list of all the likes items in the form of objects to click. 
	After clicking an object, it will redirect you to the a New page where it will display the
	The restuarant information.
	
	About
		You're already here, bruh. But go ahead and try clicking it again (Recursion at its best)
