window.ShowToaster = (type , message) => {
    if(type === "success"){
        // Display a success toast, with a title
        toastr.success(message, 'Operation Successful', {timeOut: 5000})
    }

    if(type ===  "error"){
        // Display a success toast, with a title
        toastr.error(message, 'Operation failed', {timeOut: 5000})
    }
    
}