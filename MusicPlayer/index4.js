var arr=[];
var obj=Object();
const tosignup = document.getElementById("tosignup");
const signupdis = document.querySelector(".signupdis");
const container = document.querySelector(".main_div");
const signupbtn=document.getElementById("signupbtn");
const susername=document.getElementById("susername");
const semail=document.getElementById("sEmail");
const sPassword=document.getElementById("sPassword");
const csPassword=document.getElementById("csPassword");
const tologin = document.getElementById("tologin");
const logindis = document.querySelector(".logindis");
const singupcross=document.getElementById("signupcross");
const logincross=document.getElementById("logincross");
const lusername=document.getElementById("lusername");
const lPassword=document.getElementById("lPassword");
const loginbtn=document.getElementById("loginbtn");
const switchs=document.getElementById("switchs");
const switchl=document.getElementById("switchl");
const signupmessage=document.getElementById("signupmessage");
const loginmessage=document.getElementById("loginmessage");
const usersign=document.getElementById("usersign");
const tosignupbtn=document.getElementById("tosignupbtn");
const tologinbtn=document.getElementById("tologinbtn");
const sper=document.getElementById("sper");
const suer=document.getElementById("suer");
const seer=document.getElementById("seer");
const userprofile=document.getElementById("userprofile");
const tosignout=document.getElementById("tosignout");
const tosignoutbtn=document.getElementById("tosignoutbtn");
const logoutdiv=document.getElementById("logoutdiv");
const loginsystem=document.getElementById("loginsystem");
var loginflag=false;
var signupflag=false;

const logintopage=()=>{
    loginflag=true;
    signupflag=false;
    console.log("tologin "+loginflag);
    console.log("tosignup "+signupflag);
    logindis.style.display = "block";
    signupdis.style.display="none";
    container.style.opacity = "0.04";
    // container.style.backgroundImage="linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);"
}


const signuptopage=()=>{
    signupflag=true;
    loginflag=false;
    console.log("tologin "+loginflag);
    console.log("tosignup "+signupflag);
    signupdis.style.display = "block";
    logindis.style.display = "none";
    container.style.opacity = "0.04";
}

const signouttopage=()=>{
    // const store=userprofile.innerText;
    // arr=arr.filter((val)=>{
    //     return val.username!=store;
    // })
    // tosignupbtn.style.display="block";
    // tologinbtn.style.display="block";
    // tosignoutbtn.style.display="none";
    logoutdiv.style.display="none";
    userprofile.innerText="";
    loginsystem.style.display="flex";
    
}

tologin.addEventListener('click',logintopage);
tosignup.addEventListener('click',signuptopage);
tosignout.addEventListener('click',signouttopage);

const crosslogin=()=>{
    loginflag=false;
    console.log("crosslogin "+loginflag);
    logindis.style.display = "none";
    container.style.opacity = "1";
}


const crosssignup=()=>{
    signupflag=false;
    console.log("crosssignup "+signupflag);
    signupdis.style.display = "none";
    container.style.opacity = "1";
}
logincross.addEventListener('click',()=>{
    console.log("loginflag "+loginflag);
    loginflag?crosslogin():crosssignup()
})
singupcross.addEventListener('click',()=>{
    console.log("signupflag "+signupflag);
    signupflag?crosssignup():crosslogin();
})

signupbtn.addEventListener('click',()=>{
    obj={};
    const username=susername.value;
    const Password=sPassword.value;
    const email=semail.value;
    const cPassword=csPassword.value;
    if(username && Password && email && cPassword)
    {


        const usercheck=/^[A-Za-z.]{3,30}$/;
        const passcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
        const emailcheck=/^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

        if(!(usercheck.test(username)))
        {
            suer.innerText="Username not entered correctly.";
            suer.style.color="red";
            suer.style.fontWeight="bold";
            suer.style.fontSize="1.5rem";
            susername.style.backgroundColor="red";
        }else if(!(emailcheck.test(email)))
        {
            seer.innerText="Email not enetered correctly .";
            suer.innerText="";
            seer.style.color="red";
            seer.style.fontWeight="bold";
            seer.style.fontSize="1.5rem";
            semail.style.backgroundColor="red";
            susername.style.backgroundColor="green";
           
        }else if(!(passcheck.test(Password)))
        {
            sper.innerText="Please enter atleast 1 number,1 special character and of minimum size of 8 and maximum size of 16.";
            seer.innerText="";
            suer.innerText="";
            sper.style.color="red";
            sper.style.fontSize="1.2rem";
            sper.style.fontWeight="bold";
            semail.style.backgroundColor="green";
            sPassword.style.backgroundColor="red";
            susername.style.backgroundColor="green";
        }
        else if(cPassword===Password)
        {

            // check if username exists before or not
            sper.innerText="";
            seer.innerText="";
            suer.innerText="";
            semail.style.backgroundColor="green";
            sPassword.style.backgroundColor="green";
            susername.style.backgroundColor="green";
            csPassword.style.backgroundColor="green";
           const storeuser= arr.find((val)=>{
                return val.username===username;
            })
            console.log("store user is "+storeuser);
            // if exist
            if(storeuser)
            {
                console.log("Username exist try another one ");
                signupmessage.innerHTML="Username exist try another one ";
                
            }

            // check if username exists before or not
            const storeemail= arr.find((val)=>{
                return val.email===email;
            })
            console.log("store email is "+storeemail);
            // if exist
            if(storeemail)
            {
                console.log("Email exist try another one ");
                signupmessage.innerHTML="Email exist try another one ";
                
            }

            if(!storeuser && !storeemail)
            {
                obj={...obj,username:username,email:email,Password:Password,cPassword:cPassword};
                arr=[...arr,obj];
                console.log(obj);
                console.log(arr);
                console.log("Signup successfully");
                signupmessage.innerHTML="Signup Successfully ";
                // usersign.innerHTML+=`<h3 id="auth">${username}</h3>`;
                userprofile.innerText=`${username}`;
                logoutdiv.style.display="flex";
                logoutdiv.style.justifyContent="space-between";
                loginsystem.style.display="none";
                crosssignup();
            }



    
           
        }else{
            sper.innerText="";
            seer.innerText="";
            suer.innerText="";
            semail.style.backgroundColor="green";
            sPassword.style.backgroundColor="red";
            susername.style.backgroundColor="green";
            csPassword.style.backgroundColor="red";
            console.log("Password do not match");
            signupmessage.innerHTML="Password do not match."
        }
    }else{
        semail.style.backgroundColor="red";
        sPassword.style.backgroundColor="red";
        susername.style.backgroundColor="red";
        csPassword.style.backgroundColor="red";
        console.log("Please fill all values");
        signupmessage.innerHTML="Please fill all details .";
    }
   
});


loginbtn.addEventListener('click',()=>{
    const username=lusername.value;
    const Password=lPassword.value;

    if(username && Password)
    {
        const flag=arr.find((val)=>{
            return (val.username==username && val.Password==Password);
        })
        if(!flag)
        {
            console.log("Please sign up");
            loginmessage.innerHTML="You are not registered . Please Sign Up ";
        }
        else{
            console.log("login successfully");
            loginmessage.innerHTML="Login Successfully.";
            // usersign.innerHTML+=`<h3 id="auth">${username}</h3>`;
            userprofile.innerText=`${username}`;
            logoutdiv.style.display="flex";
            logoutdiv.style.justifyContent="space-between";
            loginsystem.style.display="none";
            crosslogin();
        }
    }else{
        loginmessage.innerHTML="Please fill all the details .";
    }

   
})



switchs.addEventListener('click',()=>{
    console.log("clicked swtich to login");
    return logintopage();
});
switchl.addEventListener('click',()=>{
    console.log("clicked swtich to signup");
    return signuptopage();
});

tosignout.addEventListener('click',signouttopage);