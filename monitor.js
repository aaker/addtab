//Clone a non selected button, either home of domains.
let existingButton = $('#nav-home-super');
if (existingButton.hasClass('nav-link-current'))
   existingButton = $('#nav-domains');
let newButton = existingButton.clone();
//Change the button to say Monitoring and adjust the image.
newButton.find('.nav-text').html('Monitoring');
newButton.appendTo($('#nav-buttons'));
newButton.find('.nav-bg-image').attr("style","background-position: -592px -60px;");

newButton.find('a').click(function (e){
    e.preventDefault();
    $('#nav-buttons li').removeClass('nav-link-current');
    existingButton.removeClass('nav-link-current');
    newButton.addClass('nav-link-current');
    $('.navigation-title').html('Monitoring');
    let accessToken = localStorage.getItem('access_token');
    //Replace URL below.
    let url = "https://nodeping.com/reports/statusevents/GZKU0S6ZL7PFBAJO";
    $('#content').html("<iframe src='"+url+"' width='100%' height='1200px' style='border-width:0px'  >");
    $('#flashContainer').hide();
    return false;
});
