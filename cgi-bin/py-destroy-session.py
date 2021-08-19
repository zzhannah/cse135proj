#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys
print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Session Destroy</title>")
print ("</head>")
print ("<body>")
print ("<h1 align='center'>Session Destroyed</h1><hr>")
POST={}
args=sys.stdin.read().split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v

# if POST['name']:
#    POST['name'] = None


# print ("<form action='/cgi-bin/py-sessions-1.py' method='post'>")
# print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
# print ("<button type='submit'>Session 1</button></form>")
# print ("<form action='/cgi-bin/py-sessions-2.py' method='post'>")
# print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
# print ("<button type='submit'>Session 2</button></form>")
# print ("<a href='/py-cgiform.html'>Python CGI Form</a>")

print ("</body>")
print ("</html>")

