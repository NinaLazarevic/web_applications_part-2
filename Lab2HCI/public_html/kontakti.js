angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.ime = '';
$scope.prezime = '';
$scope.telefon = '';
$scope.email = '';
$scope.person={};

//$scope.novoime = '';
//$scope.novoprezime = '';
//$scope.novitelefon = '';
//$scope.noviemail = '';

$scope.staroime = '';


$scope.toChange=false; //kada treba da se pokaze forma za promenu



$scope.id = 3;
$scope.users = [
{id:1, ime:'Boban',  prezime:"Krstic", telefon: 0654782371 , email: 'bobankrstic@yahoo.com', toChange:false  },
{id:2, ime:'Sladjan', prezime:"Trajkovic", telefon: 0617642309 , email: 'trajkoo@yahoo.com', toChange:false  },
{id:3, ime:'Anastasija', prezime:"Stefanovic", telefon: 0616347201 , email: 'mika998@live.com', toChange:false }
];

$scope.error = true;

$scope.hideform = true; 



$scope.showFormForAdd = function() {
    
    $scope.hideform = false;
    
  };
  
$scope.showFormForChange = function(idKorisnika) {
    
 $scope.users[idKorisnika-1].toChange=true;
// $scope.users[idKorisnika-1].HideInfo=true;
// $scope.users[idKorisnika-1].ShowChange=false;
 
 $scope.person.novoime= $scope.users[idKorisnika-1].ime;
 $scope.person.novoprezime=$scope.users[idKorisnika-1].prezime;
 $scope.person.novitelefon=$scope.users[idKorisnika-1].telefon;
 $scope.person.noviemail=$scope.users[idKorisnika-1].email;
 

 
    
  };
$scope.deleteUser = function(Korisnik) {
     
    
     $scope.users.splice(Korisnik,1);

    
  };
  
$scope.back = function(idKorisnika) {
    
    


 $scope.users[idKorisnika-1].toChange=false;

 
 

    
  };
$scope.editUser = function(idKorisnika) {
 
   //var kontakt={id:Korisnik.id, ime: $scope.novoime, prezime:$scope.novoprezime, telefon: $scope.novitelefon , email: $scope.noviemail, toChange:false ,Changed:false ,HideInfo:false ,ShowChange:false};
   //$scope.users.push(kontakt);
    $scope.users[idKorisnika-1].ime=$scope.person.novoime;
    $scope.users[idKorisnika-1].prezime=$scope.person.novoprezime;
    $scope.users[idKorisnika-1].telefon=$scope.person.novitelefon;
    $scope.users[idKorisnika-1].email=$scope.person.noviemail;
    $scope.users[idKorisnika-1].toChange=false;
    //Korisnik.HideInfo=true;
    
    
    //Korisnik.ime=$scope.novoime;
    //Korisnik.prezime=$scope.novoprezime;
    //Korisnik.telefon=$scope.novitelefon;
    //Korisnik.email=$scope.noviemail;
    
//    Korisnik.toChange=false;
//    Korisnik.Changed=true;
//    Korisnik.ShowChange=true;
   
    
   // $scope.users.push(kontakt);
    
    
    /*forEach(user in $scope.users)
    {
        if(user.id===idKorisnika-1)
        {
            user.ime=$scope.novoime;
            user.prezime=$scope.novoprezime;
            user.telefon=$scope.novitelefon;
            user.email=$scope.noviemail;
            user.toChange=false;
        }
    }*/
    
  
    

          
   
};

$scope.addUser = function() {
    $scope.id++;
    kontakt={id:$scope.id, ime: $scope.ime, prezime:$scope.prezime, telefon: $scope.telefon , email: $scope.email, toChange:false };
    $scope.users.push(kontakt);
    $scope.hideform = true; 
};

$scope.$watch('ime',function() {$scope.test();});
$scope.$watch('prezime',function() {$scope.test();});
$scope.$watch('telefon', function() {$scope.test();});
$scope.$watch('email', function() {$scope.test();});

$scope.test = function() {
  if ($scope.myForm.ime.$valid && $scope.myForm.prezime.$valid && $scope.myForm.telefon.$valid && $scope.myForm.email.$valid) {
      
    $scope.error = false;
    } else {
    $scope.error = true;
  }
 
};

});


