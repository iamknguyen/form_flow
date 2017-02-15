
angular.module('app.services', [])
.factory('Services', function ($http) {
  const data = {
    name: '',
    email: ''
  };
  const storeData = (key, value) => {
    data[key] = value;
  };

  const getStore = () => {
    return data;
  };

  return {
    storeData: storeData,
    getStore: getStore
  };
});
