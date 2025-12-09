document.getElementById("formmain").addEventListener("submit", function (event) {
    event.preventDefault();
    const ten = document.getElementById("ten").value;
    if (ten === "") {
        alert("Vui lòng nhập tên");
        return;
    }
    const hodem = document.getElementById("ho-dem").value.trim();
    if (hodem === "") {
        alert("Vui lòng nhập họ đệm");
        return;
    }
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        alert("Vui lòng nhập email");
        return;
    }
    const sdt = document.getElementById("sdt").value.trim();
    if (sdt === "") {
        alert("Vui lòng nhập sdt");
        return;
    }
    const thanhpho = document.getElementById("thanh-pho").value.trim();
    if (thanhpho === "") {
        alert("Vui lòng nhập thành phố");
        return;
    }
    const xaphuong = document.getElementById("xa-phuong").value.trim();
    if (xaphuong === "") {
        alert("Vui lòng nhập địa chỉ");
        return;
    }
    console.log("--- Thông tin đăng ký ---");
    console.log("Tên: " + ten);
    console.log("Họ đệm: " + hodem);
    console.log("Email: " + email);
    console.log("SĐT: " + sdt);
    console.log("Thành phố: " + thanhpho);
    console.log("Xã phường: " + xaphuong);
});


