About
=========

spaceCamp is an online platform for aspiring space cadets (otherwise affectionately known as interns) to learn about and apply for the out-of-this-world internship program at the independent digital advertising agency space150. Like the International Space Station, spaceCamp.html is the client facing page that is designed to be available year-round to be visited by sentient beings around the world, while spaceCamp-countdown.html is meant to be deployed only during the application period.

Set-up
=========

spaceCamp utilizes spaceBase, the Sass-based responsive CSS framework designed by top engineers at space150. Sass compiling is handled through compass.

spaceCamp has also taken advantage of a variety of components to provide a dynamic and interactive experience. Utilized plug-ins include:
-covervid (https://github.com/stefanerickson/covervid)
-FlipClock (https://github.com/objectivehtml/FlipClock)
-Remodal (https://github.com/VodkaBears/Remodal/releases/tag/1.0.3)
-Vertical Fixed Navigation (http://codyhouse.co/gem/vertical-fixed-navigation/)

Styling for FlipClock, Remodal, and Vertical-Fixed-Navigation have all been altered.

The date for the flipclock countdown timer is set in `js/vendor/main.js` on line 78:
`var futureDate  = new Date(2015, 08, 28, 17, 30);`

####NOTE:
Only set the date for the clock to countdown from so that there are three digits at most in the hours section, otherwise spacing will be off. 

Styling
=========
The main styling for the page can be found in scss/ui/layout.scss. Styling associated with a specific plug-in can be found with it's own corresponding sass file, vertical-fixed-navigation.scss for example.

Repositories
============
The code for both sites can be found on the devlopment server.
spaceCamp: http://devo.space150.com/bjs3/spacecamp/spaceCamp.html
spaceCamp-countdown: http://devo.space150.com/bjs3/spacecamp/spaceCamp-countdown.html

A detailed history of the development of this site can be found at:
https://github.com/BobbyJoeSmith3/spaceCamp

Squad
==========
Kadi Jambois - UX
Dennis Sengthong - Design and Development
Bobby Joe Smith III - Lead Programmer, Photography, and Videography
Michael Collins - Copy
Ethan Perushek - Copy and Project Management
Molli Bichrt - Project Management
Josh Lundquist - Direction, Animation, and Video Editing
