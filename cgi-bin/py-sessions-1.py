#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>Python Session Page 1</title>"
print "</head>"
print "<body>"
print "<h1 align='center'>Python Session Page 1</h1><hr>"
args=sys.stdin.read()
if args:
    v = "You do not have a name set"
else:
    k, v=args.split('='); POST[k]=v


print "<p><b>Name: </b>", v, "</p>"

print "<a href='/php-cgiform.html>CGI Form</a><br />"
print "<a href='/cgi-bin/php-sessions-2.php'>Session Page 2</a><br />"
print "<form style='margin-top:30px' action='/cgi-bin/php-destroy-session.php' method='get'><button type="submit">Destroy Session</button></form>"
print "</body>"
print "</html>"

