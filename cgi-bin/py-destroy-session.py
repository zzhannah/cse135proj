#!/usr/bin/env python

# Import modules for CGI handling 
import cgi, cgitb, os 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
if form.getvalue('textcontent'):
   msg = form.getvalue('textcontent')

print "Cache-Control: no-cache\n"
print "Set-Cookie: destroyed\n"
print "Content-type:text/html\n"

print "<html>"
print "<head>"
print "<title>Python Session Destroyed</title>"
print "</head>"

print "<body>"
print "<a href='/cgi-bin/py-sessions-1.py'>Back to Page 1</a>"
print "<br />" 
print "<a href='/cgi-bin/py-sessions-2.py'>Back to Page 2</a>"
print "<br />"
print "<a href='/py-cgiform.html'>Python CGI Form</a>"
print "</body>"
print "</html>"
