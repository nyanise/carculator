function carculater(){
    $('.num').on('click',function(){
    let a=$('input').val($('input').val() + this.innerHTML);
    })
    $('.orang').on('click',function(){
    if(String(this.innerHTML) ==='+'){
    a+$('input').val($('input').val() + this.innerHTML);

    }

})
    $('.clear').on('click',function(){
        $('input').val("");
    })
}carculater();
