define(
  'view',
  ['jquery','model'],
  function() {
    function View(model) {
      let self = this;

      function init() {
        let wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);

        self.elements = {
          input: $('.item-value'),
          addBtn: $('.item-add'),
          listContainer: $('.item-list')
        };

        self.renderList(model.data);
      };

        self.renderList = function(data) {
          let list = tmpl($('#list-template').html(), {data: data});
          self.elements.listContainer.html(list);
        };
      init();
    };
     return View;
  }
);
