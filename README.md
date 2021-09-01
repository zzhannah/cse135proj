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
            for this chart, i want to see if the transfer size and the decoded body size will affect the duration.
        2: Dom content loaded event start and end time from different users
            for this chart, i want to see if the computer preformance will affet the Dom conten load time. So i actually user different computers to "make up" some data in the database. But these two computer has similar specs, so i don't see any big difference in Dom conten load time.
        3: the comparison of transfer size and decoded body size
            for this chart, i have compare the transfer size and the decoded body size.

Report:
    In this part, I have ploted duration time with transfer size together. Actually, I ploted this chart before I went to google about the terms 'duration' and 'transfer size'. I was  wondering will the transfer size affect the duration when a page is load when I was doing this part of the homework. But from the chart, it seems like the durations are vary while the transfer sizes are pretty stable.

Note:
    Hi, I just want to say that my partner didn't write a word during the whole summer session. I am taking 4 courses in the session 2, so i have to stay up the whole day and night for two or three days every week to finish all 4 homeworks alone. i don't think it is only unfair to me personally, but unfair to the whole class. for the first homework, she tried to behave and acted like she was working on the homework. However, she havs never write even a word. And for the third and fourth homework, she didn't even bother to say a 'thank you' to me. I feel so upset about all these things.
