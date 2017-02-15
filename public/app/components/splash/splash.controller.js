angular
.module('app.splash', [])
.controller('SplashCtrl', function (Services) {
  const vm = this;
  vm.formData = {
    name: '',
    email: ''
  };
  vm.formData = Services.getStore();

  vm.validName = !!vm.formData.name;
  vm.validEmail = vm.formData.email.includes('@');
  vm.formComplete = vm.validEmail && vm.validName;
  vm.store = function (type, data) {
    Services.storeData(type, vm.formData[type]);
  };

  vm.getStore = function () {
    console.log('result', Services.getStore());
  };

  vm.finish = function (type, data) {
    console.log(vm.formData);
    alert(`name = ${vm.formData.name} \n email = ${vm.formData.email}`);
  };
  return vm;
});
