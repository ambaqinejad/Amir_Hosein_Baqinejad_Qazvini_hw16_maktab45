$(document).ready(function() {
    $('tr').click(trClick)
});

function trClick() {
    setModalHeader('Read');
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/office/${this.id}`,
        success: function(office) {
            let modalBodyContent = "";
            for (const [key, value] of Object.entries(office)) {
                modalBodyContent += `
                    <div class="row">
                        <div class="modal-col col-sm-5">${key === '_id' ? 'id' : key}:</div>
                        <div class="modal-col col-sm-7">${key === "registryDate" ? value.substring(0, 10) : value}</div>
                    </div>`
            }
            $('#modal-body').html(modalBodyContent)
        },
        error: function(err) {
            console.log(err);
        }
    });

    let modalFooterContent = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="delete-btn" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning">Update</button>
    `
    $('#modal-footer').html(modalFooterContent)
    $('#delete-btn').click(removeOffice.bind(null, this))
}

function setModalHeader(title) {
    let content = `
        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    $('#modal-header').html(content);
}

function removeOffice(element) {
    let ok = confirm("Are you sure?");
    if (ok) {
        $.ajax({
            type: "DELETE",
            url: "http://localhost:3000/office/delete",
            data: {
                id: element.id
            },
            success: function(response) {
                console.log(response);
                window.location.assign("/office")
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}