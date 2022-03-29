## Testing

In order to test your changes, you need to have the Heroku command line installed on
your local machine. Next, you can use the Heroku command line to create an app,
manually install the `addons` and `labs` listed in the app.json file at the root of
this repo. In the example below we assume you are at the root of the Baserow repo and
we are going install a heroku app named `configurador-smart`, this can of course be named
differently.

```
$ heroku apps:create configurador-smart
$ heroku stack:set -a configurador-smart container

# We need to add all the addons listed in the app.json file.
$ heroku addons:create -a configurador-smart heroku-postgresql:hobby-dev
$ heroku addons:create -a configurador-smart heroku-redis:hobby-dev
$ heroku addons:create -a configurador-smart mailgun:starter

# We need to add all the labs listed in the app.json file.
$ heroku labs:enable -a configurador-smart runtime-dyno-metadata

# Finally we need to set all the environment variables listed in the app.json file.
$ heroku config:set -a configurador-smart SECRET_KEY=smped2020
$ heroku config:set -a configurador-smart BASEROW_PUBLIC_URL=https://configurador-smart.herokuapp.com
$ heroku config:set -a configurador-smart BASEROW_AMOUNT_OF_WORKERS=1
```

Now that we have replicated the setup of the app.json, we can deploy the application
by pushing to the heroku remote repository.

```
$ git remote add heroku https://git.heroku.com/configurador-smart.git
$ git push heroku main


git push heroku heroku-deploy-personalizado:main 

