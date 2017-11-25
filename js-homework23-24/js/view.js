define(
  'view',

  ['model'],

  function(model) {
    let self = this;

    function init() {
      let wrapper = tmpl($('#mainPart').html());
      $('body').append(wrapper);

      self.elements = {
        input: $('inpt'),
        button: $('btn'),
        listContainer: $('toDoList')
      };

      // self.renderList(model.data);

          self.renderList = function(data) {
            let list = tmpl($('#item-list').html(), {data: data});
            self.elements.listContainer.html(list);
          }

    }
    init();
  }
);
