const renderer = function(data){
    const source = $("#team-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({data})
    console.log({data})
    $("#display-team").append(newHTML)
}