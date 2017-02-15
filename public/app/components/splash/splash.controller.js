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

  vm.allFinished = false;
  vm.store = function (type, data) {
    Services.storeData(type, vm.formData[type]);
  };

  vm.getStore = function () {
    console.log('result', Services.getStore());
  };

  vm.finish = function () {
    console.log(vm.allFinished);
    vm.allFinished = true;
    // console.log(vm.allFinished);
    // $scope.$apply(function () {
    //   vm.allFinished = true;
    // });
  };
  return vm;
});
