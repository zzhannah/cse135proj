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



print "<p><b>Name: </b>", v, "</p>"

print "<a href='/py-cgiform.html>CGI Form</a><br />"
print "<a href='/cgi-bin/py-sessions-2.py'>Session Page 2</a><br />"
print "<form style='margin-top:30px' action='/cgi-bin/py-destroy-session.py' method='get'><button type='submit'>Destroy Session</button></form>"
print "</body>"
print "</html>"
