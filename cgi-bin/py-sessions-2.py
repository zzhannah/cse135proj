#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys, requests
s=requests.Session()
setCookieUrl = 'https://cse135proj.site/cookies/set'
getCookieUrl = 'https://cse135proj.site/cookies'
print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>Python Session Page 2</title>"
print "</head>"
print "<body>"
print "<h1 align='center'>Python Session Page 2</h1><hr>"
args = s.get(getCookieUrl)
print args.body()



print "<p><b>Name: </b>", v, "</p>"

print "<a href='/py-cgiform.html'>CGI Form</a><br />"
print "<a href='/cgi-bin/py-sessions-1.py'>Session Page 1</a><br />"
print "<a href='/cgi-bin/py-destroy-session.py'>Destroy Session</a>"
print "</body>"
print "</html>"
