// requirejs.config({
//   paths: {
//     'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
//   },
//   shim: {
//     'jquery': {
//       esports: 'jQuery'
//     }
//   }
//  });


require(
  ['model',
   'view',
  //  'controller'
 ],
   function(model, view, controller) {
     console.log('model', model);
    //  let data = ['learn javascript', 'learn angular', 'learn react'];
     let model = new Model(data);
     let view = new View(model);
     let controller = new Controller(model, view);
   }
)
