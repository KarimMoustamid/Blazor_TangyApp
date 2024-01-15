window.ShowMessage = (type , message) => {
    Swal.fire({
        title: message,
        text: "You clicked the button!",
        icon:type 
    });
}