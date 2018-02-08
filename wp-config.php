<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lahfdb');

/** MySQL database username */
define('DB_USER', 'lahf');

/** MySQL database password */
define('DB_PASSWORD', 'lahflahf');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%vSueXlZ;PA^H$Xk<}4sAb8|J.`zwr]cQ@$rj9LV)|G.W+v>Y4a__ffQBmjD>&I3');
define('SECURE_AUTH_KEY',  'k`:4h62&m[#UWGB|1J{JoA?>?MD{g=*nj;&<$Ke,/wP3*W?a{G[IF^.ak,0oo=6k');
define('LOGGED_IN_KEY',    'VBR]xAEq._BESHNpBww&bRXBXQTCSo;9`weat;G+t~i)l|XjBnVEu{OeAhK}jC|%');
define('NONCE_KEY',        'VSuv/^zTiM=Pz@*,*5z{;{pyrcw&_ QZOurh=Q2/^H/YtS/(;y3 )y*V42x[T4Fr');
define('AUTH_SALT',        ';5rs@f7.R7qR1PjwNplmb*T``RkWGV+^Y4`4YS3.z4;WbFio|+x2)IqbhKlkuds6');
define('SECURE_AUTH_SALT', 'U:/2.BG#LmN1o9(36B)eQRFshD7+D?&fbi|+qmB(k+__}=Jv90pmXU(ib;b*QI8]');
define('LOGGED_IN_SALT',   '9SM%0J2#iMdA`*cKXeB^tDx^IpN?hMt i+Z6}#b_wT}0TiMtgR_rM=]a03tUJO;q');
define('NONCE_SALT',       ' h%-H@:]dj2]^];sQy>e!.@L3W*H^@7ep<aOR/Bo@>`1wXgq7c}vBY*H3O{/UH~5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'lahfwp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
