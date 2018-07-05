define(
  'controller',
  ['model',
   'view'],

   function() {
     function Controller(model, view) {
       let self = this;
       // view.elements.addBtn.on('click', addItem);
       view.elements.listContainer.on('click', '.removeItem', removeItem);

       function addItem() {
         let newItem = view.elements.inpt.val();
         model.addItem(newItem);
         view.renderList(model.data);
         view.elements.inpt.val('');
       }

       function removeItem() {
         let item = $(this).attr('data-value');
         model.removeItem(item);
         view.renderList(model.data);
       }
     };
     return Controller;
   }

);
