$(function() {
    $('.modal').modal();
});

function getQueryString(){
    const searchStrings = location.search.substring(1).split("&");
    let qsArray = [];

    searchStrings.forEach(function(qs){
        tmp = qs.split("=");
        qsArray[tmp[0]] = tmp[1];
    })
    return qsArray;
}

function processToast(){
    const qs = getQueryString();

    if(qs['op'] === 'add' && qs['status'] === 'success'){
        var toastHTML = '<span>Contact created successfully!</span>';
        M.toast({html: toastHTML, classes : 'green'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }else if(qs['op'] === 'add' && qs['status'] === 'error'){
        var toastHTML = '<span>Error while creating record ! please contact admin !</span>';
        M.toast({html: toastHTML, classes : 'red'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }else if(qs['op'] === 'delete' && qs['status'] === 'success'){
        var toastHTML = '<span>Contact deleted successfully!</span>';
        M.toast({html: toastHTML, classes : 'green'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }else if(qs['op'] === 'delete' && qs['status'] === 'error'){
        var toastHTML = '<span>Error while deleting record ! please contact admin !</span>';
        M.toast({html: toastHTML, classes : 'red'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }else if(qs['op'] === 'update' && qs['status'] === 'success'){
        var toastHTML = '<span>Contact updated successfully!</span>';
        M.toast({html: toastHTML, classes : 'green'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }else if(qs['op'] === 'update' && qs['status'] === 'error'){
        var toastHTML = '<span>Error while updating record ! please contact admin !</span>';
        M.toast({html: toastHTML, classes : 'red'});
        setTimeout(() => {
            location.search = "index.php";
        }, 2000);
    }


}

processToast();

const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((btn) => {
    btn.addEventListener('click', handleDelete);
});
// deleteBtn.addEventListener('click', handleDelete);

function handleDelete(evt){
    evt.preventDefault();
    console.log(evt.target.parentElement);

    let id = evt.target.parentElement.dataset.id;
    console.log(id);
    let idHiddenInput = document.getElementById("delete_id");
    idHiddenInput.value = id;
}