import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import { STATUS_CODES } from 'http';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    //Enable CORS access to everyone
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
    router.get('/workflow/:workflowId/:action', (req, res, next) => {
      let workflowId: string = req.params.workflowId;
      let action: string = req.params.action;
      
      console.log("workflowId:" + workflowId);
      console.log("action:" + action);

      if (action == 'start') {
        res.redirect('http://localhost:4200/guidedform/form/1/workflow/' + workflowId);
      }
      else if (action == 'done') {
        res.send('form flow done');
      }
    });


    this.express.use('/', router);

    this.express.use('/data', express.static(__dirname+'/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export {App};
