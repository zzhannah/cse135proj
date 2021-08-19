#!/usr/bin/env python

# Import modules for CGI handling 
import cgi, cgitb, os, sys

print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>POST Request Echo</title>")
print ("</head>")
print ("<body>")
print ("<h1 align='center'>POST Request Echo</h1><hr>")
print ("<p><b>Message Body: </b></p>")
print ("<ul>")
POST={}
args=sys.stdin.read().split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v

for a in POST:
    print ("<li>", a , "=" , POST[a], "</li>")

print ("</ul>")

print ("</body>")
print ("</html>")
