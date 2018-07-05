requirejs.config({
  paths: {
    'jquery': 'https://code.jquery.com/jquery-3.2.1.min',
    'tmpl': 'tmpl',
    'model': 'model',
    'view': 'view',
    'controller': 'controller'
  },
  shim: {
    'jquery': {
      esports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
 });


require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
   function($, tmpl, model, view, controller) {
    //  console.log('model', model);
     let data = ['learn javascript', 'learn angular', 'learn react'];
     let model = new model(data);
     let view = new view(model);
     let controller = new controller(model, view);
   }
)
