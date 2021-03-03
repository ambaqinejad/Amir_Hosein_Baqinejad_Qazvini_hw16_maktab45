$(document).ready(function() {
    $('tr').click(trClick)
});

function trClick() {
    console.log(this);
    setModalHeader('Read');
    // <div class="col-sm-5"></div>
    // <div class="col-sm-7"></div>
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/office/${this.id}`,
        success: function(response) {
            for (const [key, value] of Object.entries(object1)) {
                console.log(`${key}: ${value}`);
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function setModalHeader(title) {
    let content = `
        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    $('#modal-header').html(content);
}