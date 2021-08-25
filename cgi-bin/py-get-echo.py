#!/usr/bin/env python

# Import modules for CGI handling 
import cgi, cgitb, os, urlparse

print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>GET query string</title>")
print ("</head>")
print ("<body>")
print ("<h1 align='center'>GET Request Echo</h1>")
print ("<hr>")
print ("<h3>query string</h2>")
print ("<ul>")
x = os.environ.get('REQUEST_URI')
par = urlparse.parse_qs(urlparse.urlparse(x).query)
query = par.items()
for y, z in query:
	print "<li>"+ y + " = " + z + "</li>"
print ("</ul>")
print ("</body>")
print ("</html>")
