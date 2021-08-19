#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os 

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>General Request Echo</title>"
print "</head>"

print "<body>"
print "<h1 align='center'>General Request Echo</h1><hr>" 
print "<p><b>Protocol:</b> %s</p>" % cgi.escape(os.environ["SERVER_PROTOCOL"])
print "<p><b>Method:</b> %s</p>" % cgi.escape(os.environ["REQUEST_METHOD"])

print "<p><b>Query String:</b> </p>"
print "<ul>"
GET={}
args=os.getenv("QUERY_STRING").split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k,v=arg.split('='); GET[k]=v
for a in POST:
    print "<li>", a , "=" , POST[a], "</li>"

print "</ul>"
print "<p><b>Message Body:</b> </p>"
print "<ul>"
POST={}
args=sys.stdin.read().split('&')

for arg in args: 
    t=arg.split('=')
    if len(t)>1: k, v=arg.split('='); POST[k]=v
for a in POST:
    print "<li>", a , "=" , POST[a], "</li>"
print "</ul>"
print "</body>"
print "</html>"
