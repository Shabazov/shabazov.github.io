define(
  'controller',
  ['model', 'view'],
  function() {
    function Controller(model, view) {
      let self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.item-edit', editItem);

      function addItem() {
        let newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      };

      function removeItem() {
        let item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
      };

      function editItem() {
        let item = $(this).attr('data-value');
        let input = $(this).parent().find('input');

        input.removeAttr('disabled').focus();
        input.on('focusout', function() {
          let newValue = $(this).val();
          correctItem(item, newValue, $(this));
          input.attr('disabled', 'disabled');
        });
      };

      function correctItem(value, newValue, item) {
        let index = $(this).parent().index();
        item.attr('disabled', 'disabled');
        model.editItem(value, newValue);
        view.renderList(model.data);
      };
    }

    return Controller;
  }
);
