var app = angular.module('app',[]);



app.controller('count',function($scope,$http){
  $scope.data=[];
  $scope.mcount;
  $scope.scount;
  $scope.ucount;
  $scope.atcount;
  $scope.fcount;
  $scope.lcount;
  $scope.mvcount;
  $scope.qcount;
  $scope.getall=function(){

    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/students"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.scount=$scope.data.length;
      console.log($scope.mcount);
    })

    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/mentors"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.mcount=$scope.data.length;
      console.log($scope.mcount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/ContactUs"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.qcount=$scope.data.length;
      console.log($scope.mcount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/Universities"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.ucount=$scope.data.length;
      console.log($scope.ucount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/LoanCompanies"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.lcount=$scope.data.length;
      console.log($scope.mcount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/AirTravelCompanies"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.atcount=$scope.data.length;
      console.log($scope.mcount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/ForexCompanies"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.fcount=$scope.data.length;
      console.log($scope.mcount);
    })
    $http({
      method:"GET",
      url:"https://glacial-citadel-47306.herokuapp.com/api/MockVisaInterviews"})
      .then(function(res){
        console.log("my data is"+res.data.length)
      $scope.data=res.data;
      $scope.mvcount=$scope.data.length;
      console.log($scope.mcount);
    })
  }
  })


app.controller('mentor', function($scope, $http){
       $scopenewData={};
       $scope.data=[];
       $scope.originaldata=[];
       $scope.Search=function(){
         if($scope.name===undefined||$scope.name===""){
            $scope.data=$scope.originaldata;
         }
          else{
            $scope.data=$scope.originaldata.filter(user=>{
              if(user.Name.toLowerCase()===$scope.name.toLowerCase())
                return user;
            })
          }
       }
       $scope.getall=function(){
             $http({
                    method : "GET",
                    url : "https://glacial-citadel-47306.herokuapp.com/api/mentors",

                  }).then(function(res){
                    // console.log(res.data);
                  $scope.data=res.data;
                  $scope.originaldata=res.data;
                  console.log($scope.data);
            });
        }
        $scope.Reset=function(){
          var name=document.getElementById("namemen");
          name.value="";
          $scope.data=$scope.originaldata;
        }
});



app.controller('student', function($scope, $http){
       $scopenewData={};
       $scope.data=[];
       $scope.originaldata=[];
       $scope.Search=function(){
         if($scope.name===undefined||$scope.name===""){
            $scope.data=$scope.originaldata;
            if($scope.country===undefined||$scope.country==="")
              $scope.data=$scope.data;
            else{
              $scope.data=$scope.data.filter(user=>{
                if(user.StudyCountry.toLowerCase()===$scope.country.toLowerCase())
                  return user;
              })
            }
         }
          else{
            $scope.data=$scope.originaldata.filter(user=>{
              if(user.name.toLowerCase()===$scope.name.toLowerCase())
                return user;
            })
            console.log($scope.data);
          if($scope.country===undefined||$scope.country==="")
            $scope.data=$scope.data;
          else{
            $scope.data=$scope.data.filter(user=>{
              if(user.StudyCountry.toLowerCase()===$scope.country.toLowerCase())
                return user;
            })
          }
       }
       console.log($scope.data);
     }
       $scope.getall=function(){
             $http({
                    method : "GET",
                    url : "https://glacial-citadel-47306.herokuapp.com/api/students",

                  }).then(function(res){
                    // console.log(res.data);
                    $scope.data=res.data;
                    $scope.originaldata=res.data
                    console.log($scope.data)


            });
        }
        $scope.Reset=function(){
          var name=document.getElementById("namestu");
          var country=document.getElementById("namecountry");
          country.value="";
          name.value="";
          $scope.data=$scope.originaldata;
        }
});


app.controller('forex',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/ForexCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("forexname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})


app.controller('accomodation',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/accomodations",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("forexname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})



app.controller('student_document',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    console.log("yes")
    if($scope.Name===undefined||$scope.Name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.Name.toLowerCase()===$scope.Name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/Documents",
         }).then(function(res){
           console.log(res.data);
           var length=res.data.length;
           for(var i=0;i<length-1;i++){
             for(var j=i+1;j<length;j++){
               if(res.data[i].Name && res.data[j].Name){
               if(res.data[i].Name.localeCompare(res.data[j]) === 1){
                 var swap=res.data[i];
                 res.data[i]=res.data[j];
                 res.data[j]=swap;
               }
             }
           }
           }
           console.log(res.data);
           console.log("yes")
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)

   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("suab1");
          name.value="";
          $scope.data=$scope.originaldata;
        }
});





app.controller('contactview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/ContactUs",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})

app.controller('eventview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/events",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})





app.controller('bookedaccomodationview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.CompanyName.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/HelpForm",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})




app.controller('bookedloanview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.CompanyName.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/LoanInfoForms",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})





app.controller('bookedforexview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.CompanyName.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/ForexHelpForms",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})


app.controller('bookedairtravelview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.CompanyName.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/AirTravelForms",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})



app.controller('bookedmockvisaview',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.CompanyName.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/MockVisaInterviewForms",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})





app.controller('mockvisa',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/MockVisaInterviews",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("mockvisaname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})



app.controller('loan',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/LoanCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("loanname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})





app.controller('airtravel',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/AirTravelCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("airtravelname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})





app.controller('sending_data',function($scope,$http){

  $scope.send=function(){
  $http({
    method:"GET",
    url:`https://glacial-citadel-47306.herokuapp.com/api/UserSignUps/findOne?filter={"where":{"email":"${$scope.email}","password":"${$scope.password}"}}`
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  }
})
