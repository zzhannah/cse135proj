#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
if form.getvalue('textcontent'):
   msg = form.getvalue('textcontent')

print "Cache-Control: no-cache\n"
print "Content-type:text/html\n"

print "<html>"
print "<head>"
print "<title>Python Session 2</title>"
print "</head>"

print "<body>"

print "<br />"
print "<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a>"
print "<br />"
print "<a href=\"/py-cgiform.html\">Python CGI Form</a>"
print "<br /><br />"

print "<form action=\"/cgi-bin/c-destroy-session.cgi\" method=\"get\">"
print "<button type=\"submit\">Destroy Session</button>"
print "</form>"
print "</body>"
print "</html>"
