
   //You are given a string, whose size is stored in a variable with the name N. 
   //The string is stored in a variable with the name str
   //Print Yes, if the string is a palindrome, else print No


    let N = 5
    let str = "naman"

    let bag1="";
    let bag2="   ";
    
    for (i=0; i<N; i++) {
        
        bag1=bag1+str[i];
    }
    
    for (i=N-1; i<=0; i++) {
        
        bag2=bag2+str[i];
    }
    