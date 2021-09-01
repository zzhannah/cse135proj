link: cse135proj.site
dashboard access under homework 4

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
    In this part, i have ploted three charts
        1: transfer Size, duration and decode body size from different users
        2: Dom content loaded event start and end time from different users
        3: the comparison of transfer size and decoded body size