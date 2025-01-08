function setBirthDate(birthdate){
    let elem = document.getElementById('birthdate');
    M.Datepicker.init(elem, {
        minDate : new Date(1900, 1, 1),
        maxDate : new Date(),
        yearRange : 25,
        defaultDate : new Date(birthdate),
        setDefaultDate : true
    });
}


document.getElementById('pic').addEventListener('change', function(evt){
    let selectedFile = evt.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.addEventListener('load', function(e){
        document.getElementById('temp_image').src = e.target.result;
    });
});