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
POST={}
args=sys.stdin.read().split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v

# if POST['name']:
#     s.post(setCookieUrl, params={'name': POST['name']}, auth=auth)

# r = requests.get(setCookieUrl, auth=auth)
# print(r.content)
if POST['name']:
    namme = POST['name']
else:
    namme = "You do not have a name set"

print "<form action=/cgi-bin/py-sessions-1.py' method='Post' id='form'>"
print "<input type='hidden' name='name' value='", namme, "'/>"
print "</form>"
print "<p><b>Name: </b>", namme, "</p>"
print "<a href='/py-cgiform.html'>CGI Form</a><br>"
print "<a href='/cgi-bin/py-sessions-1.py'>Session Page 1</a><br>"
print "<a href='/cgi-bin/py-destroy-session.py'>Destroy Session</a>"
print "</body>"
print "</html>"
