using Microsoft.JSInterop;

namespace TangyWeb_Server.Helper;

public static class IJSRuntimeExtention
{
    public static async ValueTask ToastrSuccess(this IJSRuntime JsRuntime, string message)
    {
         await JsRuntime.InvokeVoidAsync("toastrFunctions.showToastr",  "success" , message );
    } 
    
    public static async ValueTask ToastrError(this IJSRuntime JsRuntime, string message)
    {
         await JsRuntime.InvokeVoidAsync("toastrFunctions.showToastr", "error" ,message  );
    } 
}