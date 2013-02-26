### Welcome to Sliding Menu JS.

Features, usage and instructions are [summarized on the homepage](http://apptitudes.github.com/SlidingMenuJS/).

* Source: [https://github.com/apptitudes/SlidingMenuJS](https://github.com/apptitudes/SlidingMenuJS)
* Homepage: [http://apptitudes.fr](http://apptitudes.fr)
* Twitter: [@SlidingMenuJS](https://twitter.com/SlidingMenuJS)
* Twitter: [@apptitudes](https://twitter.com/apptitudes)


Quick look :
-----------

![Alt text](http://apptitudes.fr/distrib/git/sliding_menu_js/screenshots/screenshot_global.png)

Why this menu ?
-----------

We wanted a sliding menu for a web app.

We've tried a lot of exisiting menu implementations on the web but none were compatible with all of the platforms we intended to support

Of course most of the projects found worked well within their example cases but when we started using it in real environment, bugs started crawling.

Here is the list of most common problems we've encounter while trying various projects found on the web :

* Bug when *content page* is longer than *menu* (content appears on top etc...).
* Bug when *menu* is longer than *content*.
* Menu stay fixed or open when we change the device orientation.
* Ajax loading not supported.

Of course we've done our best to fix all of those bugs in SlidingMenuJs, see below.

Features ?
-----------

Our main goal was to obtain a menu

* Simple to understand and edit / custom
* LightWeight
* Implement Ajax loading for content page
* Support native browser navigation (previous and next button) 
* Device Rotation support (Orientation change is detected and both menu and content adjust their positions)


What features aren't supported ?
-----------
* __Gestures__ : we wanted this menu to work on "old" devices, htc hero for example which doesn't support gestures.

However, __if you wan't to implement basic gestures__ to open your menu, you can __simply add this__ code `(tested on iOs > 3.0 and Android > 2.2)` :
    
    /* TODO : copy past gesture code here */

* __CSS3 animations__ : initially we did support this kind of animation but they we're not compatible with Windows phone so we had to remove it.

Supported OS and phones ?
----------------------------
Here is the list of devices that we have been testing on 

Feel free to complete this list with your own tests (or send us a tweet with the device info you've tested on)

<dl>
  <dt>Operating system</dt>
  <dd>Device name (version OS)</dd>
</dl>

<dl>
  <dt>iOs</dt>
  <dd>iPhone 3GS (v 5.1)</dd>
  <dd>iPhone 4 (v 6.0)</dd>
  <dd>iPhone 4S (v 6.1.1)</dd>
  <dd>iPhone 5 (v 6.1.1`)</dd>
  <dt>Android</dt>
  <dd>Nexus 4 (v 4.2.2)</dd>
  <dd>Galaxy Nexus (v 4.1 / 4.2.2)</dd>
  <dd>Htc Desire (v 2.2)</dd>
  <dd>Htc Hero (v 2.1)</dd>
  <dt>Windows phone</dt>
  <dd>Nokia Lumia 800 (v 7.5)</dd>
</dl>

Who Are You?
------------
I'm @chipowok and I'm part of @apptitudes :
We are a mobile developpement company check us out at [www.apptitudes.fr][]
 

Licence
------------------
[Beerware][]

    /*
     * ----------------------------------------------------------------------------
     * "THE BEER-WARE LICENSE" (Revision 42):
     * <@chipowok> wrote this file. As long as you retain this notice you
     * can do whatever you want with this stuff. If we meet some day, and you think
     * this stuff is worth it, you can buy me a beer in return
     * ----------------------------------------------------------------------------
     */

If you use this code in your project, please send us a link or a screenshot to show the results ;-)
[www.apptitudes.fr]:http://www.apptitudes.fr
[@chipowok]:https://twitter.com/chipowok
[Beerware]:http://en.wikipedia.org/wiki/Beerware

