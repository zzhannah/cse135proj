#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys
print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Python Session Page 2</title>")
print ("</head>")
print ("<body>")
print ("<h1 align='center'>Python Session Page 2</h1><hr>")
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
    print ("<p><b>Name: </b>"+ POST['name'] + "</p>")
else:
    print ("<p><b>Name: </b>you do not have a name set</p>")


print ("<a href='/py-cgiform.html'>CGI Form</a><br>")

print ("<form action='/cgi-bin/py-sessions-1.py' method='post'>")
print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
print ("<button type='submit'>Session 1</button></form>")
# print ("<a href='/cgi-bin/py-sessions-1.py'>Session Page 1</a><br>")
# print ("<a href='/cgi-bin/py-destroy-session.py'>Destroy Session</a>")

print ("<form action='/cgi-bin/py-destroy-session.py' method='post'>")
print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
print ("<button type='submit'>Destroy Session</button></form>")

print ("</body>")
print ("</html>")

