//section dashboard
const Li1 = document.getElementById('li1');
const Li2 = document.getElementById('li2');
const Li3 = document.getElementById('li3');
const Li4 = document.getElementById('li4');
const Li5 = document.getElementById('li5');

//section content dashboard
const progress1 = document.querySelector('.progress1');
const progress2 = document.querySelector('.progress2');
const progress3 = document.querySelector('.progress3');
const progress4 = document.querySelector('.progress4');
const progress5 = document.querySelector('.progress5');

//section content
const content = document.querySelector('.content');

//section navbar profile
const iconFace = document.querySelector('.user');
const iconSocial = document.querySelector('.social');
const iconShield = document.querySelector('.security');

//section navbar profile content
const profileProgress = document.querySelector('.profile-progress');
const socialProgress = document.querySelector('.social-progress');
const shieldProgress = document.querySelector('.shield-progress');

//section profile user
const submit = document.querySelector('.submit');
const username = document.getElementById('username');
const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const about = document.getElementById('grup-about');
const image = document.getElementById('profileImage');

//section social user
const submitSocial = document.querySelector('.submit-social');
const link = document.getElementById('link');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

//section shield user
const submitShield = document.querySelector('.submit-shield');
const key = document.getElementById('key');
const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');

//section button trip
const buttonTrip = document.querySelector('.load-more');
const newSlide = document.querySelector('.new-slide');

//section community user
const icon_followers = document.querySelector('#icon-followers');
const icon_following = document.querySelector('.icon-following');

const followers = document.querySelector('.row-card');
const following = document.querySelector('.row-card1');

//section button close community
const btnClose = document.querySelectorAll('.close');
const cardFollowers = document.querySelector('.card');
const btnclose1 = document.querySelectorAll('.close1 button');
const btnclose2 = document.querySelectorAll('.close2 button');
const buttonTrip_follow = document.querySelector('.load-more1');
const newSlide_follow = document.querySelector('.new-slide1');
const buttonTrip_follow1 = document.querySelector('.load-more2');
const newSlide_follow1 = document.querySelector('.new-slide2');

//section wallet
const wallet_circle1 = document.querySelector('.wallet_circle1');
const wallet_circle2 = document.querySelector('.wallet_circle2');
const wallet_circle3 = document.querySelector('.wallet_circle3');
const wallet_circle4 = document.querySelector('.wallet_circle4');
const wallet_circle5 = document.querySelector('.wallet_circle5');
const wallet_circle6 = document.querySelector('.wallet_circle6');

//section arrow scroll message
const userActive = document.querySelector('.account-user');
const scrollLeft = document.getElementById('arrow-left-circle');
const scrollRight = document.getElementById('arrow-right-circle');

//section fitur chat
const inputBox = document.getElementById('input-box');
const ListChat = document.getElementById('ListChat');
const iconSend = document.querySelector('.iconSend');
const chooseBtn1 = document.getElementById('chooseBtn1');
const fileInput1 = document.getElementById('fileInput1');
const iconLink = document.querySelector('.iconLink');

//section img
const fileInput = document.getElementById('fileInput');
const profileImage = document.getElementById('profileImage');
const mainProfile = document.getElementById('mainProfile');
const chooseBtn = document.getElementById('chooseBtn');

//menyimpan img profile yang kita pilih
chooseBtn.addEventListener('click', function () {
  fileInput.click();
});
fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    profileImage.src = event.target.result;
    mainProfile.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

//button setting dashboard
Li1.classList.add('orangemuda');

Li1.addEventListener('click', function () {
  Li1.classList.add('orangemuda');
  Li2.classList.remove('orangemuda');
  Li3.classList.remove('orangemuda');
  Li4.classList.remove('orangemuda');
  Li5.classList.remove('orangemuda');

  progress1.style.display = 'block';
  progress2.style.display = 'none';
  progress3.style.display = 'none';
  progress4.style.display = 'none';
  progress5.style.display = 'none';

  content.style.display = 'block';
});
Li2.addEventListener('click', function () {
  Li2.classList.add('orangemuda');
  Li1.classList.remove('orangemuda');
  Li3.classList.remove('orangemuda');
  Li4.classList.remove('orangemuda');
  Li5.classList.remove('orangemuda');

  progress2.style.display = 'block';
  progress1.style.display = 'none';
  progress3.style.display = 'none';
  progress4.style.display = 'none';
  progress5.style.display = 'none';

  content.style.display = 'block';
});
Li3.addEventListener('click', function () {
  Li3.classList.add('orangemuda');
  Li2.classList.remove('orangemuda');
  Li1.classList.remove('orangemuda');
  Li4.classList.remove('orangemuda');
  Li5.classList.remove('orangemuda');

  progress3.style.display = 'block';
  progress1.style.display = 'none';
  progress2.style.display = 'none';
  progress4.style.display = 'none';
  progress5.style.display = 'none';

  content.style.display = 'block';
});
Li4.addEventListener('click', function () {
  Li4.classList.add('orangemuda');
  Li2.classList.remove('orangemuda');
  Li3.classList.remove('orangemuda');
  Li1.classList.remove('orangemuda');
  Li5.classList.remove('orangemuda');

  progress4.style.display = 'block';
  progress1.style.display = 'none';
  progress2.style.display = 'none';
  progress3.style.display = 'none';
  progress5.style.display = 'none';

  content.style.display = 'block';
});
Li5.addEventListener('click', function () {
  Li5.classList.add('orangemuda');
  Li2.classList.remove('orangemuda');
  Li3.classList.remove('orangemuda');
  Li4.classList.remove('orangemuda');
  Li1.classList.remove('orangemuda');

  progress5.style.display = 'block';
  progress1.style.display = 'none';
  progress2.style.display = 'none';
  progress3.style.display = 'none';
  progress4.style.display = 'none';

  content.style.display = 'block';
});

//Ketika view trip dipencet maka akan membuka box trip untuk membeli tiket
const submit_trip = document.querySelectorAll('.submit-trip button');
const submit_trip1 = document.querySelector('.submit-trip1 button');
const boxTrip = document.querySelector('#box-trip1');
const boxTrip1 = document.querySelector('#box-trip2');
const exit = document.querySelector('.remove');
const exit1 = document.querySelector('.hapus');
const changeColor = document.querySelector('.change-color');
const changeColor1 = document.querySelector('.change-color1');

function deleteBoxTrip() {
  document.addEventListener('click', function (e) {
    if (!boxTrip.contains(e.target)) {
      boxTrip.style.display = 'none';
      changeColor.style.display = 'none';
    }
  });
}

function deleteBoxTrip1() {
  document.addEventListener('click', function (e) {
    if (!boxTrip1.contains(e.target)) {
      boxTrip1.style.display = 'none';
      changeColor1.style.display = 'none';
    }
  });
}

submit_trip.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    boxTrip.style.display = 'block';
    changeColor.style.display = 'block';
    event.stopPropagation();
    deleteBoxTrip();
  });
});

submit_trip1.addEventListener('click', function (event) {
  boxTrip1.style.display = 'block';
  changeColor1.style.display = 'block';
  event.stopPropagation();
  deleteBoxTrip1();
});

exit.addEventListener('click', function () {
  boxTrip.style.display = 'none';
  changeColor.style.display = 'none';
});

exit1.addEventListener('click', function () {
  boxTrip1.style.display = 'none';
  changeColor1.style.display = 'none';
});

//Saat tombol + di pencet maka akan menambahkan jumlah quantity dan price
const tambah = document.getElementById('add');
const kurang = document.getElementById('remove');
const harga = document.getElementById('price');
const jumlahTiket = document.getElementById('quantity');

const tambah1 = document.getElementById('add1');
const kurang1 = document.getElementById('remove1');
const harga1 = document.getElementById('price1');
const jumlahTiket1 = document.getElementById('quantity1');

const tambah2 = document.getElementById('add2');
const kurang2 = document.getElementById('remove2');
const harga2 = document.getElementById('price2');
const jumlahTiket2 = document.getElementById('quantity2');

const tambah12 = document.getElementById('add12');
const kurang12 = document.getElementById('remove12');
const harga12 = document.getElementById('price12');
const jumlahTiket12 = document.getElementById('quantity12');

//Untuk membuat jumlah total yang akan dimunculkan di box
const all = document.querySelector('.all');
const all1 = document.querySelector('.all1');
const itemPrice = document.querySelector('.item-price')
const ji = document.querySelector('.ji')




//Object untuk memunculkan jumlah total di box keranjang
// Function to handle ticket quantity and price
function handleTicket(quantityElem, priceElem, increment, isAdult) {
  let quantity = parseInt(quantityElem.textContent);
  const adultPrice = 20000;
  const childPrice = 15000;

  quantity += increment;
  if (quantity < 0) quantity = 0;

  quantityElem.textContent = quantity;

  const adultTotalPrice = quantity * adultPrice;
  const childTotalPrice = quantity * childPrice;
  const total = adultTotalPrice + childTotalPrice;

  priceElem.textContent = 'Rp' + (isAdult ? adultTotalPrice : childTotalPrice).toLocaleString();
  ji.innerHTML = 'Total: Rp' + total.toLocaleString();
}


// Event listeners for adult tickets
document.getElementById('add').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity'), document.getElementById('price'), 1, true);
});

document.getElementById('remove').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity'), document.getElementById('price'), -1, true);
});

// Event listeners for children tickets
document.getElementById('add1').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity1'), document.getElementById('price1'), 1, false);
});

document.getElementById('remove1').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity1'), document.getElementById('price1'), -1, false);
});



// Event listeners for children tickets
document.getElementById('add2').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity2'), document.getElementById('price2'), 1);
});

document.getElementById('remove2').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity2'), document.getElementById('price2'), -1);


});
// Event listeners for children tickets
document.getElementById('add12').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity12'), document.getElementById('price12'), 1);
});

document.getElementById('remove12').addEventListener('click', function() {
  handleTicket(document.getElementById('quantity12'), document.getElementById('price12'), -1);


});





      







//Untuk membuat saat tombol keranjang dipencet maka akan jika dah diselect itemnya akan tersedia di tombol keranjang
const Store = document.querySelector('.store');
const active = document.querySelector('.active');

let store = true;
function toggleStore() {
  if (store) {
    active.style.display = 'block';
  } else {
    active.style.display = 'none';
  }

  store = !store;

  //jika selain side bar yang dipencet maka akan menyembunyikan side bar
  document.addEventListener('click', function (e) {
    if (!active.contains(e.target)) {
      active.style.display = 'none';
      e.preventDefault();
    }
  });
}

Store.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  toggleStore();
  toggleTrip();
});

//jika select dipencet,maka box trip nya akan masuk ke box
const select = document.querySelector('.Button-trip');
const vacation = document.querySelector('.vacation-item');
const logout = document.querySelector('.logout');

const select1 = document.querySelector('.Button-trip1');
const vacation1 = document.querySelector('.vacation-item1');
const logout1 = document.querySelector('.logout1');
const bulat = document.querySelector('.bulat');

const kosong = document.querySelector('.kosong');
const forumcheckout = document.querySelector('.form-container');


select.addEventListener('click', function () {
  vacation.style.display = 'block';
  bulat.style.display = 'block';
  kosong.style.display = 'none';
  forumcheckout.style.display = 'block';
  all.innerHTML = 'total: '

});
//jika x dipencet,maka box trip nya akan keapus
logout.addEventListener('click', function (e) {
  vacation.style.display = 'none';
  bulat.style.display = 'none';
  kosong.style.display = 'block';
  forumcheckout.style.display = 'none';
});

select1.addEventListener('click', function () {
  vacation1.style.display = 'block';
  bulat.style.display = 'block';
  kosong.style.display = 'none';
  forumcheckout.style.display = 'block';
  all1 .innerHTML = 'total: '
});
//jika x dipencet,maka box trip nya akan keapus
logout1.addEventListener('click', function () {
  vacation1.style.display = 'none';
  bulat.style.display = 'none';
  kosong.style.display = 'block';
  forumcheckout.style.display = 'none';
});


//button setting general item
iconFace.addEventListener('click', function () {
  profileProgress.style.display = 'block';
  socialProgress.style.display = 'none';
  shieldProgress.style.display = 'none';
});

iconSocial.addEventListener('click', function () {
  socialProgress.style.display = 'block';
  profileProgress.style.display = 'none';
  shieldProgress.style.display = 'none';
});

iconShield.addEventListener('click', function () {
  shieldProgress.style.display = 'block';
  profileProgress.style.display = 'none';
  socialProgress.style.display = 'none';
});

//button setting comunity item
icon_followers.addEventListener('click', function () {
  following.style.display = 'none';
  followers.style.display = 'block';
});
icon_following.addEventListener('click', function () {
  following.style.display = 'block';
  followers.style.display = 'none';
});

//Jika tombol remove di followers dipencet maka akan keapus
followers.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-remove')) {
    e.target.closest('.card').remove();
    e.target.preventDefault();
  }
});

//Jika tombol following di dipencet maka akan berubah jadi unfollowing
btnclose2.forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.innerHTML === 'Unfollowing') {
      button.innerHTML = 'Following';
      button.style.backgroundColor = 'rgb(211, 211, 218)';
      button.style.color = 'black';
    } else {
      button.innerHTML = 'Unfollowing';
      button.style.backgroundColor = 'orangered';
      button.style.color = 'white';
    }
  });
});

btnclose1.forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.innerHTML === 'Following') {
      button.innerHTML = 'Unfollowing';
      button.style.backgroundColor = 'orangered';
      button.style.color = 'white';
    } else {
      button.innerHTML = 'Following';
      button.style.backgroundColor = 'rgb(211, 211, 218)';
      button.style.color = 'black';
    }
  });
});

//jika tombol bulat convert wallet dipencet maka akan muncul warna oren
wallet_circle1.addEventListener('click', function () {
  wallet_circle1.classList.toggle('orange');
  wallet_circle2.classList.remove('orange');
  wallet_circle3.classList.remove('orange');
  wallet_circle4.classList.remove('orange');
  wallet_circle5.classList.remove('orange');
  wallet_circle6.classList.remove('orange');
});

wallet_circle2.addEventListener('click', function () {
  wallet_circle2.classList.toggle('orange');
  wallet_circle1.classList.remove('orange');
  wallet_circle3.classList.remove('orange');
  wallet_circle4.classList.remove('orange');
  wallet_circle5.classList.remove('orange');
  wallet_circle6.classList.remove('orange');
});

wallet_circle3.addEventListener('click', function () {
  wallet_circle3.classList.toggle('orange');
  wallet_circle2.classList.remove('orange');
  wallet_circle1.classList.remove('orange');
  wallet_circle4.classList.remove('orange');
  wallet_circle5.classList.remove('orange');
  wallet_circle6.classList.remove('orange');
});

wallet_circle4.addEventListener('click', function () {
  wallet_circle4.classList.toggle('orange');
  wallet_circle2.classList.remove('orange');
  wallet_circle3.classList.remove('orange');
  wallet_circle1.classList.remove('orange');
  wallet_circle5.classList.remove('orange');
  wallet_circle6.classList.remove('orange');
});

wallet_circle5.addEventListener('click', function () {
  wallet_circle5.classList.toggle('orange');
  wallet_circle2.classList.remove('orange');
  wallet_circle3.classList.remove('orange');
  wallet_circle4.classList.remove('orange');
  wallet_circle1.classList.remove('orange');
  wallet_circle6.classList.remove('orange');
});

wallet_circle6.addEventListener('click', function (circle) {
  wallet_circle6.classList.toggle('orange');
  wallet_circle2.classList.remove('orange');
  wallet_circle3.classList.remove('orange');
  wallet_circle4.classList.remove('orange');
  wallet_circle5.classList.remove('orange');
  wallet_circle1.classList.remove('orange');
});

//jika arrow kiri dipencet maka akan ngescroll ke kiri
scrollLeft.addEventListener('click', function () {
  userActive.style.scrollBehavior = 'smooth';
  userActive.scrollLeft -= 150;
});

scrollRight.addEventListener('click', function () {
  userActive.style.scrollBehavior = 'smooth';
  userActive.scrollLeft += 150;
});

//untuk mengirim pesan chat
function addChat() {
  if (inputBox.value.trim() === '') {
    e.classList.remove();
  } else {
    const LiNew = document.createElement('li');
    LiNew.innerHTML = inputBox.value;
    ListChat.appendChild(LiNew);
    inputBox.value = '';

    //mengatur waktu ketika kirim chat
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeNow = document.createElement('p');
    timeNow.innerHTML = ' ' + hours + ':' + minutes;
    LiNew.appendChild(timeNow);

    //untuk mengatur agar setiap ngechat cursornya ke bawah bukan ke atas
    const chatComment = document.querySelector('.chat-comment');
    chatComment.scrollTop = chatComment.scrollHeight;
  }
}

//mengirim file img di chat web
function addImg() {
  ListChat.style.display = 'flex';
  ListChat.style.flexDirection = 'column';
  ListChat.style.alignItems = 'flex-end';

  //untuk mengirim img di file sesuai img yang kita pilih
  iconLink.addEventListener('click', function () {
    fileInput1.click();
  });

  fileInput1.addEventListener('change', function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgNew = document.createElement('img');
      imgNew.src = event.target.result;
      imgNew.style.width = '300px';
      imgNew.style.height = '300px';
      ListChat.appendChild(imgNew);

      //mengatur waktu ketika kirim chat
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      const timeNow = document.createElement('p');
      timeNow.style.backgroundColor = 'rgb(240, 237, 237)';
      timeNow.style.borderRadius = '10px';
      timeNow.innerHTML = ' ' + hours + ':' + minutes;

      ListChat.appendChild(timeNow);
    };

    reader.readAsDataURL(file);
  });

  //untuk mengatur agar setiap ngechat cursornya ke bawah bukan ke atas
  const chatComment = document.querySelector('.chat-comment');
  chatComment.scrollTop = chatComment.scrollHeight;
}

inputBox.addEventListener('keydown', function (enter) {
  if (enter.key === 'Enter') {
    enter.preventDefault();
    addChat();
  }
});

iconSend.addEventListener('click', function () {
  addChat();
});

//mengirim file img di chat web
iconLink.addEventListener('click', function () {
  addImg();
});

//untuk menyimpan data profile
submit.addEventListener('click', function () {
  alert('Profil Admin tersimpan!');
  saveData();
  showTask();
});

submitSocial.addEventListener('click', function () {
  alert('Profil Admin tersimpan!');
  saveData();
  showTask();
});

submitShield.addEventListener('click', function () {
  alert('Profil Admin tersimpan!');
  saveData();
  showTask();
});

function saveData() {
  var username = document.getElementById('username').value;
  var name1 = document.getElementById('name1').value;
  var email = document.getElementById('email').value;
  var about = document.getElementById('grup-about').value;
  var image = document.getElementById('profileImage').src;
  var mainimage = document.getElementById('mainProfile').src;

  var link = document.getElementById('link').value;
  var link1 = document.getElementById('link1').value;
  var link2 = document.getElementById('link2').value;
  var link3 = document.getElementById('link3').value;

  var key = document.getElementById('key').value;
  var key1 = document.getElementById('key1').value;
  var key2 = document.getElementById('key2').value;

  localStorage.setItem('username', username);
  localStorage.setItem('name1', name1);
  localStorage.setItem('email', email);
  localStorage.setItem('grup-about', about);
  localStorage.setItem('profileImage', image);
  localStorage.setItem('mainProfile', mainimage);

  localStorage.setItem('link', link);
  localStorage.setItem('link1', link1);
  localStorage.setItem('link2', link2);
  localStorage.setItem('link3', link3);

  localStorage.setItem('key', key);
  localStorage.setItem('key1', key1);
  localStorage.setItem('key2', key2);
}

function showTask() {
  username.value = localStorage.getItem('username');
  name1.value = localStorage.getItem('name1');
  email.value = localStorage.getItem('email');
  about.value = localStorage.getItem('grup-about');
  image.src = localStorage.getItem('profileImage');
  mainProfile.src = localStorage.getItem('profileImage');

  link.value = localStorage.getItem('link');
  link1.value = localStorage.getItem('link1');
  link2.value = localStorage.getItem('link2');
  link3.value = localStorage.getItem('link3');

  key.value = localStorage.getItem('key');
  key1.value = localStorage.getItem('key1');
  key2.value = localStorage.getItem('key2');
}

// Memastikan bahwa data tampil saat halaman pertama kali dimuat
showTask();

//Untuk memunculkan new content setelah load more dipencet
buttonTrip.addEventListener('click', function () {
  buttonTrip.style.display = 'none';

  setTimeout(function () {
    newSlide.style.display = 'block';
    buttonTrip.style.display = 'block';
  }, 500);
});

buttonTrip_follow.addEventListener('click', function () {
  buttonTrip_follow.style.display = 'none';

  setTimeout(function () {
    newSlide_follow.style.display = 'block';
    buttonTrip_follow.style.display = 'block';
  }, 500);
});

class User {
  constructor(name, password) {
    this._name = name;
    this._password = password;
  }

  get getName() {
    console.log(this._name);
  }
}

const kedar = new User('kedar', 123456);
kedar.getName;
