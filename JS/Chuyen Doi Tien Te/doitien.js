function doitien() {
    let tien = document.getElementById("tien").value;
    let FromC = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let doi;
    if( FromC == 'USD' && To == 'VNĐ'){
        doi = 'Số tiền sau khi đổi là: ' + (tien*23000) + 'Đ';
    }
    else if(FromC == 'VNĐ' && To == 'USD'){
        doi = 'Số tiền sau khi đổi là: ' + (tien/23000) + '$'; 
    }
    else if(FromC == 'VNĐ'){
        doi = 'Số tiền sau khi đổi là: ' + tien + 'Đ'
    }
    else{
        doi = 'Số tiền sau khi đổi là: ' + tien + '$'
    }
    document.getElementById("doi").innerHTML = doi;
}
