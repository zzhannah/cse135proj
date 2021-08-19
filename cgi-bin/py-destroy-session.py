#!/usr/bin/env python

# Import modules for CGI handling 
import cgi, cgitb, os 


print ("Content-type:text/html\r\n\r\n")

print ("<html>")
print ("<head>")
print ("<title>Python Session Destroyed</title>")
print ("</head>")
print ("<body>")

POST={}
args=sys.stdin.read().split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v

POST['name'] = None

print ("<form action='/cgi-bin/py-sessions-1.py' method='post'>")
print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
print ("<button type='submit'>Session 1</button></form>")
print ("<form action='/cgi-bin/py-sessions-2.py' method='post'>")
print ("<input type='hidden' name='name' value='"+ POST['name'] + "'>")
print ("<button type='submit'>Session 2</button></form>")
print ("<a href='/py-cgiform.html'>Python CGI Form</a>")
print ("</body>")
print ("</html>")
