toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

window.toastrFunctions = {
    showToastr: function(type, message) {
        if(type === "success") {
            toastr.success(message);
        }
        else if(type === "error") {
            toastr.error(message);
        }
        // Similarly, handle other toastr types (info, warning)...
    }
};