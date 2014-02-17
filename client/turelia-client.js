/**
 * Created by Michaël on 2/3/14.
 */

var _ = require('underscore');

var progressBar = 0;

function initializeCharacterPage() {
    disableAllPages();

    //Ensure loading page is showed
    $('#pageLoading').css({
        display: 'block'
    });
    $('#loadingWhat').html("Données des personnages");

    //Ask the server  for character-list.
    $.ajax({
        dataType: 'json',
        type: 'POST',
        url: '/character/list',
        data: {
            token: 'blah'
        },

        xhr: function() {
            var xhr = new window.XMLHttpRequest();

            //Uploading progress
            xhr.upload.addEventListener("progress", function(evt) {
                if(evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;

                    updateProgressBar(percentComplete);
                }
            }, false);

            //Download progress
            xhr.addEventListener("progress", function(evt) {
                if(evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;

                    updateProgressBar(percentComplete);
                }
            }, false);

            return xhr;
        },

        success: function(data) {
            disableAllPages();

            var count = 0;
            var html = "";
            _.each(data.slots, function(slot) {

                if(slot.id == 0 || slot.id == 4) {
                    html += "<div class='row'>";
                }

                if(slot.character == 'none') {
                    html += "<div class='col-lg-3'>";
                    html += "   <div class='panel panel-info'>";
                    html += '       <div class="panel-heading">';
                    html += '           <div class="row">';
                    html += '               <div class="col-xs-12 text-center">';
                    html += '                   <h3>Aucun personnage</h3>';
                    html += '           </div></div>';
                    html += '           <div class="row">';
                    html += '               <div class="col-xs-12 text-center">';
                    html += '                   <img src="/images/default-avatar.png" alt="default avatar">';
                    html += '       </div></div></div>';
                    html += '       <a href="#" onclick="createNewCharacter('+ slot.id +')">';
                    html += '           <div class="panel-footer announcement-bottom">';
                    html += '               <div class="row">';
                    html += '                   <div class="col-xs-6">Nouveau personnage</div>';
                    html += '                   <div class="col-xs-6 text-right"><i class="fa fa-arrow-circle-right"></i></div>'
                    html += '           </div></div>';
                    html += '       </a>';
                    html += '</div></div>';
                }

                if(slot.id == 3 || slot.id == 7) {
                    html += '</div>';
                }
            })

            $('#menuCharacters').addClass('active');
            $('#pageCharacters').css({
                display: 'block'
            });
            $('#charactersOverview').html(html);
        },

        error: function(xhr, status, error) {
            console.log(status + ' : ' + error);
        }
    });
};

function createNewCharacter(slot) {
    disableAllPages();

    $('#pageNewCharacter').css({
        display: 'block'
    });
};

function updateProgressBar(value) {
    progressBar += (value / 2) * 100;

    $('#loadingBar').css({
        width: progressBar + '%'
    })

    $('#loadingPercent').html(progressBar + ' %');
};

function disableAllPages() {
    $('#pageLoading').css({
        display: 'none'
    });
    $('#pageCharacters').css({
        display: 'none'
    });
    $('#pageNewCharater').css({
        display: 'none'
    });
};

//Main
initializeCharacterPage();