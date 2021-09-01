link: cse135proj.site
-basic auth:
    username: grader
    password: CSE.135

-user management auth:
    -admin user:
        username:   grader.admin
        email:      test1@test.com
        password:   CSE.135
    
    -basic user:
        username:   grader.basic
        email:      test2@test.com
        password:   CSE.135

Authentication:
    I have used passport.js to develop the authentication of my website. I have tried using a thrid party app call auth0 in the beginning, but then I have to use its role function too. So i decided to use passport package so that in the second part, i can easily use my database to implement role of the user, just adding one more field to the user object. Using my own database means i don't have to put the information of the users of my website to another third party's pocket.

Dashboard:
    