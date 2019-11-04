const getTeam= function(){
   const input = $("#teamName").val()
    $.get(`/teams/${input}`, function(teamData){
        renderer(teamData)
        $("#display-team").empty()
    })
}
