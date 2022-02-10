## Login para o Baserow
O microserviço deve trazer o login e senha do usuário cadastrado no portal (módulo gestão de acesso).
No modelo provisório temos ainda que fazer o login através da criação do usuário e senha


https://baserow.io/docs/getting-started%2Fapi

## Development environment

If you want to contribute to Baserow you need to setup the development environment. 
Execute the following commands to start a development version of the baserow environment
which has debug and hot re-loading features enabled.

```
$ git clone --branch master https://gitlab.com/bramw/baserow.git
$ cd baserow
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
$ # OR use our ./dev.sh script which also ensures your dev containers run as your user
$ ./dev.sh --build
```

The Baserow development environment is now running. Visit http://localhost:3000 in your
browser and you should see a working version in development mode.

More detailed instructions and more information about the development environment can 
be found [here](./docs/development/development-environment.md) or at 
https://baserow.io/docs/development/development-environment.


