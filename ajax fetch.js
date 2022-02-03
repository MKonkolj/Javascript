
//let response;

$.ajax(
{
    type: 'GET',
    dataType: "json",
    url: 'https://random-data-api.com/api/users/random_user',
    success: function(data)
    {
        response = data;
    }
});

//setTimeout(function()
//{
    //console.log(response);
//}, 2000);



