# BlankPress WordPress Theme

A blank starter theme for WordPress projects.

## Requirements

Foundation requires the following:

  * Ruby 1.9+
  * [Foundation](http://foundation.zurb.com)
  * [Compass](http://compass-style.org/): `gem install compass`

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

## Foundation

This theme uses a custom installation of Foundation 5 that only imports and compiles the grid. Other components are also available, if needed, by uncommenting components in `wp-content/themes/BlankPress/lib/styles/scss/foundation/app.scss`.

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

## Learn More About Foundation

[Foundation Docs](http://foundation.zurb.com/docs)