requirejs.config({
  paths: {
    'jquery': 'https://code.jquery.com/jquery-3.2.1.min',
    'template': 'lib/template',
    'model': 'app/model',
    'view': 'app/view',
    'controller': 'app/controller'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template': {
      exports: 'template'
    }
  }
});

require(
  ['jquery', 'template', 'model', 'view', 'controller'],

  function($, template, model, view, controller) {
    let initToDoList = ['learn JavaScript', 'learn Angular', 'learn React'];
    let model = new Model(initToDoList);
    let view = new View(model);
    let controller = new Controller(model, view);
  }
);
