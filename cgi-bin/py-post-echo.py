#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>POST Message Body</title>"
print "</head>"
print "<body>"
print "<h1>POST Message Body</h1>"
for key, value in request.POST.items():
    print('Key: %s' % (key) ) 
    print('Value %s' % (value) ) 
print "<p>Message Body: %s</p>" % cgi.escape(os.environ["QUERY_STRING"])
print "</body>"
print "</html>"
