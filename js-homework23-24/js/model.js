define(
  'model',
  [],
  function() {
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


    return {


    }
  }
);
