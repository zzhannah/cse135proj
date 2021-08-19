#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys, requests
s=requests.Session()
setCookieUrl = 'https://cse135proj.site/cookies/set'
getCookieUrl = 'https://cse135proj.site/cookies'
print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>Python Session Page 1</title>"
print "</head>"
print "<body>"
print "<h1 align='center'>Python Session Page 1</h1><hr>"
args = s.get(getCookieUrl)
print args.body()
# if args:
#     name = "You do not have a name set"
# else:
#     k, name=args.split('='); POST[k]=name

# username = {'name': name}


print "<p><b>Name: </b>", v, "</p>"

print "<a href='/php-cgiform.html>CGI Form</a><br />"
print "<a href='/cgi-bin/php-sessions-2.php'>Session Page 2</a><br />"
print "<form style='margin-top:30px' action='/cgi-bin/php-destroy-session.php' method='get'><button type='submit'>Destroy Session</button></form>"
print "</body>"
print "</html>"
