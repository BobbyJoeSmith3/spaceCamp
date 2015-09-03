About
=========

spaceCamp is an online platform for aspiring space cadets (otherwise affectionately known as interns) to learn about and apply for the out-of-this-world internship program at the independent digital advertising agency space150. Like the International Space Station, spaceCamp.html is the client facing page that is designed to be available year-round to be visited by sentient beings around the world, while spaceCamp-countdown.html is meant to be deployed only during the application period.

Squad
==========
Kadi Jambois - UX
Dennis Sengthong - Design and Development
Bobby Joe Smith III - Lead Programmer, Photography, and Videography
Michael Collins - Copy
Ethan Perushek - Copy and Project Management
Molli Bichrt - Project Management
Josh Lundquist - Direction, Animation, and Video Editing

Set-up
=========

spaceCamp utilizes spaceBase, the Sass-based responsive CSS framework designed by top engineers at space150. Configuration instructions are included below.

spaceCamp has also taken advantage of a variety of components to provide a dynamic and interactive experience. Utilized plug-ins include:
-covervid (https://github.com/stefanerickson/covervid)
-FlipClock (https://github.com/objectivehtml/FlipClock)
-Remodal (https://github.com/VodkaBears/Remodal/releases/tag/1.0.3)
-Vertical Fixed Navigation (http://codyhouse.co/gem/vertical-fixed-navigation/)

Styling
=========
The main styling for the page can be found in scss/ui/layout.scss. Styling associated with a specific plug-in can be found with it's own corresponding sass file, vertical-fixed-navigation.scss for example.


spaceBase
=========

### spaceBase is a Sass-based responsive CSS framework.

Many CSS frameworks are meant to be included and left alone. But spaceBase is a boilerplate layer that can be built upon and tailored for your needs. It combines best practices for today’s responsive web with the core components we use on every project. Consider it the launch pad for your adventures into cyberspace.

spaceBase is meant to be copied into your project for further modifications. The SCSS files in `scss/base/` are usually not modified much, but the files in `scss/ui/` are meant to be completely tailored to your project.

**Coming Soon**

Documentation is currently in orbit. In the meantime, feel free to explore!

### Getting Started

After you download the spaceBase ZIP from the repo, unzip it and copy its contents into your own project.

spaceBase is built with Sass, so you'll need a Sass compiler such as Compass. A Compass `config.rb` is included in the spaceBase folder you can use for reference.

Installing Ruby, Sass, and Compass is outside the scope of this document.

Your editor should be setup with an EditorConfig plugin, so that certain basic code style standards are enforced automatically. See http://editorconfig.org/#download and install the plugin for your editor of choice.

You can remove:
- `tests/`
- `scss/README.md`
- `Gemfile`
- `Gemfile.lock`

### The spaceBase structure

```
fonts/
scss/
  base/
    ...
  ui/
    ...
  _manifest.scss
  _vars.scss
  application-ie.scss
  application.scss
  styleguide.scss
```

Read the [CSS Architecture Overview](scss/README.md) for details on these files.

### Credits

* [Harry Robert’s Inuit.css](https://github.com/csswizardry/inuit.css)
* [Bootstrap](http://getbootstrap.com)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* [Normalize.css](http://necolas.github.io/normalize.css)
* [Eric Meyer’s CSS Reset](http://meyerweb.com/eric/tools/css/reset)

### License

spaceBase is free to use under the [MIT License](LICENSE.md).

Copyright 2015 [space150](http://www.space150.com)
