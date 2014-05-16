# BlankPress WordPress Theme

Just another blank starter theme for WordPress projects.

## Requirements

BlankPress requires the following:

  * [Bourbon](http://bourbon.io/)
  * [Neat](http://neat.bourbon.io/)

## Installation

To create a new project:

```
cd path/to/your/project
git clone git@github.com:geoffgraham/BlankPress.git
mv BlankPress your-project-directory
```

This repository includes a full WordPress installation in addition to the theme files. Update `wp-config.php` and complete the WordPress installation like you would for any other WordPress site.

If you just want the theme files, then it might be easier to download the full repository ZIP file, extract the theme from `wp-content/themes/BlankPress` and drop it into your project.

Learn more about WordPress installation: 
[WordPress Codex](http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install)

## Bourbon

This theme uses [Bourbon Neat](http://neat.bourbon.io/) for the layout grid. Neat requires Bourbon, so that means there are a ton of SASS mixins and functions included in this package right out of the box. Refer to the [Bourbon docs](http://bourbon.io/docs/) for more info on usage.

Bourbon files are located in `wp-content/themes/BlankPress/lib/styles/scss/vendor`.

## File Structure

This theme is structured with the following component files located in `wp-content/themes/BlankPress/lib`.

### Functions

All functions have been split up and by their respective function. The are located in `wp-content/themes/BlankPress/lib` and imported by `wp-content/themes/BlankPress/functions.php`.

If you need additional functionality (which is likely), I would recommend creating a new file and importing it into `functions.php` using the `require_once` method.

### Stylesheets

All styles are properly enqueued by `lib/functions/enqueue_styles.php`.

### Javascript

All Javascript for the theme is enqueued by WordPress in `lib/functions/enqueue-scripts.php`. You can add your own scripts to `js/` and enqueue them the same way. This is the method recommended by WordPress.

## Learn More About WordPress

[WordPress Codex](http://codex.wordpress.org)