angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr){
    return {
        notify: function(msg){
            mvToastr.success(msg);
            toastr.clear();
            console.log(sg)
        },
        notifyError:function(msg){
            mvToastr.error(msg);
            toastr.clear();
        }
    }
})