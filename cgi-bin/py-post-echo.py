#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, requests

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>POST Message Body</title>"
print "</head>"
print "<body>"
print "<h1>POST Message Body</h1>"
args = request.body
print args

print "<p>Message Body: </p>"
print "</body>"
print "</html>"
