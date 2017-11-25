function Model(data) {
  let self = this;
  self.data = data;

  self.addItem = function(item) {
    if(item === 0) {
      return;
    }
    self.data.push(item);
    return self.data;
  }

  self.removeItem = function(item) {
    let index = self.data.indexOf(item);
    if(item === -1) {
      return;
    }
    self.data.splice(index, 1);
    return self.data;
  }
}

function View(model) {
  let self = this;

  function init() {
    let wrapper = tmpl($('#mainPart').html());
    $('body').append(wrapper);

    self.elements = {
      input: $('inpt'),
      button: $('btn'),
      listContainer: $('toDoList')
    };

    self.renderList(model.data);


  };

  self.renderList = function(data) {
    let list = tmpl($('#item-list').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  init();
}

function Controller(model, view) {
  let self = this;
  view.elements.btn.on('click', addItem);
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
}

    $(function() {
      let datalist = ['learn javascript', 'learn angular', 'learn react'];
      let model = new Model(datalist);
      let view = new View(model);
      let controller = new Controller(model, view);
  });
