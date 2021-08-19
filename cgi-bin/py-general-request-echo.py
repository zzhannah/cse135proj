#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os 

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>General Request Echo</title>"
print "</head>"

print "<body>"
print "<h1>General Request Echo</h1>" 
print "<p>Protocol: %s</p>" % cgi.escape(os.environ["SERVER_PROTOCOL"])
print "<p>Method: %s</p>" % cgi.escape(os.environ["REQUEST_METHOD"])
print "<p>Message Body: %s</p>" % cgi.escape(os.environ["QUERY_STRING"])
print "</body>"
print "</html>"
