#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, requests, sys

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>POST Message Body</title>"
print "</head>"
print "<body>"
print "<h1>POST Message Body</h1>"
args=sys.stdin.read().split('&')
for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v
print "<p>Message Body: </p>"
print "</body>"
print "</html>"
