// window.onload
$(document).ready(function ()
{
    $("p").click(function()
    {
        $(this).hide();
    })
})

// mouseenter event
$("#p1").mouseenter (function()
{
    alert("You entered the element!");
})

// slidetoggle je easy otvaranje menija
///////////////////

// Ajax zahtevi

$.ajax(
{
    type: "GET",
    datatype: "json",
    url: "random-data-api link",

    success: function(data)
    {
        console.log(data);
        console.log(data.address.street_name);
    }
});