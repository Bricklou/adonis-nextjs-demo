/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AppsController = () => import('#controllers/apps_controller')
import router from '@adonisjs/core/services/router'

router.get('*', [AppsController, 'index'])
